/**
 * @type { import("next").NextConfig}
 */

var basePath = process.env.NODE_ENV === 'production' ? '' : ''

module.exports = {
    reactStrictMode: false,
    assetPrefix: basePath,
    publicRuntimeConfig: {
        basePath: basePath,
    },
    trailingSlash: true,
    compiler: {
        styledComponents: true,
    },
    experimental: {
        scrollRestoration: true,
    },
}
