import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
 

  images: {
    remotePatterns: [
       
      {
        protocol: 'https',
        hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
   
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
   
      },
      {
        protocol: 'http',
        hostname: 'res.cloudinary.com',
   
      },
      {
        protocol: 'https',
        hostname: 'avatar.iran.liara.run',
      }
    ]
  },
};

export default nextConfig;
