var webpackTemplateConfig = require("@SS/webpack-template/webpack.config");
var webpackConfig = {
  devServer: {
    historyApiFallback: true,
  },
  output: {
    publicPath: "/",
  },
};
module.exports = webpackTemplateConfig(__dirname, webpackConfig);
