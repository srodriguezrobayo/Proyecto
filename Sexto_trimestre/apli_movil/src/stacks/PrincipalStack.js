import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Bienvenida from '../Screens/bienvenida';
import RegistroCliente from '../Screens/registroCliente';
import RegistroEmpresa from '../Screens/registroEmpresa';
import LoginCliente from '../Screens/loginCliente';
import TabCliente from '../Tabs/tabCliente';
import LoginEmpresa from '../Screens/loginEmpresa';
import TabEmpresa from '../Tabs/tabEmpresa';
import Agendar from '../Screens/agendar';
import DatosEmpresas from '../Screens/datosEmpresas';
import LoginAdmin from '../Screens/loginAdmin';
import AgregarGenero from '../Cruds/agregarGenero';
import CrudGenero from '../Cruds/crudGenero';

const Stack = createNativeStackNavigator();

const PrincipalStack = () => {
  
  return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Bienvenida" component={Bienvenida}/>
          <Stack.Screen name="RegistroCliente" component={RegistroCliente}/>
          <Stack.Screen name="RegistroEmpresa" component={RegistroEmpresa}/>
          <Stack.Screen name="LoginCliente" component={LoginCliente}/>
          <Stack.Screen name="LoginEmpresa" component={LoginEmpresa}/>
          <Stack.Screen name="LoginAdmin" component={LoginAdmin}/>
          <Stack.Screen name="TabCliente" component={TabCliente}/>
          <Stack.Screen name="TabEmpresa" component={TabEmpresa}/>
          <Stack.Screen name="Agendar" component={Agendar}/>
          <Stack.Screen name="DatosEmpresas" component={DatosEmpresas}/>
      </Stack.Navigator>
  )
}

export default PrincipalStack;