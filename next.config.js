/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "s2fb.lezenda.com",
                port: "",
                pathname: "/storage/**",
            },
        ],
    },
};

module.exports = nextConfig;
