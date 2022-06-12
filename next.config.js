const basePath = process.env.NODE_ENV === 'ssg' ? '' : ''

module.exports = {
    reactStrictMode: false,
    assetPrefix: basePath,
    publicRuntimeConfig: {
        basePath: basePath
    },
    trailingSlash: true,
}
