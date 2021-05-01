// 引入一个包
const path = require('path')
// 引入 html 插件
const HTMLWebpackPlugin = require('html-webpack-plugin')
// 引入clean插件
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

// webpack 的所有配置信息
module.exports = {
// 指定入口文件
  entry: "./src/index.ts",
// 指定打包文件所在目录
  output: {
// 指定打包文件的目录
    path: path.resolve(__dirname, 'dist'),
//  指定打包后的文件文件名
    filename: 'bundle.js',
//不使用箭头函数
    environment: {
      arrowFunction: false
    }
  },
  // 指定webpack打包时要使用模块
  module: {
    // 指定要加载的规则
    rules: [
      {
        // 指定规则生效的文件
        test: /\.ts$/,
        // 要使用的loader
        use: [
          // 配置babel
          {
            // 指定加载器
            loader: 'babel-loader',
            // 设置babel
            options: {
              // 设置预定义的环境
              presets: [
                [
                  // 指定环境的插件
                  "@babel/preset-env",
                  // 配置信息
                  {
                    // 要兼容的目标浏览器
                    targets: {
                      "chrome": '58',
                      'ie': '11'
                    },
                    // 指定corejs的版本
                    "corejs": "3",
                    // 使用corejs的方式 "usage" 表示按需加载
                    "useBuiltIns": "usage"
                  }
                ]
              ]
            }
          },
          'ts-loader'

        ],
        exclude: /node-modules/
      }
    ]
  },
//  配置Webpack插件
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: "./src/index.html"
    })
  ],
//  设置引用模块
  resolve: {
    extensions: ['.ts', '.js']
  }
};