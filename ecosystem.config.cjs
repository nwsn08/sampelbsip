module.exports = {
    apps: [
        {
            name: 'App name',
            port: process.env.PORT || '3000',
            script: './.output/server/index.mjs',
        },
    ],
};