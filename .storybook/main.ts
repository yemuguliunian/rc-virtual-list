const path = require('path');

module.exports = {
    stories: ['../src/**/*.stories.*'],
    addons: [
        '@storybook/addon-docs',
        '@storybook/addon-storysource',
        '@storybook/addon-actions',
        '@storybook/addon-knobs',
        '@storybook/addon-viewport',
        '@storybook/addon-backgrounds',
    ],
    webpack: async (config) => {
        config.module.rules.push({
            test: /\.less$/,
            use: [
                'style-loader',
                'css-loader',
                { loader: 'less-loader', options: { javascriptEnabled: true } },
            ],
            include: path.resolve(__dirname, '../'),
        });
        return config;
    },
    webpackFinal: async (config) => {
        config.module.rules.push({
            test: /\.(ts|tsx)$/,
            use: [
                {
                    loader: require.resolve('ts-loader'),
                },
                // Optional
                {
                    loader: require.resolve('react-docgen-typescript-loader'),
                },
            ],
        });
        config.resolve.extensions.push('.ts', '.tsx');
        return config;
    },
};
