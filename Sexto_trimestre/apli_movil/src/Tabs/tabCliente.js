import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Ionicons } from "@expo/vector-icons";
import Reservas from '../Screens/reservas';
import Perfilusuario from '../Screens/perfilCliente';
import Empresas from '../Screens/empresas';
import Agendar from '../Screens/agendar';
import CerrarSesion from '../Screens/cerrarSesion';


const Tab = createBottomTabNavigator();

const TabCliente = () => {
  return (
      <Tab.Navigator 
        tabBarOptions={{
        activeBackgroundColor: "#41F83E",
        inactiveTintColor: "#000",
        activeTintColor: "#1C80FE",
        inactiveBackgroundColor: "#41F83E"
        }}>
              <Tab.Screen 
                name="empresas" 
                component={Empresas}
                options={{
                title: "Empresas",
              tabBarIcon: ({ color, size }) => (
              <Ionicons name="copy" size={size} color={color} />
            ),
            headerShown: false
          }}
              />
              <Tab.Screen 
                name="agendar" 
                component={Agendar}
                options={{
                title: "Agendar",
              tabBarIcon: ({ color, size }) => (
              <Ionicons name="calendar" size={size} color={color} />
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
              <Ionicons name="today" size={size} color={color} />
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


export default TabCliente