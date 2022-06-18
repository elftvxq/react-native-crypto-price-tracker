# Problems and notes

The project is only for recruiment/personal use.

## 1. How to execute package？

Please take **Quick Start** on [README.md](../README.md#-quick-start) as reference to start the project.

## 2.The structure of the application

Please read the [structure.md](structure.md). It contains the overall architecture and logic of this project.

## 3. The understanding on the libraries which are used in the project, as well as the features and brief

- [Expo][expo]: Expo apps are React Native apps that include the Expo SDK. The SDK is a native-and-JS library that provides access to a device's system features (such as camera, contacts, local storage, and other hardware). This means you don't need to use Xcode or Android Studio, nor do you need to write any native code, and it also makes your pure-JS project very portable as it can run in any native environment that includes the Expo SDK.

Expo also provides UI components to handle various use cases that are covered by almost all apps but are not in React Native core, e.g. icons, blurred views, etc.

-[React Native][reactnative]: React Native is a javascript-based framework for building native mobile applications for the Android and iOS platforms. It is based on Facebook's JavaScript library React, which builds user interfaces for mobile platforms. Web developers can use React Native JavaScript to write Android and iOS apps that behave and look like native apps. Code written in React Native can also be shared across platforms, allowing efficient development for both iOS and Android at the same time.

React Native applications are built by combining JavaScript and xml type markup (ie JSX). The React Native bridge is responsible for performing native rendering of APIs in Java (for Android) and Swift (for iOS). Apps are rendered using mobile UI components instead of web views, and work similarly to other mobile apps. React Native can display a JavaScript interface to the platform's APIs. As a result, React Native apps can access mobile platform features such as user location and phone cameras.

- [Babel][babel]: Babel is a transcoder that converts ES6 code can be read on this browser. This project is initialized with Expo, so `@babel-preset-expo` has been automatically introduced in the configuration file of `babel.config.js` built in the root directory.
  This preset extends the default React Native preset and adds support for decorators, tree-shaking web packages, and loading font icons with optional native dependencies if they're installed.

preset-env will determine the corresponding packages that need to be loaded according to the developer's configuration. In addition, in order to use the chart library, the plugin of `react-native-reanimated/plugin` is imported to compile the charts and related animations.

- [React][react]: React is one of the most commonly used front-end frameworks. It uses JSX syntax to write XML-similar languages ​​in components. The reason for using React is that it conforms to the MVC model, so that data control and screen processing can be separated.
- [Hooks][hooks]: React Component has two types: `class component` and `functional component`. When `Hooks` has not yet appeared, if you need to manage `state` or call specific functions in different stages of the life cycle, you must use certain React API in `class component`. `Hooks` appears in `functional component`. It becomes possible to use Hook API to manage lifecycle logic or share state. The design of `Hooks` is to reduce the function that `class component` needs to write quite large code to achieve. `functional component` makes it easier to accomplish the desired function instead of using class component.

I rarely use `Context API` on my previous experience, so I also import this API as data management tool on the project. -[Async Storage][async storage]: A simple, asynchronous, persistent Key-Value storage system that is global to the app. Can be used in place of LocalStorage.

The location of AsyncStorage storage varies by system.
Storage in iOS is similar to NSUserDefault, which is stored on the device through a `plist` file. On Android it will be stored in `RocksDB` or `SQLite`, depending on which you use.

- [react-native-animated-charts][react-native-animated-charts]: This chart library provides very useful Components and it friendly rendered the animated charts with smoothly transition based on a given input. I haven't explored its' all features and just applied small parts of its props to display the price change chart. I'm interestedi how to apply others feature to build other practical features. Can spend more time doing researching on it.

[expo]: https://docs.expo.dev/
[reactnative]: https://reactnative.dev/
[babel]: https://babeljs.io/
[react]: https://facebook.github.io/react/
[hooks]: https://zh-hant.reactjs.org/docs/hooks-intro.html
[async storage]: https://react-native-async-storage.github.io/async-storage/
[react-native-animated-charts]: https://github.com/rainbow-me/react-native-animated-charts

## 4. The rules of commenting in the code. When will I would like to leave comment?

1. When a function is more complex such as it return value by more conditions
2. Remind myself what this function is used for
3. Easier maintainence for other people
4. ~~Try to have a good naming, easily to understand by its' name, so it will recude the necessity to write the comment~~

## 5. The difficulties and problems I encountered on this project. And how do I solve it?

### Question 1：How to write a development documentation？

I have written a README before to introduce my project. This time I want to record the project structure and process more completely, so it took a lot of effort to study how to write the structure and description files. Referring to some good projects, I found that the documents and REEADME are written in detail and completely. I tried to imitate the development structure of the documents and the whole program to explain clearly through text. Use the built-in format of the markdown file to list the structure and key points of the entire project, hoping to help readers quickly understand the content of the project.

In the process of writing, I read a lot of docs and files, and I also got unexpected results. For example, how to organize the project development structure at the beginning will be clear and concise, etc. I also reorganize my own concepts and principles behind the operation of new technologies through these docs.

### Question 2：Unable to run iOS simulator

After installing the `expo cli`, the installation and initialization of the project is also very smooth, but when I want to execute the iOS simulator, the error message that cannot be executed always pops up. Following the error message given by the terminal, after installing `Xocde` and updating the version, there is still no way to start it smoothly.
Later, I figured out the problem by the docs, it turned out that the command line Tools was not updated, [reading the file](https://docs.expo.dev/workflow/ios-simulator/#step-3-try-it-out) is really important.

### Question 3： FlatList render items need unique props key issue

The `FlatList` component is loaded on the home page, and the data of each currency is rendered by child component `CoinItem`, and the warning `Visuallist need the unique key as props` or the problem of duplicated key appears. At first I thought that there is no need to pass a key as props for each individual element like a React component that renders multiple data components. Watching the React Native tutorial video on the Internet, it mentioned that React Native will automatically pass the `id` or `index` as key on a component, but I still get this error.

Later, I found that we can use this props `keyExtractor` to pass with the id or name as the key on the `FlatList` component, which can avoid the problem of bad rendering performance when the component does not have an independent key value.
