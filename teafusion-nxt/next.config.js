/** @type {import('next').NextConfig} */

const nextConfig = {
    async rewrites() {
        return [
        {
            source: '/',
            destination: '/html/index.html', 
        },
        {
            source:'/teas',
            destination: '/html/teas.html',
        },
        {
            source:'/teaware',
            destination: '/html/teaware.html',
        },
        {
            source:'/teas-product',
            destination: '/html/teas-product.html',
        },
        {
            source:'/about',
            destination: '/html/about.html',
        },
        {
            source:'/profile',
            destination: '/html/profile.html',
        },
        ];
    },
}

module.exports = nextConfig
