import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Ionicons } from "@expo/vector-icons";
import Publicacion from '../Screens/publicaciones';
import PerfilEmpresa from '../Screens/perfilEmpresa';
import CerrarSesion from '../Screens/cerrarSesion';


const Tab = createBottomTabNavigator();

const TabEmpresa = () => {
  return (
    <Tab.Navigator 
      tabBarOptions={{
      activeBackgroundColor: "#41F83E",
      inactiveTintColor: "#000",
      activeTintColor: "#1C80FE",
      inactiveBackgroundColor: "#41F83E"
      }}>

            <Tab.Screen 
              name="publicacion" 
              component={Publicacion}
              options={{
              title: "Mis publicaciones",
            tabBarIcon: ({ color, size }) => (
            <Ionicons name="copy" size={size} color={color} />
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
            <Ionicons name="person" size={size} color={color} />
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


export default TabEmpresa;