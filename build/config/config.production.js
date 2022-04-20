module.exports = {
  target: 'dist/release',
  entryConf: {
    test: {
      name: 'Test',
      entry: 'src/test/main.js',
      filename: 'test.min'
    },
    test2: {
      name: 'Test2',
      entry: 'src/test2/main.js',
      filename: 'test2.min'
    }
  }
};
