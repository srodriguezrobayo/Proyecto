import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Ionicons } from "@expo/vector-icons";
import CrudGenero from '../Cruds/crudGenero';
import CrudCliente from '../Cruds/crudCliente';
import CerrarSesion from '../Screens/cerrarSesion';



const Tab = createBottomTabNavigator();

const TabAdmin = () => {
  return (
      <Tab.Navigator 
        tabBarOptions={{
        activeBackgroundColor: "#41F83E",
        inactiveTintColor: "#000",
        activeTintColor: "#1C80FE",
        inactiveBackgroundColor: "#41F83E"
        }}>
              <Tab.Screen 
                name="generos" 
                component={CrudGenero}
                options={{
                title: "Generos",
              tabBarIcon: ({ color, size }) => (
              <Ionicons name="copy" size={size} color={color} />
            ),
            headerShown: false
          }}
              />
              <Tab.Screen 
                name="clientes" 
                component={CrudCliente}
                options={{
                title: "Clientes",
              tabBarIcon: ({ color, size }) => (
              <Ionicons name="calendar" size={size} color={color} />
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
              <Ionicons name="exit" size={size} color={color} />
            ),
            headerShown: false
          }}
              />
               
      </Tab.Navigator>
    
  )
}


export default TabAdmin