module.exports = {
entry: ['./app.js'],
  output: {
    filename: 'bundle.js'
  },
  devtool: 'eval-source-map',
  watch: true,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
      },
      {
        test: /\.scss/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.pug$/,
        use: 'pug-loader'
      }
    ]
  }

};
