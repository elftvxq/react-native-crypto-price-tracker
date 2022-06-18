# Project Structure

## Table of Contents

- [Project Structure](#project-structure)
  - [Table of Contents](#table-of-contents)
  - [Directories Arrangement](#directories-arrangement)
  - [Components](#components)
  - [UI Component](#ui-component)

## Directories Arrangement

```bash


├── docs/                       # Documents (will update as possible as I can)
│   ├── structure.md
│   └── problem-and-note.md
├── src/
│  ├── components/              # Reusable components
│  │   ├── CoinItem             # Components of each book contains information
│  ├── Contexts/ 	            # Data management by useContext api
│  ├── navigation				# Navigator route set up and home bottom tab navigation component
│  │   ├── BottomTabNavigation
│  ├── screens                  # Main screens. UI layout, handle fetched data, logic handle, and display content
│  │   ├── CoinDetailedScreen
│  │   ├── HomeScreen
│  │   ├── WatchlistScreen
│  ├── services 				# Use axios to deal with api calling
├── App.js                      # Root component of this app. Import navigation and context provider
├── babel.config.js             # babel confid and plugin setting
├── package.json
├── package-lock.json
└── README.md
```

## Components

The component style I used in this project is [functional component][functionalcomponent]. Functional component in fact is a function of UI from the props. The functions make UI change from input props and inner state. In functional component, we can use useEffect and useState to easily manage state and lifecycle.

The components files are arranged as below:

- All components are under `src/compoents` folder
- Capitalize the first letter of components

[functionalcomponent]: (https://code.tutsplus.com/tutorials/stateful-vs-stateless-functional-components-in-react--cms-29541)

## UI Component

This project goes with [React Native][react-native] and [Expo][expo]. React native provides and expo provie built-in UI component that Ant User-Experience Design Team builds.

The season I use Expo because of it's rich community resources and support the component which React Native doesn't include.
Besides, it provides various of components that you need and it is very configurable from documentation.

The project also uses [react-native-animated-charts][react-native-animated-charts] to display the currency change chart graph. It is animated based on the given data.

\*\* Design consistency
In this project, I take some online resource and follow its design to adjust page layout and color to make UI design consistent.

[react-native]: https://reactnative.dev/docs/components-and-apis
[expo]: https://docs.expo.dev/guides/userinterface/
[react-native-animated-charts]: https://github.com/rainbow-me/react-native-animated-charts
[less-loader]: https://github.com/webpack-contrib/less-loader
[webpack]: https://webpack.js.org
