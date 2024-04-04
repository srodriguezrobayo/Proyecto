import 'react-native-gesture-handler';
import {
    SimpleLineIcons,
    MaterialIcons,
    MaterialComunityIcons,
    FontAwesome,
    Ionicons,
    Feather,
    MaterialCommunityIcons,
} from "@expo/vector-icons";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
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

const Drawer = createDrawerNavigator();

function Menu() {
  return (
        <Drawer.Navigator
            screenOptions={{
                drawerStyle:{
                    backgroundColor: "#fff",
                    width: 250,
                    borderRadius: 20,
                },
                headerStyle:{
                    backgroundColor: "#DADADA",
                },
                headerTintColor: "#050505",
                headerTitleStyle: { 
                    fontWeight: "bold",
                },
                drawerActiveTintColor: "#3AFA86",
                drawerLabelStyle: {
                    color: "#111",
                    fontSize:17,
                },

                
            }}
            >
            
        <Drawer.Screen 
            name="genero" 
            component={CrudGenero}
            options={{
                headerTitle: null,
                title:"",
                drawerLabel: "Genero",
                drawerIcon: () => (
                    <Ionicons name="transgender" size={20} color="#808080"/>
                ),
            }}/>
            <Drawer.Screen 
            name="cliente" 
            component={CrudCliente}
            options={{
                headerTitle: null,
                title:"",
                drawerLabel: "Cliente",
                drawerIcon: () => (
                    <Feather name="users" size={20} color="#808080"/>
                )
            }}/>
            <Drawer.Screen 
            name="servicio" 
            component={CrudServicio}
            options={{
                headerTitle: null,
                title:"",
                drawerLabel: "Servicio",
                drawerIcon: () => (
                    <MaterialCommunityIcons name="room-service-outline" size={20} color="#808080"/>
                )
            }}/>
            <Drawer.Screen 
            name="tipo_usuario" 
            component={CrudTipo_usuario}
            options={{
                headerTitle: null,

                drawerLabel: "Tipo_Usuario",
                title: "",
                drawerIcon: () => (
                    <SimpleLineIcons name="home" size={20} color="#808080"/>
                )
            }}/>
            <Drawer.Screen 
            name="ciudad" 
            component={CrudCiudad}
            options={{
                headerTitle: null,

                drawerLabel: "Ciudad",
                title: "",
                drawerIcon: () => (
                    <MaterialCommunityIcons name="city-variant-outline"  size={20} color="#808080"/>
                )
            }}/>
            <Drawer.Screen 
            name="departamento" 
            component={CrudDepartamento}
            options={{
                headerTitle: null,

                drawerLabel: "Depertamento",
                title: "",
                drawerIcon: () => (
                    <Ionicons name="earth" size={20} color="#808080"/>
                )
            }}/>
            <Drawer.Screen 
            name="empleado" 
            component={CrudEmpleado}
            options={{
                headerTitle: null,
                drawerLabel: "Empleado",
                title: "",
                drawerIcon: () => (
                    <Ionicons name="people-outline" size={20} color="#808080"/>
                )
            }}/>
            <Drawer.Screen 
            name="empresa" 
            component={CrudEmpresa}
            options={{
                headerTitle: null,

                drawerLabel: "Empresa",
                title: "",
                drawerIcon: () => (
                    <Ionicons name="business-outline" size={20} color="#808080"/>
                )
            }}/>
            <Drawer.Screen 
            name="lugarreserva" 
            component={CrudLugarReserva}
            options={{
                headerTitle: null,

                drawerLabel: "LugarReserva",
                title: "",
                drawerIcon: () => (
                    <Ionicons name="location-outline"  size={20} color="#808080"/>
                )
            }}/>
            <Drawer.Screen 
            name="reservacion" 
            component={CrudReservacion}
            options={{
                headerTitle: null,

                drawerLabel: "Reservacion",
                title: "",
                drawerIcon: () => (
                    <Ionicons name="calendar-outline" size={20} color="#808080"/>
                )
            }}/>
            <Drawer.Screen 
            name="cerrarsesion" 
            component={CerrarSesion}
            options={{
                drawerLabelStyle:{
                    marginTop:190,
                    fontWeight: "bold",
                    fontSize:17,
                },
                color:"#FC053D",
                drawerLabel: "CerrarSesion",
                drawerIcon: () => (
                    <Ionicons name="exit-outline" marginTop={190} size={20} color="#FC053D"/>
                ),
            }}/>
        </Drawer.Navigator>     
  );
}

export default Menu;