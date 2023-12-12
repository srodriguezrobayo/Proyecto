import { View, Text, StyleSheet ,Image, Dimensions} from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const DatosReservas = ({item}) => {
  let {Id_Reservacion,Servicio_idServicio,Fecha_reservacion,Hora_reservacion,Lugar_reservacion_idLugar_reservacion,Empresa_Nit_Empresa,Cliente_id_Cliente,Valor,Empleados_id_empleado} = item
  const fechaString = Fecha_reservacion.split('T')[0];

  return (
    <View style = {styles.container}>
      <Text style = {{width}}>
      <Image
      source={require('../components/img/starbuck.jpg')}
      style={{width: 30, height: 30, flex:1}}
      /> {Id_Reservacion}    {Empresa_Nit_Empresa}    {fechaString}   {Valor}   <AntDesign name="eyeo" size={24} color="black" />      
      <AntDesign name="delete" size={24} color="red" /></Text>
    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 10,
    flex:1,
    margin: 5,
    elevation: 5,
  },
  titulo: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 4,
    color: '#030962',
  }
})

export default DatosReservas;