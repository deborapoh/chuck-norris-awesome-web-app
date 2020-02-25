const CompressionPlugin = require("compression-webpack-plugin");
const {
  override,
  overrideDevServer,
  watchAll,
  useEslintRc,
  addWebpackPlugin,
  addWebpackModuleRule,
  adjustWorkbox,
  addBabelPlugin
} = require("customize-cra");

module.exports = {
  webpack: override(
    addBabelPlugin([
      "root-import",
      {
        paths: [
          {
            rootPathPrefix: "~",
            rootPathSuffix: "src"
          }
        ]
      }
    ]),
    addWebpackPlugin(new CompressionPlugin()),
    adjustWorkbox(wb =>
      Object.assign(wb, {
        skipWaiting: true,
        exclude: (wb.exclude || []).concat("index.html")
      })
    ),
    addWebpackModuleRule({
      type: "javascript/auto",
      test: /\.mjs$/
    }),
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEslintRc()
  ),
  devServer: overrideDevServer(
    // dev server plugin
    watchAll()
  )
};
