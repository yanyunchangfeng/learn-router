const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    context:path.join(process.cwd(),'src'),
    entry:'./index.ts',
    mode:'development',
    output:{
        path:path.join(process.cwd(),'dist'),
        filename:'[name].bundle.js'
    },
    resolve:{
        extensions:['*','.js','.ts']
    },
    module:{
        rules:[
            {
                test: /\.html$/,
                use: [
                  {
                    loader: "html-loader",
                    options: { minimize: true }
                  }
                ]
            },
            {
                test:/\.ts$/,
                loader:'ts-loader',
                exclude:/node_module/
            }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            template: path.join(process.cwd(),'src/index.html'),
            favicon:path.join(process.cwd(),'src/img/yanyunchangfeng.png')
        })
    ]
}