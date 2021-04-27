const path = require('path');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");

const projectInfo = {
    dirname: __dirname,
    name: 'material-importer',
    mode: 'development'
};

module.exports = {
    entry: './src/pages/importer/index.tsx',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'extension.js',
        libraryTarget: 'umd',
        devtoolModuleFilenameTemplate: '../[resource-path]',
    },
    mode: projectInfo.mode,
    // devtool:"cheap-module-eval-source-map",// 开发环境配置
    // devtool:"cheap-module-source-map",   // 线上生成配置
    devtool: 'source-map',
    resolve: {
        alias: {
            "@": path.join(__dirname, "src"),
            // pages: path.join(__dirname, "src/pages"),
            // router: path.join(__dirname, "src/router")
        }
    },
    module: {
        rules: [{
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader'
                }]
            },
            {
                test: /\.scss$/,
                use: [{
                        loader: "css-loader", // 允许在js中import一个css文件，会将css文件当成一个模块引入到js文件中
                    },
                    {
                        loader: "sass-loader" // 将sass编译为css
                    },
                    {
                        loader: "postcss-loader"
                    }
                ]
            },
            {
                test: /\.(gif|png|jpg|woff|svg|ttf|eot)$/, //图片的处理
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10,
                        outputPath: 'images/', // 指定打包后的图片位置
                        name: '[name].[ext]',
                        publicPath: '../images'
                    }
                }]
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/ //表示node_modules中的tsx文件不做处理
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        //引入html
        new HtmlWebpackPlugin({
            title: 'marterial-importer',
            template: path.resolve(__dirname, './public/index.html'), // template file
            filename: 'index.html', // output file
        })
    ],
    optimization: {
        // splitChunks: {
        //     chunks: 'async',
        //     minSize: 20000,
        //     minRemainingSize: 0,
        //     minChunks: 1,
        //     maxAsyncRequests: 30,
        //     maxInitialRequests: 30,
        //     enforceSizeThreshold: 50000,
        //     cacheGroups: {
        //         defaultVendors: {
        //             test: /[\\/]node_modules[\\/]/,
        //             priority: -10,
        //             reuseExistingChunk: true,
        //         },
        //         default: {
        //             minChunks: 2,
        //             priority: -20,
        //             reuseExistingChunk: true,
        //         },
        //     },
        //     runtimeChunk: {
        //         name: entryPoint => `manifest.${entryPoint.name}`,
        //     },
        //     minimizer: [
        //         new TerserPlugin({
        //             terserOptions: {
        //                 output: {
        //                     comments: false,
        //                 },
        //                 ie8: false,
        //             }
        //         })
        //     ]
        // }
    },
    devServer: {
        hot: true,
        contentBase: path.join(__dirname, "./dist"),
        port: 8080
    }
};