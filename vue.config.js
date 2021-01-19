const path = require('path')
module.exports = {
    publicPath: '/music_cloud/',
    devServer: {
        proxy: {
            '/cloud': {
                target: 'http://musicapi.leanapp.cn',
                changeOrigin: true,
                pathRewrite: {
                    '^/cloud': ''
                }
            },
            '/song': {
                target: 'https://api.imjad.cn/cloudmusic/',
                changeOrigin: true,
                pathRewrite: {
                    '^/song': ''
                }
            },
        }
    },
    // build: {
    //     index: path.resolve(__dirname, '../music_cloud/index.html'),
    //     assetsRoot: path.resolve(__dirname, '../music')
    // }
}