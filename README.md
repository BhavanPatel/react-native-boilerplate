# React Native Boiler Plate

Thanks for looking this!
Right now project is in Development mode.
Stable version will be release soon as possible.





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