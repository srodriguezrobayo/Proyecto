import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CerrarSesion from '../Screens/cerrarSesion';
import Publicaciones from '../Screens/reservasEmpresa/publicaciones';
import AceptarReserva from '../Screens/reservasEmpresa/aceptarReserva';
import TabEmpresa from '../Tabs/tabEmpresa';
import PerfilEmpresa from '../Screens/perfilEmpresa/perfilEmpresa';
import RechazarReserva from '../Screens/reservasEmpresa/rechazarReserva';


const Stack = createNativeStackNavigator();

const EmpresaStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="TabEmpresa" component={TabEmpresa}/>
          <Stack.Screen name="Publicaciones" component={Publicaciones}/>
          <Stack.Screen name="AceptarReserva" component={AceptarReserva}/>
          <Stack.Screen name="RechazarReserva" component={RechazarReserva}/>
          <Stack.Screen name="PerfilEmpresa" component={PerfilEmpresa}/>
          <Stack.Screen name="CerrarSesion" component={CerrarSesion}/>
      </Stack.Navigator>
  )
}

export default EmpresaStack;