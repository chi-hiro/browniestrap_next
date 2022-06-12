var basePath = process.env.NODE_ENV === 'production' ? '' : ''

module.exports = {
    reactStrictMode: false,
    assetPrefix: basePath,
    publicRuntimeConfig: {
        basePath: basePath
    },
    trailingSlash: true,
}
