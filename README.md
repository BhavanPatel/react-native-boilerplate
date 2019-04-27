
# React Native Boiler Plate

> Thanks for looking this! Right now project is in Development mode.
> Stable version will be release soon as possible.





## Setup
Follow the steps to setup boilerplate for your project
```
git clone https://github.com/BhavanPatel/react-native-boilerplate.git
```
Now, go to project folder then
```
npm i
```
Do not run `react-native link`  boilerplate is already linked for you.


## Rename
This boiler contains different project name, So if you want to rename this project name to you project name you  need to follow some steps.
```
npm install react-native-rename -g
```
Now, go to project root folder
```
react-native-rename <newName>
```
if you want to change bundle id also then you can do by,
but it works for android only , for iOS you need to change bundle id from xcode
```
react-native-rename <newName> -b <bundleIdentifier>
```

## Run

For run in **Android**

in new tab of terminal
```
npm run start
```

For run in **iOS**

in new tab of terminal
```
npm run ios
```

for specific device
```
npm run iphone6
```
for specific device , you can customise command and simulator in project's **package.json** file


## Commands
There are some predefined command for boost up your speed.
>clean cache and run bundle again
```
npm run start
```
>clean global cache and build cache
```
npm run clean
```
>check `eslint` in project **/source** folder. It is good to use lint before every push
```
npm run lint
```

## Project Dependencies
There are already installed some dependencies to boost up your time and speed.

- [Apisauce](https://github.com/infinitered/apisauce) : axios + standardized errors + request/response transforms.
	- **Features**
		-   low-fat wrapper for the amazing  `axios`  http client library
		-   all responses follow the same flow: success and failure alike
		-   responses have a  `problem`  property to help guide exception flow
		-   attach functions that get called each request
		-   attach functions that change all request or response data
		-   detects connection issues (on React Native)
	
- [Lodash](https://lodash.com/) : A modern JavaScript utility library delivering modularity, performance, & extras.
	- **Features**
		- Lodash makes JavaScript easier by taking the hassle out of working with arrays,  
numbers, objects, strings, etc. Lodash’s modular methods are great for :
			-  Iterating arrays, objects, & strings
			-  Manipulating & testing values
			-  Creating composite functions

- [Moment](https://momentjs.com/):  Parse, validate, manipulate, and display dates and times in JavaScript.
	- **Features**
		- A lightweight JavaScript date library for parsing, validating, manipulating, and formatting dates.

- [Redux](https://redux.js.org/):  A predictable state container for JavaScript apps.
	- **Features**
		- One of the most recommended state management library for react-native
		- It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test.
		- Along with redux added [Redux-Logger](https://github.com/LogRocket/redux-logger)  and [Redux-thunk](https://github.com/reduxjs/redux-thunk)

- [react-native-device-info](https://github.com/react-native-community/react-native-device-info) : Device Information for React Native
- [react-native-fast-image](https://github.com/DylanVann/react-native-fast-image): FastImage, performant React Native image component.
- [react-native-keyboard-aware-scroll-view](https://github.com/APSL/react-native-keyboard-aware-scroll-view): A ScrollView component that handles keyboard appearance and automatically scrolls to focused TextInput.
- [react-native-local-mongodb](https://github.com/antoniopresto/react-native-local-mongodb): react-native local mongodb storage.

- [react native localization](https://github.com/stefalda/ReactNativeLocalization): Class to localize the ReactNative interface

- [react-native-router-flux](https://github.com/aksonov/react-native-router-flux): The first declarative React Native router

- [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons): Customizable Icons for React Native with support for NavBar/TabBar/ToolbarAndroid, image source and full styling


## Project Structure

```
.
├── index.js
├── package.json
└── source
├── app
├── components
│ ├── common
│ │ ├── Card
│ │ ├── CardHeader
│ │ ├── Container
│ └── controls
│ ├── theme
│ └── utils
├── lib
│ ├── apis
│ ├── common
│ ├── connection
│ ├── local
│ └── log
├── localization
│ └── strings
├── navigation
│ ├── config
│ │ ├── Interpolator
│ │ └── transitionConfig.js
│ ├── index.js
│ ├── routes.js
│ └── services.js
├── redux
│ ├── actions
│ ├── constants
│ ├── reducers
│ └── store
│ └── index.js
├── res
│ ├── animation
│ ├── fonts
│ ├── images
│ └── sounds
├── screens
│ ├── detail
│ │ ├── index.js
│ │ └── styles.js
│ ├── home
│ │ ├── index.js
│ │ └── styles.js
└── theme
```
