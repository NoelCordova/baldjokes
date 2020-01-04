/**
 * @format
 */

import 'react-native';
import React from 'react';

import {App, HomeScreen} from './imports';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('Application renders correctly', () => {
  renderer.create(<App />);
});

it('HomeScreen renders correctly', () => {
  renderer.create(<HomeScreen />);
});
