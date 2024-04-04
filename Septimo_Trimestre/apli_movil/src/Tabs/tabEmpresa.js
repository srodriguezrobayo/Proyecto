import React from 'react';
import { StyleSheet,Text,View,Image,TouchableOpacity } from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Ionicons } from "@expo/vector-icons";
import Publicaciones from '../Screens/reservasEmpresa/publicaciones';
import PerfilEmpresa from '../Screens/perfilEmpresa/perfilEmpresa';
import CerrarSesion from '../Screens/cerrarSesion';


const Tab = createBottomTabNavigator();

const TabEmpresa = () => {
  return (
    <Tab.Navigator 
      screenOptions={{
      tabBarStyle: {
      position: 'absolute',
      bottom: 20,
      left: 15,
      right: 15,
      elevation: 0,
      backgroundColor: '#3AFA86',
      borderRadius: 15,
      height: 70,
      ...styles.shadow
      },
      showLabel: false,
      }}>

            <Tab.Screen 
              name="publicaciones" 
              component={Publicaciones}
              options={{
              title: "Mis publicaciones",
            tabBarIcon: ({ color, size }) => (
            <Ionicons name="copy" size={size} color='#FFFFFF' />
          ),
          headerShown: false
        }}
            />
            <Tab.Screen 
              name="Perfil" 
              component={PerfilEmpresa}
              options={{
              title: "Mi Perfil",
            tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color='#FFFFFF' />
          ),
          headerShown: false
        }}
            />
            <Tab.Screen 
                name="logout" 
                component={CerrarSesion}
                options={{
                title: "Cerrar Sesión",
              tabBarIcon: ({ color, size }) => (
              <Ionicons name="exit" size={size} color='#FFFFFF' />
            ),
            headerShown: false
          }}
              />
    </Tab.Navigator>
    
  )
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
  }
})

export default TabEmpresa;