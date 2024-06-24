const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.jsx",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]",
              context: "src",
              emitFile: true
            }
          }
        ]
      },
      {
        test: /\.(mp4|webm|ogg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]",
              context: "src",
              emitFile: true
            }
          }
        ]
      }
    ]
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "../dist")
    },
    compress: true,
    port: 3000,
    historyApiFallback: true
  },
  resolve: {
    extensions: [".js", ".jsx"]
  }
};
