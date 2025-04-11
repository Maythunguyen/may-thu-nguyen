/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "assets.aceternity.com",
            "upload.wikimedia.org",
            "michaelwashburnjr.com",
            "images.ctfassets.net",
            "encrypted-tbn0.gstatic.com",
            "mma.prnewswire.com",
            "yt3.googleusercontent.com",
            "pbs.twimg.com",
            "static-00.iconduck.com",
            
        ],
        unoptimized: true,
    },
    output: 'export',
};

export default nextConfig;
