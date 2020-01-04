import React from 'react';
import {HomeScreen} from './screens';
import {Provider as PaperProvider} from 'react-native-paper';

const App = () => (
  <PaperProvider>
    <HomeScreen />
  </PaperProvider>
);

export default App;
