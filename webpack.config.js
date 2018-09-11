var webpack = require('webpack');
var path = require('path');

var ExtractTextPlugin = require("extract-text-webpack-plugin"); 
const extractCSS = new ExtractTextPlugin('one.css'); 


module.exports = {
    mode: "development", 
    devtool: 'cheap-module-eval-source-map',
    entry:
    {
        'index':['./client/index.js'],
        'signup':['./client/scripts/signup.js'],
        'member':['./client/scripts/member.js'],
        'vendor': ['react', 'react-dom', 'react-router']
    },
    output: {
        path: path.join(__dirname, 'tmp/'),  
        filename: '[name].js', 
        publicPath: '/tmp/', 
        chunkFilename: "[chunkhash].js"   
    },
    module: {
        rules:[
             {
                test: /\.js|\.jsx$/,
     
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
             },
             {
                test: /\.json?$/,
                loader: 'json'
             },
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
                exclude: [
                    path.resolve(__dirname, "node_modules")
                ],
                use: [
                    {  
                        loader: 'style-loader'   // 将 JS 字符串生成为 style 节点
                    },
                    {
                        loader: 'css-loader',  // 将 CSS 转化成 CommonJS 模块
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
       extractCSS
    ],
    watch: true 
    
};
