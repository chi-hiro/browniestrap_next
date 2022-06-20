var basePath = process.env.NODE_ENV === 'production' ? '' : ''

module.exports = {
    reactStrictMode: false,
    assetPrefix: basePath,
    publicRuntimeConfig: {
        basePath: basePath
    },
    trailingSlash: true,
    exportPathMap: async function (
        defaultPathMap,
        { dev, dir, outDir, distDir, buildId }
    ) {
        return {
            '/': { page: '/' },
            '/dummy': { page: '/dummy' }
        }
    }
}
