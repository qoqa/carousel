module.exports = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
  experimental: {
    craCompat: true,
  },
  // Remove this to leverage Next.js' static image handling
  // read more here: https://nextjs.org/docs/api-reference/next/image
  images: {
    disableStaticImages: true,
    path: process.env.NEXT_PUBLIC_BASE_PATH,
  },
};
