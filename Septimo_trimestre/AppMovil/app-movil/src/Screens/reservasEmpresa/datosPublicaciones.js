import { View, Text, StyleSheet ,Image, Pressable} from 'react-native';
import React, { useState } from 'react';


const DatosPublicaciones = ({item, navigation}) => {
  let {Id_Reservacion,Servicio_idServicio,Fecha_reservacion,Hora_reservacion,Lugar_reservacion_idLugar_reservacion,Cant_person,Condiciones,Empresa_Nit_Empresa,Cliente_id_Cliente,Valor,Estatus,Empleados_id_empleado} = item

  const fecha = new Date(Fecha_reservacion);
    const dia = fecha.getDate();
    const mes = fecha.getMonth() + 1;
    const anio = fecha.getFullYear();
  
    const fechaFormateada = `${anio}/${mes}/${dia}`;


  return (
    <View style = {styles.container}>
      <View style={styles.data}>
        <Text style={styles.text}>{Id_Reservacion} / {fechaFormateada} / {Cant_person} / {Valor} / {Estatus}</Text>
        <View>
          <Pressable style={styles.btn} onPress={() => navigation.navigate("AceptarReserva", {Id_Reservacion: Id_Reservacion})}>
            <Text>✔</Text>
          </Pressable>
          <Pressable style={styles.btnRec} onPress={() => navigation.navigate("RechazarReserva", {Id_Reservacion: Id_Reservacion})}>
            <Text>✘</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    flex:1,
  },
  data: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    height: "auto",
    width: "95%",
    backgroundColor: "#ffffff",
    borderRadius: 15,
    padding: 10,
    margin: 8,
    elevation: 8,
  },
  text: {
    margin: 12
  },
  btn: {
    backgroundColor: "green",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
  },
  btnRec: {
    backgroundColor: "red",
    borderRadius: 6,
    paddingVertical: 2,
    paddingHorizontal: 6,

  }
})

export default DatosPublicaciones;