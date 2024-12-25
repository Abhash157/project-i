// index.tsx
import React from 'react';
import { AppRegistry } from 'react-native';
import App from '../../App'; // Import the App component+
import { name as appName } from '../../app.json'; // Import the app name from the JSON file

AppRegistry.registerComponent(appName, () => App); // Register App as the main component

export default () => {
    return <App />
}