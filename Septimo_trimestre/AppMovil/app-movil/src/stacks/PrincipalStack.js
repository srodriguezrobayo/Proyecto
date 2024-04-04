import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Bienvenida from '../Screens/bienvenida';
import RegistroCliente from '../Screens/registroCliente';
import RegistroEmpresa from '../Screens/registroEmpresa';
import LoginCliente from '../Screens/loginCliente';
import LoginEmpresa from '../Screens/loginEmpresa';
import Agendar from '../Screens/agendar';
import LoginAdmin from '../Screens/loginAdmin';


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
          <Stack.Screen name="Agendar" component={Agendar}/>
      </Stack.Navigator>
  )
}

export default PrincipalStack;