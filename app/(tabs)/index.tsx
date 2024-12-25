// index.tsx
import React from 'react';
import { AppRegistry } from 'react-native';
import App from '../../App'; // Import the App component
import { name as appName } from '../../app.json'; // Import the app name from the JSON file
import Data from "../../data/data"
import Backs from "../../data/backs"


AppRegistry.registerComponent(appName, () => CrudApp); // Register App as the main component

export default () => {
   //  return <Data />
 return <App />
}