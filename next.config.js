const withOptimizedImages = require('next-optimized-images');
const path = require('path');

const config = {
  webpack(config) {
    config.resolve.alias['@'] = path.join(__dirname, 'src');
    return config;
  },
};

module.exports = withOptimizedImages(config);
