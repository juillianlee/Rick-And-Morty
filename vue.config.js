module.exports = {
  pluginOptions: {
    apollo: {
      lintGQL: false,
    },
  },
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Rick And Morty',
      chunks: ['chunk-vendors', 'chunk-common', 'index'],
    },
  },
};
