/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
      config.module.rules.push({
        test: /\.svg$/,
        use: [{ loader: "@svgr/webpack", options: { icon: true } }],
      });
      return config;
    },
  
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "fastly.picsum.photos",
          port: "",
          pathname: "/**",
        },
        {
          protocol: "https",
          hostname: "s3-alpha-sig.figma.com",
          port: "",
          pathname: "/**",
        },
      ],
    },
  };
  
  export default nextConfig;
  