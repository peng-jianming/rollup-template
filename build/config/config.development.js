module.exports = {
  target: 'dist/debug',
  entryConf: {
    test: {
      name: 'Test',
      entry: 'src/test/main.js',
      filename: 'test'
    },
    test2: {
      name: 'Test2',
      entry: 'src/test2/main.js',
      filename: 'test2'
    }
  }
};
