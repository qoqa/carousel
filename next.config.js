const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  basePath: isProd ? '/carousel' : undefined,
  env: {
    PUBLIC_URL: '/carousel/',
  },
  experimental: {
    craCompat: true,
  },
  // Remove this to leverage Next.js' static image handling
  // read more here: https://nextjs.org/docs/api-reference/next/image
  images: {
    disableStaticImages: true,
  },
};
