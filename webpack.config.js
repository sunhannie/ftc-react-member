var webpack = require('webpack');
var path = require('path');

var ExtractTextPlugin = require("extract-text-webpack-plugin");  

const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
    mode: "development", 
    devtool: 'cheap-module-eval-source-map',
    entry:
    {
        'index':['./client/index.js'],
        'signup':['./client/scripts/signup.js'],
        'member':['./client/scripts/member.js']
    },
    output: {
        path: path.join(__dirname, 'tmp/'),  //这儿好像没起作用
        filename: '[name].js', //输出文件名，[name].js默认是main.js。如果指定则是指定名
        publicPath: '/tmp/', //这个一定得注意，之前我写tmp/，导致一直找不到js文件路劲
        chunkFilename: "[chunkhash].js"   //这个好像没起作用，应该研究用处和区别
    },
    module: {
        rules:[
             {

                test: /\.js|\.jsx$/,
                // include: [
                //     path.join(__dirname, 'client'),
                //     path.join(__dirname, 'client',"scripts"),
                //     path.join(__dirname, "client","component","login"),
                //     path.join(__dirname, "client","component","nav"),
                // ],
                exclude: [
                    path.resolve(__dirname, "node_modules")
                ],
                loader: "babel-loader",
                options: {
                    presets: ['react','es2015']
                },
             },
             {
                test: /\.css$/,
                exclude: [
                    path.resolve(__dirname, "node_modules")
                ],
                loader: 'style-loader!css-loader?modules&importLoaders&localIdentName=[name]__[local]__[hash:base64:5]!sass-loader?sourceMap=true&sourceMapContents=true',
                // use: [{  
                //         loader: 'style-loader' 
                //     }]
             },
             {
                test: /\.json?$/,
                loader: 'json'
             },
            //  {
            //     test: /\.scss$/,
            //     exclude: [
            //         path.resolve(__dirname, "node_modules")
            //     ],
            //     loader: 'style-loader!css-loader!sass-loader?sourceMap=true&sourceMapContents=true'  
            //  },
             {
                test: /\.html$/,
                use: [
                    "htmllint-loader",
                    {
                        loader: "html-loader",
                        options: {
                        }
                    }
                ]
            },
            {
                test:  /\.scss$/,
                use: [
                    {  
                        loader: 'style-loader'   // 将 JS 字符串生成为 style 节点
                    },
                    {
                        loader: 'css-loader',  // 将 CSS 转化成 CommonJS 模块
                        options: {
                            modules: true,
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',  // 将 Sass 编译成 CSS
                        options: { 
                            sourceMap:true  ,
                            sourceMapContents:true
                        }
                    }
                ]
            }
        ]  //end rules    
    },
     resolve: {
        alias: {
            'react': path.join(__dirname,'node_modules','react')
        },
        extensions: [".js", ".json", ".jsx", ".css", ".scss"],
    },
     performance: {
        hints:  false, // enum
        maxAssetSize: 200000, // int (in bytes),
        maxEntrypointSize: 400000, // int (in bytes)
    },

    plugins: [
    //    extractSass
    ],
    watch: true //这意味着在初始构建之后，webpack将继续监视任何已解析文件的更改。手表模式默认关闭
    
};

// 'style-loader!css-loader!sass-loader?sourceMap=true&sourceMapContents=true'  