import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabCliente from '../Tabs/tabCliente';
import Empresas from '../Screens/vistaEmpresas/empresas';
import PerfilCliente from '../Screens/perfilCliente/perfilCliente';
import Reservas from '../Screens/reservasCliente/reservas';
import EditarPerfilCliente from '../Screens/perfilCliente/editarPerfilCliente';


const Stack = createNativeStackNavigator();

const ClienteStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="TabCliente" component={TabCliente}/>
          <Stack.Screen name="Empresas" component={Empresas}/>
          <Stack.Screen name="Reservas" component={Reservas}/>
          <Stack.Screen name="PerfilCliente" component={PerfilCliente}/>
          <Stack.Screen name="EditarPerfilCliente" component={EditarPerfilCliente}/>
      </Stack.Navigator>
  )
}

export default ClienteStack;