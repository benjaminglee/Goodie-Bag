module.exports = {
  entry: ["@babel/polyfill", "./app/main.js"],
  mode: "development",
  output: {
    path: __dirname,
    filename: "./public/bundle.js",
  },
  context: __dirname,
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/preset-react"] },
      },
    ],
  },
};
