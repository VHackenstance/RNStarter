module.exports = {
    presets: [
        "@babel/preset-env",
        "@babel/preset-flow",
        "@babel/preset-react",
        "@babel/preset-typescript",
        ["babel-preset-expo", {
            reanimated: true,
            'react-compiler': true,
        },]
    ],
    plugins: [
        ['@babel/plugin-transform-class-properties', { loose: true }],
        ['@babel/plugin-transform-private-methods', { loose: true }],
        ['@babel/plugin-transform-private-property-in-object', { loose: true }],
        [
            'module-resolver',
            {
                root: ['.'],
                extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
                alias: {
                    '@components': './src/components',
                    '@navigation': './src/navigation',
                    '@screens': './src/screens',
                    '@utils': './src/utils',
                    '@views': './src/screens/views',
                    '@styles': './styles',
                },
            },
        ],
        'react-native-reanimated/plugin', // Must be last
    ],
};