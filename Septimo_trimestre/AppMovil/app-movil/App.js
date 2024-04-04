import React, { useState } from 'react';
import { AuthProvider } from './src/Context/AuthContext';
import Nav from './src/Nav/Nav';
import 'react-native-gesture-handler';


export default function App() {

  return (
      <AuthProvider>
        <Nav  />
      </AuthProvider>
  );
}


