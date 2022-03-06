var path = require("path");
var webpack = require("webpack");
const miniCss = require("mini-css-extract-plugin");

module.exports = {
    entry: "./js/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "./dist"),
    },
    module: {
        rules: [
            {
                test: /\.(s*)css$/,
                use: [miniCss.loader, "css-loader", "sass-loader"],
            },
        ],
    },
    plugins: [
        new miniCss({
            filename: "style.css",
        }),
        new webpack.ProvidePlugin({
            process: "process/browser",
        }),
        new webpack.DefinePlugin({
            "process.env": JSON.stringify(process.env),
        }),
    ],
    mode: "development",
};
