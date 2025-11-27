import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Ensure the rewrites function is defined correctly within the configuration object
  async rewrites() {
    return [
      {
        // This is the local path used in your page.tsx: const HF_SPACE_URL = "/api/gradio-proxy/"; 
        source: '/api/gradio-proxy/:path*',
        
        // CRITICAL: This is the correct destination URL for your Hugging Face Space.
        // It points to: https://karenmaza-neuroscan-backend.hf.space/
        destination: 'https://karenmaza-neuroscan-backend.hf.space/:path*',
      },
    ];
  },
};

export default nextConfig;