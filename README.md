# Crypto Price Tracking Project

This project is bootstrapped with [Expo](https://docs.expo.dev/) and [React Native](https://reactnative.dev/)

## :mount_fuji: Requirement

Used npm 8+ and Node 16+

## :green_book: Quick Start

How to run this website locally

1. Uncompress the file (or git clone this repository)
2. In the project root file, run `npm install` to install all dependencies
3. Make sure to install Expo `npm install --global expo-cli`. (If it's installed, can skip this step)
4. Run `expo start` to open [http://localhost:19002/](http://localhost:19002/) and view it in the browser
5. Click **Run on iOS simulator** or **Run on Android** (Please check the doc to install and set up the environment. [iOS Simulatore](https://docs.expo.dev/workflow/ios-simulator/#step-1-install-xcode) / [Android Studio Emulator](https://docs.expo.dev/workflow/android-studio-emulator/))

The commands you will need:

```
git clone https://github.com/elftvxq/react-native-crypto-price-tracker.git
cd react-native-crypto-price-tracker
npm install
expo start
```

## :iphone: Demo

### Home Screen

Can view the first 25 records of currency details including market rank, current price, and total volume.

Scroll down to the bottom to get the next 25 records of currencies

![Home Screen](https://i.imgur.com/KbbeWZc.jpg?3)

Can sort by currency name alphabetically, current price and current total volume

![Sort Feature](https://i.imgur.com/0vq7t9R.jpg?1)

### Currency Detailed Screen

Can view the currency price details such as price change percentage in 24h, price change chart.

Press the curve line on the chart can get the according to price

![Currency Detailed Page](https://i.imgur.com/a4Be00b.jpg?1)

Cryptocurrency and TWD price calculation convertor

![Currency Convertor](https://i.imgur.com/8qCwBGV.jpg?1)

### Watch List Screen

Users are able to add or remove the currency to the watch list by clicking the star on the left upper corner.

Check the watch list by the navigation tab

![Watch List](https://i.imgur.com/XnXlFCM.jpg?1)

## :bulb: Project Information

- **Framework**: Expo, React 17 and React Native
- **Language**: ES6 & compiled by Babel 7+
- **Animation/Chart Framework**: React Native Animated Charts
- **API resource**: [Coingecko](https://www.coingecko.com/en/api)

## :jack_o_lantern: Documentation

**Project Structure**

See [the app structure](docs/structure.md) in `docs/` folder.

**Problems and notes**

See some [issue and notes](docs/problems-and-notes.md) in `docs/` folder.
