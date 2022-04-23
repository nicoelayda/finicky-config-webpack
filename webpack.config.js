const path = require("path");
const os = require("os");

module.exports = {
  mode: "production",
  entry: {
    "config.personal": path.resolve(__dirname, "src", "personal.js"),
    "config.work": path.resolve(__dirname, "src", "work.js"),
  },
  output: {
    filename: "[name].js",
    path: path.resolve(os.homedir(), ".config", "finicky"),
    library: {
      type: "commonjs2",
      export: "FinickyConfiguration",
    },
    iife: false,
  },
  optimization: {
    minimize: true
  },
};