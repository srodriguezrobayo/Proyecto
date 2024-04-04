import React, { useState } from 'react';
import { AuthProvider } from './src/Context/AuthContext';
import Nav from './src/Nav/Nav';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerNavigation } from './src/Navigation/DrawerNavigation';

export default function App() {

  return (
      <AuthProvider>
        
        
        <NavigationContainer>
          <Nav  />
          <DrawerNavigation/>
          
        </NavigationContainer>
      </AuthProvider>

      
  );

}


