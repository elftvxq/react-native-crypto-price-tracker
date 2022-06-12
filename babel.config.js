module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    // this plugin has to be the last one
    plugins: ['react-native-reanimated/plugin'],
  };
};
