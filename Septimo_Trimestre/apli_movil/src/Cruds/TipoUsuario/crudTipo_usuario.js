import { StyleSheet, Text, View, TextInput, Pressable, Image, FlatList } from "react-native";
import React, { useEffect, useCallback, useContext, useState } from "react";
import axios from "axios";
import { SafeAreaView } from "react-native-safe-area-context";
import DatosCrudTipo_usuario from "./datosCrudTipo_usuario";


const CrudTipo_usuario = ({ navigation }) => {
  const [Tipos_u, setTipos_u] = useState([]);
  useEffect(() => {obtenerTipos_u()}, [])

  const obtenerTipos_u = () => {
    var config = {
      method: "get",
      url: `http://10.0.2.2:9300/tipo_usuario`,
    }
    axios(config)
    .then((response) => {
      setTipos_u(response.data)
      console.log(response.data)
    })
    .catch(function(error){
      console.log(error);
    })
    
  }

  return (
    <SafeAreaView style={styles.container}>
      <Pressable style={styles.btnNuevo} onPress={()=>navigation.navigate("AgregarTipoUsuario")}>
          <Text style={styles.btnNuevoText}>Nuevo</Text>
      </Pressable>
      <View style={styles.header}>
        <Text style={styles.titulo}>Tabla Tipo Usuarios</Text>
      </View>
      <FlatList
        data={Tipos_u}
        renderItem={({item}) => <DatosCrudTipo_usuario item={item} navigation={navigation} obtenerTipos_u={obtenerTipos_u}/>}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DADADA",
    paddingTop: 40,
    padding: 20,
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
  },
  btnNuevo: {
    borderRadius: 5,
    flexDirection: "row-reverse"
  },
  btnNuevoText: {
    color: "blue",
    fontWeight: "bold",
  },
  btnLogout: {
    borderRadius: 5,
    flexDirection: "row"
  },
  btnLogoutText: {
    color: "red",
    fontWeight: "bold",
  },
});

export default CrudTipo_usuario;
