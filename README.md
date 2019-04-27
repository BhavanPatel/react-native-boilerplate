
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
for specific device , you can customize command and simulator in project's **package.json** file


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

- [apisauce]([https://github.com/infinitered/apisauce](https://github.com/infinitered/apisauce)) : axios + standardized errors + request/response transforms.
	- **Features**
		-   low-fat wrapper for the amazing  `axios`  http client library
		-   all responses follow the same flow: success and failure alike
		-   responses have a  `problem`  property to help guide exception flow
		-   attach functions that get called each request
		-   attach functions that change all request or response data
		-   detects connection issues (on React Native)
	
- [lodash]([https://lodash.com/](https://lodash.com/)) : A modern JavaScript utility library delivering modularity, performance, & extras.
	- **Features**
		- Lodash makes JavaScript easier by taking the hassle out of working with arrays,  
numbers, objects, strings, etc. Lodash’s modular methods are great for :
			-  Iterating arrays, objects, & strings
			-  Manipulating & testing values
			-  Creating composite functions


