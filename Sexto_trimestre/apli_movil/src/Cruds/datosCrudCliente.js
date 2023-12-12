import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import axios from "axios";


const DatosCrudCliente = ({ item, navigation, obtenerClientes }) => {
  let {id_Cliente,Nombre_cliente,Correoelectronico_cliente,Password_cliente,Telefono_cliente,Genero_idGenero,Ciudad_id_Ciudad,TipoUsuario_idTipo_usuario,Foto_cliente} = item
  const eliminar = (id) => {
    var config = {
      method: "delete",
      url: `http://10.0.2.2:9300/cliente/borrar/${id}`,
    }
    axios(config)
    .then((response) => {
      console.log(response.data)
      obtenerClientes()
    })
    .catch(function(error){
      console.log(error);
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <View style={styles.item}>
          <Text style={styles.name}>{id_Cliente}</Text>
          <Text style={styles.name}>{Nombre_cliente}</Text>
          <Text style={styles.name}>{Correoelectronico_cliente}</Text>
          <View style={styles.btns}>
            <Pressable onPress={() => navigation.navigate("EditarCliente", {id_Cliente: id_Cliente})}>
              <Text style={styles.editarText}>Editar</Text>
            </Pressable>
            <Pressable onPress={() => eliminar(id_Cliente)}>
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

export default DatosCrudCliente;
