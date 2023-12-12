import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import axios from "axios";


const DatosCrudGenero = ({ item, navigation, obtenerGeneros }) => {
  let {idGenero, Desc_genero} = item
  const eliminar = (id) => {
    var config = {
      method: "delete",
      url: `http://10.0.2.2:9300/genero/borrar/${id}`,
    }
    axios(config)
    .then((response) => {
      console.log(response.data)
      obtenerGeneros()
    })
    .catch(function(error){
      console.log(error);
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <View style={styles.item}>
          <Text style={styles.name}>{idGenero} {Desc_genero}</Text>
          <View style={styles.btns}>
            <Pressable onPress={() => navigation.navigate("EditarGenero", {idGenero: idGenero})}>
              <Text style={styles.editarText}>Editar</Text>
            </Pressable>
            <Pressable onPress={() => eliminar(idGenero)}>
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

export default DatosCrudGenero;
