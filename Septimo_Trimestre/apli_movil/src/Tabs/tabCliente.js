import React from 'react';
import { StyleSheet,Text,View,Image,TouchableOpacity } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Ionicons } from "@expo/vector-icons";
import Reservas from '../Screens/reservasCliente/reservas';
import Perfilusuario from '../Screens/perfilCliente/perfilCliente';
import Empresas from '../Screens/vistaEmpresas/empresas';
import CerrarSesion from '../Screens/cerrarSesion';


const Tab = createBottomTabNavigator();

const TabCliente = () => {
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
      height: 75,
      ...styles.shadow
      },
      showLabel: false,
      
        }}>
              <Tab.Screen 
                name="empresas" 
                component={Empresas}
                options={{
                title: "Empresas",
              tabBarIcon: ({ color, size }) => (
              <Ionicons name="copy" size={size} color='#FFFFFF' />
            ),
            headerShown: false
          }}
              />
              <Tab.Screen 
                name="reservaciones" 
                component={Reservas}
                options={{
                title: "Mis reservas",
              tabBarIcon: ({ color, size }) => (
              <Ionicons name="today" size={size} color='#FFFFFF' />
            ),
            headerShown: false
          }}
              />
              <Tab.Screen 
                name="perfil" 
                component={Perfilusuario}
                options={{
                title: "Mi perfil",
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


export default TabCliente