/** @type {import('next').NextConfig} */
const nextConfig = {
    // remotePatterns: [
    //     {
    //         protocol: 'https',
    //         hostname: 'image.tmdb.org',
    //         pathname: '**',
    //     },
    // ],
    images: {
        domains: ['image.tmdb.org'],
    }
};
//module.exports = nextConfig;
export default nextConfig;
