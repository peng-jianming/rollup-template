const rollup = require('rollup');
const basePlugins = require('./rollup.base');
const devPlugins = require('./rollup.dev.js');
const { entryConf, target } = require('./config');

const getOptions = (entry = 'test') => {
  const conf = entryConf[entry];
  return {
    input: conf.entry,
    output: {
      file: `${target}/${conf.filename}.js`,
      name: conf.name,
      format: conf.format || 'umd'
    },
    watch: {
      chokidar: 'src'
    },
    plugins: [...basePlugins, ...devPlugins]
  };
};

const watcher = rollup.watch(getOptions(process.argv[2]));

watcher.on('event', (event) => {
  const tip = {
    START: '构建开始',
    BUNDLE_START: '模块构建开始',
    BUNDLE_END: '模块构建完毕',
    ERROR: '构建出错',
    END: '构建结束 \n ------------------------------------------------------------------'
  };
  if (tip[event.code]) console.log(tip[event.code]);
  if (event.error) console.log(event.error);
  if (event.result) event.result.close();
});
