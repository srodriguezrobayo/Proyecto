import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AgregarGenero from '../Cruds/Genero/agregarGenero';
import CrudGenero from '../Cruds/Genero/crudGenero';
import EditarGenero from '../Cruds/Genero/editarGenero';
import CrudCliente from '../Cruds/Cliente/crudCliente';
import AgregarCliente from '../Cruds/Cliente/agregarCliente';
import EditarCliente from '../Cruds/Cliente/editarCliente';
import CrudCiudad from '../Cruds/ciudad/crudCiudad';
import AgregarCiudad from '../Cruds/ciudad/agregarCiudad'; 
import EditarCiudad from '../Cruds/ciudad/editarCiudad';
import CrudDepartamento from '../Cruds/Departamento/crudDepartamento';
import AgregarDepartamento from '../Cruds/Departamento/agregarDepartamento';
import EditarDepartamento from '../Cruds/Departamento/editarDepartamento';
import CrudEmpleado from '../Cruds/Empleados/crudEmpleado';
import AgregarEmpleado from '../Cruds/Empleados/agregarEmpleado';
import EditarEmpleado from '../Cruds/Empleados/editarEmpleado';
import CrudEmpresa from '../Cruds/Empresa/crudEmpresa';
import AgregarEmpresa from '../Cruds/Empresa/agregarEmpresa';
import EditarEmpresa from '../Cruds/Empresa/editarEmpresa';
import CrudLugarReserva from '../Cruds/LugarReservacion/crudLugar_reservacion';
import AgregarLugarReservacion from '../Cruds/LugarReservacion/agregarLugar_reservacion';
import EditarLugarReservacion from '../Cruds/LugarReservacion/editarLugar_reservacion';
import CrudReservacion from '../Cruds/Reservacion/crudReservacion';
import AgregarReservacion from '../Cruds/Reservacion/agregarReservacion';
import EditarReservacion from '../Cruds/Reservacion/editarReservacion';
import CrudServicio from '../Cruds/Servicio/crudServicio';
import AgregarServicio from '../Cruds/Servicio/agregarServicio';
import EditarServicio from '../Cruds/Servicio/editarServicio';
import CrudTipo_usuario from '../Cruds/TipoUsuario/crudTipo_usuario';
import AgregarTipo_usuario from '../Cruds/TipoUsuario/agregarTipo_usuario';
import EditarTipo_usuario from '../Cruds/TipoUsuario/editarTipo_usuario';
import Menu from '../Tabs/menu';

const Stack = createNativeStackNavigator();

const AdminStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="MenuAdmin" component={Menu}/>
          <Stack.Screen name="CrudGenero" component={CrudGenero}/>
          <Stack.Screen name="AgregarGenero" component={AgregarGenero}/>
          <Stack.Screen name="EditarGenero" component={EditarGenero}/>
          <Stack.Screen name="CrudCliente" component={CrudCliente}/>
          <Stack.Screen name="AgregarCliente" component={AgregarCliente}/>
          <Stack.Screen name="EditarCliente" component={EditarCliente}/>
          <Stack.Screen name="CrudCiudad" component={CrudCiudad}/>
          <Stack.Screen name="AgregarCiudad" component={AgregarCiudad}/>
          <Stack.Screen name="EditarCiudad" component={EditarCiudad}/>
          <Stack.Screen name="CrudDepartamento" component={CrudDepartamento}/>
          <Stack.Screen name="AgregarDepartamento" component={AgregarDepartamento}/>
          <Stack.Screen name="EditarDepartamento" component={EditarDepartamento}/>
          <Stack.Screen name="CrudEmpleado" component={CrudEmpleado}/>
          <Stack.Screen name="AgregarEmpleado" component={AgregarEmpleado}/>
          <Stack.Screen name="EditarEmpleado" component={EditarEmpleado}/>
          <Stack.Screen name="CrudEmpresa" component={CrudEmpresa}/>
          <Stack.Screen name="AgregarEmpresa" component={AgregarEmpresa}/>
          <Stack.Screen name="EditarEmpresa" component={EditarEmpresa}/>
          <Stack.Screen name="CrudLugarReserva" component={CrudLugarReserva}/>
          <Stack.Screen name="AgregarLugarReservacion" component={AgregarLugarReservacion}/>
          <Stack.Screen name="EditarLugarReservacion" component={EditarLugarReservacion}/>
          <Stack.Screen name="CrudReservacion" component={CrudReservacion}/>
          <Stack.Screen name="AgregarReservacion" component={AgregarReservacion}/>
          <Stack.Screen name="EditarReservacion" component={EditarReservacion}/>
          <Stack.Screen name="CrudServicio" component={CrudServicio}/>
          <Stack.Screen name="AgregarServicio" component={AgregarServicio}/>
          <Stack.Screen name="EditarServicio" component={EditarServicio}/>
          <Stack.Screen name="CrudTipo_usuario" component={CrudTipo_usuario}/>
          <Stack.Screen name="AgregarTipo_usuario" component={AgregarTipo_usuario}/>
          <Stack.Screen name="EditarTipo_usuario" component={EditarTipo_usuario}/>
      </Stack.Navigator>
  )
}

export default AdminStack;