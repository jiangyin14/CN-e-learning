<template>
  <Layout>
    <!-- 保留默认主题布局 -->
    <template #doc-after>
      <!-- 在这里添加 Twikoo 评论组件 -->
      <Twikoo />
    </template>
  </Layout>
</template>

<script setup>
import Layout from 'vitepress/dist/client/theme-default/Layout.vue'
import Twikoo from './Twikoo.vue'
</script>

<style scoped>
.twikoo .el-loading-spinner .circular {
  margin-left: auto;
  margin-right: auto;
}
</style>