/**
 * @Name：admin webpack配置文件
 * @Author：陈晨
 */
const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');
module.exports = {
  publicPath : './',
  chainWebpack : config => {
    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();
    svgRule
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId : 'icon-[name]'
      });
  },
  css : {
    loaderOptions : {
      postcss : {
        plugins : [
          autoprefixer(),
          pxtorem({
            rootValue : 37.5,
            propList : ['*'],
            // 该项仅在使用 Circle 组件时需要
            // 原因参见 https://github.com/youzan/vant/issues/1948
            selectorBlackList : ['van-circle__layer']
          })
        ]
      }
    }
  }
};
