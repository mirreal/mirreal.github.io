import nextra from 'nextra';

const withNextra = nextra({
  latex: true,
  theme: 'nextra-theme-blog',
  themeConfig: './theme.config.js',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  output: 'export',
};

export default withNextra(nextConfig);
