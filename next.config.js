/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.externals.push({
            "utf-8-validate" :  "commonjs utf-8-valudate",
            bufferutill: "commonjs bufferutill"
        });

        return config;
    },
    images: {
        domains: [
            "utfs.io"
        ]
    }
}

module.exports = nextConfig
