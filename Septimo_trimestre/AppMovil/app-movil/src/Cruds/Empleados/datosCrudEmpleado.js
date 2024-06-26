import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import axios from "axios";


const DatosCrudEmpleado = ({ item, navigation, obtenerEmpleados }) => {
  let {id_empleado,Nom_empleado,Correo_elec_admin,Password_empleado,Tipo_usuario_idTipo_usuario,Telefono_empleado,
    Genero_idGenero} = item
  const eliminar = (id) => {
    var config = {
      method: "delete",
      url: `http://10.0.2.2:9300/empleado/borrar/${id}`,
    }
    axios(config)
    .then((response) => {
      console.log(response.data)
      obtenerEmpleados()
    })
    .catch(function(error){
      console.log(error);
    }) 
  }

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <View style={styles.item}>
          <Text style={styles.name}>{Nom_empleado} {Correo_elec_admin} {Tipo_usuario_idTipo_usuario}</Text>
          <View style={styles.btns}>
            <Pressable onPress={() => navigation.navigate("EditarEmpleado", {id_empleado: id_empleado})}>
              <Text style={styles.editarText}>Editar</Text>
            </Pressable>
            <Pressable onPress={() => eliminar(id_empleado)}>
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

export default DatosCrudEmpleado;
