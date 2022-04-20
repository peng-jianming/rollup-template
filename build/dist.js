const rollup = require('rollup');
const basePlugins = require('./rollup.base.js');
const prodPlugins = require('./rollup.prod.js');
const { entryConf, target } = require('./config/index.js');
function getOptions(key = 'test') {
  const conf = entryConf[key];
  return {
    input: conf.entry,
    output: {
      file: `${target}/${conf.filename}.js`,
      name: conf.name,
      format: conf.format || 'umd'
    },
    plugins: [...basePlugins, ...prodPlugins]
  };
}

async function buildAsset(key) {
  let bundle;
  const opts = getOptions(key);
  try {
    // create a bundle
    bundle = await rollup.rollup({
      external: opts.external,
      input: opts.input,
      plugins: opts.plugins
    });

    await bundle.write({
      output: opts.output
    });
    console.log(`${opts.output.name}打包完成`);
  } catch (error) {
    // do some error reporting
    console.error(error);
  }
  if (bundle) {
    // closes the bundle
    await bundle.close();
  }
}

function build() {
  if (process.argv[2]) {
    return buildAsset(process.argv[2]);
  }
  Object.entries(entryConf).forEach(async ([key, value]) => {
    await buildAsset(key);
  });
}

build();
