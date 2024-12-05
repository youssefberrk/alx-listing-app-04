import type { NextConfig } from "next";
import SearchIcon from '@/public/assets/svg/icon-search.svg';

const nextConfig: NextConfig = {
  /* config options here */
};
module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};
const SearchButton = () => (
  <button>
    <SearchIcon className="h-6 w-6 text-gray-600" />
  </button>
);
export default nextConfig;
