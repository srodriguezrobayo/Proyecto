import React, { useState } from 'react';
import { AuthProvider } from './src/Context/AuthContext';
import Nav from './src/Nav/Nav';


export default function App() {

  return (
      <AuthProvider>
        <Nav  />
      </AuthProvider>
  );
}


