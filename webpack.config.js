const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].min.js'  // Arquivo de saída do JS
  },
  module: {
    rules: [
      {
        test: /\.js$/,  // Para arquivos JS
        use: 'babel-loader'
      },
      {
        test: /\.css$/,  // Para arquivos CSS
        use: [
          MiniCssExtractPlugin.loader,  // Extrai CSS para arquivo separado
          'css-loader'  // Interpreta @import e url() dentro do CSS
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].min.css'  // Nome do arquivo CSS de saída
    })
  ],
  mode: 'development'
};
