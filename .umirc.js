// ref: https://umijs.org/config/
export default {
  base: '/umi-hero/',
  publicPath: '/umi-hero/',
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true,
        dynamicImport: false,
        title: '英雄',
        dll: false,

        routes: {
          exclude: [
            /models\//,
            /services\//,
            /model\.(t|j)sx?$/,
            /service\.(t|j)sx?$/,
            /components\//,
          ],
        },
      },
    ],
    'umi-plugin-gh-pages',
  ],
  // proxy: {
  //   '/api': {
  //     target: 'https://pvp.qq.com/web201605/js/',
  //     changeOrigin: true,
  //     pathRewrite: { '^/api': '' },
  //   },
  // },
};
