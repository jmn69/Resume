import React from 'react';

import Switcher from './pages/Switcher';

import Sidebar from './components/Sidebar';

import { AppContainer } from './App.s';

const App = () => (
  <AppContainer>
    <Sidebar />
    <Switcher />
  </AppContainer>
);

export default App;
