const path = require('path');

const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');
const postcssURL = require('postcss-url');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ImageMinPlugin = require('imagemin-webpack-plugin').default;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');

const here = (dir) => (
    dir ? path.resolve(__dirname, dir) : __dirname
);

const dirs = {
    src: './src',
    dist: './dist',
};

module.exports = (env, { mode = 'development' }) => {
    const isProduction = mode === 'production';

    return {
        mode,
        context: here(),
        entry: {
            app: `${dirs.src}/js/App.jsx`,
        },
        output: {
            path: here(dirs.dist),
            filename: 'js/[name].bundle.js',
            chunkFilename: 'js/[name].chunk.js',
            sourceMapFilename: '[file].map',
            publicPath: '/static/',
        },
        resolve: {
            extensions: ['.js', '.jsx', '.scss', '.css', '.json'],
            modules: [
                here('./node_modules'),
            ],
        },
        devtool: isProduction ? 'source-map' : 'inline-cheap-module-source-map',
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    include: here(dirs.src),
                    sideEffects: false,
                    use: [
                        {
                            loader: 'cache-loader',
                            options: {
                                cacheDirectory: here(`./node_modules/.cache/${mode}/js`),
                            },
                        },
                        {
                            loader: 'babel-loader',
                            options: {
                                comments: true,
                                plugins: [
                                    '@babel/plugin-syntax-dynamic-import',
                                    '@babel/plugin-syntax-object-rest-spread',
                                    ['@babel/plugin-proposal-decorators', { legacy: true }],
                                    '@babel/plugin-proposal-object-rest-spread',
                                    '@babel/plugin-proposal-class-properties',
                                ],
                                presets: [
                                    ['@babel/preset-react'],
                                    [
                                        '@babel/preset-env',
                                        {
                                            loose: true,
                                        },
                                    ],
                                ],
                            },
                        },
                    ],
                },
                {
                    test: /\.scss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'cache-loader',
                            options: {
                                cacheDirectory: here(`./node_modules/.cache/${mode}/scss`),
                            },
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: true,
                                minimize: isProduction,
                                sourceMap: !isProduction,
                                url: false,
                            },
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                ident: 'postcss',
                                sourceMap: !isProduction,
                                plugins: [
                                    postcssURL(),
                                    autoprefixer(),
                                ].concat(isProduction ? [
                                    cssnano({
                                        postcssZindex: {
                                            disable: true,
                                        },
                                    }),
                                ] : []),
                            },
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: !isProduction,
                            },
                        },
                    ],
                },
                {
                    test: /\.css$/,
                    use: [
                        {
                            loader: 'cache-loader',
                            options: {
                                cacheDirectory: here(`./node_modules/.cache/${mode}/css`),
                            },
                        },
                        {
                            loader: 'style-loader',
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: true,
                                minimize: isProduction,
                                sourceMap: !isProduction,
                            },
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                ident: 'postcss',
                                sourceMap: !isProduction,
                                plugins: [
                                    postcssURL(),
                                    autoprefixer(),
                                ].concat(isProduction ? [
                                    cssnano({
                                        postcssZindex: {
                                            disable: true,
                                        },
                                    }),
                                ] : []),
                            },
                        },
                    ],
                },
            ],
        },
        plugins: [
            new CleanWebpackPlugin([
                `${dirs.dist}`,
            ]),
            // NOTE: CopyWebpackPlugin has a bug with wildcard file selection.
            new CopyWebpackPlugin([
                {
                    from: `${dirs.src}/static/img`,
                    to: './img',
                },
            ], {
                ignore: [
                    '.keep',
                    '.DS_Store',
                ],
            }),
            new HtmlWebpackPlugin({
                template: `${dirs.src}/static/index.html`,
                cache: true,
            }),
            new MiniCssExtractPlugin({
                // Options similar to the same options in webpackOptions.output
                filename: 'css/[name].min.css',
                chunkFilename: 'css/[name].chunk.css',
                sourceMapFilename: 'css/[file].map',
            }),
            new ImageMinPlugin({
                test: /\.(jpe?g|png|gif|svg)$/i,
                cacheFolder: here(`./node_modules/.cache/${mode}/image-min`),
                disable: !isProduction,
            }),
            new WriteFilePlugin(),
        ],
        optimization: {
            splitChunks: {
                automaticNameDelimiter: '/',
                name: (module, chunk) => chunk[0].name,
            },
            minimizer: [
                new UglifyJsPlugin({
                    cache: here(`./node_modules/.cache/${mode}/uglify-js`),
                    parallel: true,
                    sourceMap: true,
                    uglifyOptions: {
                        ecma: 8,
                        compress: {
                            global_defs: {},
                        },
                        mangle: {},
                        output: {
                            comments: /licen[sc]e/i,
                        },
                    },
                }),
            ],
        },
        performance: {
            hints: isProduction && 'warning',
            maxEntrypointSize: Infinity,
            maxAssetSize: 10 ** 6, // 1mb
        },
        stats: {
            assetsSort: 'chunkNames',
            children: false,
            modules: false,
            entrypoints: false,
            excludeAssets: /\.(jpe?g|png|gif|svg|ico|cur|eot|ttf|woff|woff2)$/i, // hiding images, fonts
        },
        devServer: {
            port: 1717,
            compress: true,
            contentBase: here(dirs.dist),
            // https: {
            //     key: fs.readFileSync(here('../etc/certificates/server.key')),
            //     cert: fs.readFileSync(here('../etc/certificates/server.crt')),
            //     ca: fs.readFileSync(here('../etc/certificates/server.pem')),
            // },
            overlay: {
                warnings: true,
                errors: true,
            },
            stats: {
                assetsSort: 'chunkNames',
                children: false,
                modules: false,
                entrypoints: false,
                excludeAssets: /\.(jpe?g|png|gif|svg|ico|cur|eot|ttf|woff|woff2)$/i, // hiding images, fonts
            },
        },
    };
};
