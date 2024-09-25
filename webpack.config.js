const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin'); // <-- Importa el plugin para copiar archivos

module.exports = {
  entry: './app.js', // Archivo de entrada principal
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/, // Manejo de archivos CSS
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg)$/, // Manejo de imágenes
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html', // Archivo HTML de entrada
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'assets', to: 'assets' } // <-- Copia la carpeta de imágenes "assets" a la carpeta "dist"
      ]
    })
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
    open: true,
  },
  mode: 'development',
};
