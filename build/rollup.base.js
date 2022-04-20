// rollup.js编译源码中的模块引用默认只支持 ES6+的模块方式import/export。然而大量的npm模块是基于CommonJS模块方式，
// 这就导致了大量 npm 模块不能直接编译使用。所以辅助rollup.js编译支持 npm模块和CommonJS模块方式的插件就应运而生。
const { nodeResolve } = require('@rollup/plugin-node-resolve');

// 将非ES6语法的包转为ES6可用(比如将上面的转为ES6)
const commonjs = require('@rollup/plugin-commonjs');

// 替换待打包文件里的一些变量，如process在浏览器端是不存在的，需要被替换
const replace = require('@rollup/plugin-replace');

const { babel } = require('@rollup/plugin-babel');

const postcss = require('rollup-plugin-postcss');
// const typescript = require('rollup-plugin-typescript2');
const vue = require('@vitejs/plugin-vue');
const { DEFAULT_EXTENSIONS } = require('@babel/core');

const env = process.env.NODE_ENV;

module.exports = [
  vue(),
  nodeResolve({ browser: true }),
  // 最好放在上面,因为babel处理es6代码
  // typescript({
  //   tsconfig: './tsconfig.json'
  // }),
  postcss(),
  commonjs({
    include: 'node_modules/**'
  }),
  babel({
    babelHelpers: 'runtime',
    exclude: 'node_modules/**',
    extensions: [...DEFAULT_EXTENSIONS, '.ts', '.tsx', '.vue']
  }),
  replace({
    'process.env.NODE_ENV': JSON.stringify(env),
    preventAssignment: true
  })
];
