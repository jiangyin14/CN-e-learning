// scripts/algolia-indexer.mjs
import algoliasearch from 'algoliasearch';
import { glob } from 'glob';
import { readFileSync } from 'fs';
import matter from 'gray-matter';
import { join } from 'path';

// 从环境变量中获取 Algolia 凭据（更安全）
const { ALGOLIA_APP_ID, ALGOLIA_API_KEY, ALGOLIA_INDEX_NAME } = process.env;

if (!ALGOLIA_APP_ID || !ALGOLIA_API_KEY || !ALGOLIA_INDEX_NAME) {
  console.error('Algolia environment variables are not set.');
  process.exit(1);
}

// 1. 初始化 Algolia 客户端
const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY);
const index = client.initIndex(ALGOLIA_INDEX_NAME);

// 2. 查找所有 Markdown 文件
const files = await glob('docs/**/*.md', {
  ignore: ['node_modules/**', '**/index.md'], // 忽略不需要的文件
});

// 3. 解析文件并创建 Algolia 记录
const records = [];
for (const file of files) {
  const content = readFileSync(file, 'utf-8');
  const { data, content: pageContent } = matter(content);

  // 如果 frontmatter 中标记为 noindex，则跳过
  if (data.noindex) {
    continue;
  }

  // 按标题拆分内容
  const sections = pageContent.split(/(?=\n## |^# )/g);
  let currentH1 = data.title || '';

  for (const section of sections) {
    if (!section.trim()) continue;

    const matchH1 = section.match(/^# (.+)/);
    const matchH2 = section.match(/^## (.+)/);
    const matchH3 = section.match(/^### (.+)/);

    let title = '';
    let hierarchy = {
      h1: currentH1,
      h2: null,
      h3: null,
    };

    if (matchH1) {
      currentH1 = matchH1[1];
      hierarchy.h1 = currentH1;
      title = currentH1;
    } else if (matchH2) {
      hierarchy.h2 = matchH2[1];
      title = matchH2[1];
    } else if (matchH3) {
      hierarchy.h3 = matchH3[1];
      title = matchH3[1];
    }
    
    // 移除 Markdown 语法
    const textContent = section
      .replace(/```[\s\S]*?```/g, '') // 移除代码块
      .replace(/#+ /g, '')            // 移除标题标记
      .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1') // 移除链接
      .replace(/<[^>]+>/g, '')         // 移除 HTML 标签
      .replace(/\s+/g, ' ')           // 替换多余空格
      .trim();

    // VitePress 默认的路由路径
    const path = `/${file.replace('docs/', '').replace('.md', '.html')}`;

    records.push({
      objectID: `${path}-${title}`, // 创建唯一 ID
      path,
      title,
      content: textContent,
      hierarchy,
    });
  }
}

// 4. 上传到 Algolia
try {
  console.log(`Clearing index: ${ALGOLIA_INDEX_NAME}`);
  await index.clearObjects();
  console.log(`Indexing ${records.length} records...`);
  await index.saveObjects(records);
  console.log('Indexing complete!');
} catch (error) {
  console.error('Error during indexing:', error);
}