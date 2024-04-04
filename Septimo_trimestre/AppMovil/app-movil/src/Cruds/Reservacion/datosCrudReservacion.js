import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import axios from "axios";
import { format } from 'date-fns';


const DatosCrudReservacion = ({ item, navigation, obtenerReservaciones }) => {
  let {Id_Reservacion,	Servicio_idServicio,Fecha_reservacion,Hora_reservacion,Lugar_reservacion_idLugar_reservacion,
    Cant_person,	Condiciones,	Empresa_Nit_Empresa,Cliente_id_Cliente,	Valor,Estatus,Empleados_id_empleado,} = item;

  const formattedDate = format(new Date(Fecha_reservacion), 'dd/MM/yyyy');


  const eliminar = (id) => {
    var config = {
      method: "delete",
      url: `http://10.0.2.2:9300/reservacion/borrar/${id}`,
    }
    axios(config)
    .then((response) => {
      console.log(response.data)
      obtenerReservaciones()
    })
    .catch(function(error){
      console.log(error);
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <View style={styles.item}>
          <Text style={styles.name}>{Id_Reservacion} {formattedDate} {Hora_reservacion} {Estatus}</Text>
          <View style={styles.btns}>
            <Pressable onPress={() => navigation.navigate("EditarReservacion", {Id_Reservacion: Id_Reservacion})}>
              <Text style={styles.editarText}>Editar</Text>
            </Pressable>
            <Pressable onPress={() => eliminar(Id_Reservacion)}>
              <Text style={styles.eliminarText}>Eliminar</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DADADA",
  },
  item: {
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
  name: {
    fontSize: 15,
  },
  editarText: {
    color: "green",
  },
  eliminarText: {
    color: "red",
  },
});

export default DatosCrudReservacion;
