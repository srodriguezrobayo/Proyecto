import React from 'react';
import AgregarGenero from '../Cruds/agregarGenero';
import CrudGenero from '../Cruds/crudGenero';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EditarGenero from '../Cruds/editarGenero';
import CerrarSesion from '../Screens/cerrarSesion';
import CrudCliente from '../Cruds/crudCliente';
import AgregarCliente from '../Cruds/agregarCliente';
import EditarCliente from '../Cruds/editarCliente';
import TabAdmin from '../Tabs/tabAdmin';


const Stack = createNativeStackNavigator();

const AdminStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="TabAdmin" component={TabAdmin}/>
          <Stack.Screen name="CrudGenero" component={CrudGenero}/>
          <Stack.Screen name="AgregarGenero" component={AgregarGenero}/>
          <Stack.Screen name="EditarGenero" component={EditarGenero}/>
          <Stack.Screen name="CrudCliente" component={CrudCliente}/>
          <Stack.Screen name="AgregarCliente" component={AgregarCliente}/>
          <Stack.Screen name="EditarCliente" component={EditarCliente}/>
          <Stack.Screen name="CerrarSesion" component={CerrarSesion}/>
      </Stack.Navigator>
  )
}

export default AdminStack;