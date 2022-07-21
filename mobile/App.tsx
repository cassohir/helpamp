import {NativeBaseProvider} from 'native-base'
import React from 'react';
import {THEME} from './src/styles/theme';
import { SignIn } from './src/screens/SignIn';

export default function App() {
  return (
    <NativeBaseProvider theme={THEME}>

      <SignIn />

    </NativeBaseProvider>
  );
}

