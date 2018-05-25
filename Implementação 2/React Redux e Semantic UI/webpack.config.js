const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const { TsConfigPathsPlugin } = require('awesome-typescript-loader')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const buildMode = process.env.BUILD_MODE || 'dev'
const HtmlWebpackPlugin = require('html-webpack-plugin')

let outputName = "bundle.js"
const plugins = [
    new ExtractTextPlugin('styles.css'),
    new TsConfigPathsPlugin()
]
if(buildMode == "prod") {
    outputName = "index_bundle.js"
    plugins.push(new UglifyJsPlugin({
        sourceMap: true,
        uglifyOptions: {
            ecma: 8,
            compress: {
                warnings: false
            }
        }
    }))
    plugins.push(new HtmlWebpackPlugin())
}

module.exports = {
    entry: "./src/index.tsx",
        
    output: {
        filename: outputName,
        path: __dirname + "/dist",
    },

    // Enable sourcemaps for debugging webpack's output.

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"],
        alias: {
            modules: __dirname + '/node_modules',
            components: __dirname + '/src/components',
            src: __dirname + '/src'
        }        
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },

            {
                test: /\.(scss|sass|css)$/i,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        { loader: 'css-loader'/*, options: { minimize: env.NODE_ENV === 'production' } */},
                        { loader: 'postcss-loader', options: {
                            plugins: (loader) => [
                              require('postcss-smart-import'),
                              require('autoprefixer'),
                            ]
                          }
                         },
                        'resolve-url-loader',
                        { loader: 'sass-loader', options: { sourceMap: true } }
                    ]
                })
            },
        
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: "url-loader?name=public/images/[name].[ext]"
            },
              // "file" loader makes sure assets end up in the `build` folder.
              // When you `import` an asset, you get its filename.
            {
                    test: [/\.eot$/, /\.ttf$/, /\.svg$/, /\.woff$/, /\.woff2$/],
                    use: [{
                        loader: 'file-loader'
                }],
            },
            {
                test: /\.(c|d|t)sv$/, // load all .csv, .dsv, .tsv files with dsv-loader
                use: ['dsv-loader'] // or dsv-loader?delimiter=,
            }
        ]
    },
    plugins: plugins,

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.

    devServer: {
        port: 8080,
        contentBase: './public',
        historyApiFallback: true,
        host: '0.0.0.0'
    }
};