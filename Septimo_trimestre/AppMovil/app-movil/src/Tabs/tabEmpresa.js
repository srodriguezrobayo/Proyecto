import React from 'react';
import { StyleSheet,Text,View,Image,TouchableOpacity } from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Ionicons } from "@expo/vector-icons";
import Publicaciones from '../Screens/reservasEmpresa/publicaciones';
import PerfilEmpresa from '../Screens/perfilEmpresa/perfilEmpresa';

const Tab = createBottomTabNavigator();

const TabEmpresa = () => {
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
            ...styles.shadow
        },
        showLabel: false,
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'publicaciones') {
            iconName = 'copy';
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
        <Tab.Screen name="publicaciones" component={Publicaciones}
          options={{
            title: ""
          }}
        />
        <Tab.Screen name="perfil" component={PerfilEmpresa}
          options={{
            title: ""
          }}
        />
    </Tab.Navigator>
    
  )
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: 'black',
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
