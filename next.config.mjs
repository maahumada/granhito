const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'contadoresenred.com',
        port: '',
        pathname: '',
      },
    ],
  },
};

export default nextConfig;
