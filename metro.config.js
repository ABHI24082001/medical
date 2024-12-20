// Import necessary functions
const { wrapWithReanimatedMetroConfig } = require('react-native-reanimated/metro-config');
const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

// Define your custom configuration (if any)
const customConfig = {
  // Your custom Metro configuration options (if any)
};

// Get the default Metro configuration
const defaultConfig = getDefaultConfig(__dirname);

// Merge the default configuration with your custom config
const mergedConfig = mergeConfig(defaultConfig, customConfig);

// Wrap the merged configuration with Reanimated Metro config
module.exports = wrapWithReanimatedMetroConfig(mergedConfig);
