import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {},
  qiankun: {
    master: {
      apps: [
        {
          name: 'vue',
          entry: '/vue.html',
        }
      ],
    },
  }
});
