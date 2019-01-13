// Import a library to help create a component
import React, { Fragment } from 'react';
import { Text, AppRegistry } from 'react-native';
import Header from './src/components/header';

//Create a component
const App = () => (
  <Fragment>
    <Header />
  </Fragment>
);

//Render it to the device
AppRegistry.registerComponent('albums', () => App);
