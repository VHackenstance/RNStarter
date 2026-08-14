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