var path = require('path');

module.exports = {
  mode: 'none', // production, development, none
  entry: './index.js', //진입점
  output: { //결과물
    filename: 'bundle.js', //[chunkhash].js
    path: path.resolve(__dirname, 'dist')
  },
  module: { //loader
    rules: [
      {
        test: /\.css$/, //모든 css 파일 대상으로 아래 loader를 적용한다란 의미
        use: ['style-loader', 'css-loader']
      }
    ]
  },
}