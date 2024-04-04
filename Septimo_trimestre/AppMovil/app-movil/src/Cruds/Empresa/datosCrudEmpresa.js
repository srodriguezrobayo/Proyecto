import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import axios from "axios";


const DatosCrudEmpresa = ({ item, navigation, obtenerEmpresas }) => {
  let {Nit_Empresa,Nombre_empresa,Correoelectronico_empresa,Password_empresa,Desc_empresa,
    Telefono_empresa,Ciudad_id_Ciudad,Foto_empresa} = item
  const eliminar = (id) => {
    var config = {
      method: "delete",
      url: `http://10.0.2.2:9300/empresa/borrar/${id}`,
    }
    axios(config)
    .then((response) => {
      console.log(response.data)
      obtenerEmpresas()
    })
    .catch(function(error){
      console.log(error);
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <View style={styles.item}>
          <Text style={styles.name}>{Nombre_empresa} {Correoelectronico_empresa} {Telefono_empresa}</Text>
          <View style={styles.btns}>
            <Pressable onPress={() => navigation.navigate("EditarEmpresa", {Nit_Empresa: Nit_Empresa})}>
              <Text style={styles.editarText}>Editar</Text>
            </Pressable>
            <Pressable onPress={() => eliminar(Nit_Empresa)}>
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

export default DatosCrudEmpresa;
