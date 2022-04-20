const serve = require('rollup-plugin-serve');
const livereload = require('rollup-plugin-livereload');

module.exports = [
  serve({
    port: 8003, // 监听哪一个端口
    contentBase: '.' // 服务哪一个文件夹
  }),
  livereload({ watch: 'dist/debug' })
];
