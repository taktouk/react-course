const path = require("path");

module.exports = (baseConfig, env, defaultConfig) => {
  // Extend defaultConfig as you need.

  // For example, add typescript loader:
  defaultConfig.module.rules.push({
    test: /\.scss$/,
    loaders: ["style-loader", "css-loader", { loader: "sass-loader", options: { implementation: require("sass") }}],
    include: path.resolve(__dirname, "../")
  });
  defaultConfig.resolve.extensions.push(".ts", ".tsx");

  return defaultConfig;
};
