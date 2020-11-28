const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackplugin = require('html-webpack-plugin');
const path = require('path')

module.exports = {
  mode: 'development', // 打包模式
  entry : './src/main.js', // 入口文件
  output : {
      filename : 'bundle.js', // 输出文件名
      path :  __dirname + '/dist' // 输出文件的根路径
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      // // 它会应用到普通的 `.js` 文件
      // // 以及 `.vue` 文件中的 `<script>` 块
      // {
      //   test: /\.js$/,
      //   loader: 'babel-loader'
      // },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    // 请确保引入这个插件来施展魔法
    new VueLoaderPlugin(),
    new HtmlWebpackplugin({
      filename: 'index.html', // 打包后的文件名，默认index.html
      template: path.resolve(__dirname, '/src/index.html') // 导入被打包的文件模板
    })
  ]
}