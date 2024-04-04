import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Reservas from '../Screens/reservasCliente/reservas';
import Perfilusuario from '../Screens/perfilCliente/perfilCliente';
import Empresas from '../Screens/vistaEmpresas/empresas';

const Tab = createBottomTabNavigator();

const TabCliente = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          position: 'absolute',
          bottom: 20,
          left: 15,
          right: 15,
          elevation: 0,
          backgroundColor: '#3AFA86',
          borderRadius: 15,
          height: 75,
          paddingTop: 10,
          ...styles.shadow,
        },
        showLabel: false,
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'empresas') {
            iconName = 'copy';
          } else if (route.name === 'reservaciones') {
            iconName = 'today';
          } else if (route.name === 'perfil') {
            iconName = 'person';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#fff',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="empresas" component={Empresas}
        options={{
          title: ""
        }}
      />
      <Tab.Screen name="reservaciones" component={Reservas}
        options={{
          title: ""
        }}
      />
      <Tab.Screen name="perfil" component={Perfilusuario}
        options={{
          title: ""
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default TabCliente;