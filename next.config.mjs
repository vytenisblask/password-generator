/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        includePaths: ['./src/styles'],
        prependData: `@import "variables.scss"; @import "mixins.scss";`,
    },
};

export default nextConfig;