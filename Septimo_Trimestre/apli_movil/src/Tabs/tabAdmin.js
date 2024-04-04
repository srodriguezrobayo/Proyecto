import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Ionicons } from "@expo/vector-icons";
import CrudGenero from '../Cruds/Genero/crudGenero';
import CrudServicio from '../Cruds/Servicio/crudServicio'
import CrudCliente from '../Cruds/Cliente/crudCliente';
import CerrarSesion from '../Screens/cerrarSesion';
import CrudTipo_usuario from '../Cruds/TipoUsuario/crudTipo_usuario';
import CrudDepartamento from '../Cruds/Departamento/crudDepartamento';
import CrudCiudad from '../Cruds/ciudad/crudCiudad';
import CrudEmpleado from '../Cruds/Empleados/crudEmpleado';
import CrudEmpresa from '../Cruds/Empresa/crudEmpresa';
import CrudLugarReserva from '../Cruds/LugarReservacion/crudLugar_reservacion';
import CrudReservacion from '../Cruds/Reservacion/crudReservacion';



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
                name="servicios" 
                component={CrudServicio}
                options={{
                title: "servicios",
              tabBarIcon: ({ color, size }) => (
              <Ionicons name="copy" size={size} color={color} />
            ),
            headerShown: false
          }}
              />
              
              <Tab.Screen 
                name="Tipo_usuario" 
                component={CrudTipo_usuario}
                options={{
                title: "Tipo_usuario",
              tabBarIcon: ({ color, size }) => (
              <Ionicons name="copy" size={size} color={color} />
            ),
            headerShown: false
          }}
              />

              <Tab.Screen 
                name="Ciudad" 
                component={CrudCiudad}
                options={{
                title: "Ciudad",
              tabBarIcon: ({ color, size }) => (
              <Ionicons name="copy" size={size} color={color} />
            ),
            headerShown: false
          }}
              />

              <Tab.Screen 
                name="Departamento" 
                component={CrudDepartamento}
                options={{
                title: "Departamento",
              tabBarIcon: ({ color, size }) => (
              <Ionicons name="copy" size={size} color={color} />
            ),
            headerShown: false
          }}
              />
              
              <Tab.Screen 
                name="Empleado" 
                component={CrudEmpleado}
                options={{
                title: "Empleado",
              tabBarIcon: ({ color, size }) => (
              <Ionicons name="copy" size={size} color={color} />
            ),
            headerShown: false
          }}
              />
              <Tab.Screen 
                name="Empresa" 
                component={CrudEmpresa}
                options={{
                title: "Empresa",
              tabBarIcon: ({ color, size }) => (
              <Ionicons name="copy" size={size} color={color} />
            ),
            headerShown: false
          }}
              />
              
              <Tab.Screen 
                name="Lugar" 
                component={CrudLugarReserva}
                options={{
                title: "Lugar",
              tabBarIcon: ({ color, size }) => (
              <Ionicons name="copy" size={size} color={color} />
            ),
            headerShown: false
          }}
              />
              <Tab.Screen 
                name="Reservacion" 
                component={CrudReservacion}
                options={{
                title: "Reservacion",
              tabBarIcon: ({ color, size }) => (
              <Ionicons name="copy" size={size} color={color} />
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


export default TabAdmin;