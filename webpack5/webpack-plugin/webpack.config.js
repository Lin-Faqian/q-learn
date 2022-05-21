const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackUploadToCosPlugin = require('./build/webpack-upload-cos');
const webpack = require('webpack')
const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode:"production",
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'static/[name]-[hash].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new webpack.SourceMapDevToolPlugin({
      filename: 'static/[name]-[fullhash].js.map',
    }),
    new WebpackUploadToCosPlugin({
      auth: {
        SecretId: '', // 在腾讯 COS 控制台获取
        SecretKey: '', // 在腾讯 COS 控制台获取 
      },
      Bucket: "", // COS 服务节点
      Region: "ap-beijing",// 地域
      cosBaseDir: 'auto_upload', // 一级目录
      project: 'test', // 项目名(用于存放文件的直接目录)
      exclude:/(.*\.js\.map$)|(.*\.html$)/, // 不上传的文件
      enableLog: true, // 是否输出日志
      removeMode: false // 是否删除源目录
    })
  ],
};