import { View, Text, StyleSheet } from 'react-native';
import React from 'react';


const DatosReservas = ({item}) => {
  let {Id_Reservacion,Fecha_reservacion,Lugar_reservacion_idLugar_reservacion,Cant_person,Condiciones,Empresa_Nit_Empresa,Cliente_id_Cliente,Valor,Estatus,Motivo,Empleados_id_empleado} = item
  
  const fecha = new Date(Fecha_reservacion);
    const dia = fecha.getDate();
    const mes = fecha.getMonth() + 1;
    const anio = fecha.getFullYear();
  
    const fechaFormateada = `${anio}/${mes}/${dia}`;


  return (
    <View style = {styles.container}>
      <View style={styles.data}>
        <Text style={styles.textBold}>Id / Empresa / Fecha / Valor / Estado / Motivo</Text>
        <Text>{Id_Reservacion} / {Empresa_Nit_Empresa} / {fechaFormateada} / {Valor} / {Estatus} / {Motivo}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 12,
    flex:1,
    margin: 5,
    elevation: 5,
    flexDirection: "row",
    paddingLeft: 16,
  },
  textBold: {
    fontWeight: "bold",
  },
})

export default DatosReservas;