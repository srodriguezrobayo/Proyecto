import { StyleSheet, Text, View, TextInput, Pressable, Image, FlatList } from "react-native";
import React, { useEffect, useCallback, useContext, useState } from "react";
import axios from "axios";
import { SafeAreaView } from "react-native-safe-area-context";
import DatosCrudServicio from "./datosCrudServicio";


const CrudServicio = ({ navigation }) => {
  const [Servicios, setServicios] = useState([]);
  useEffect(() => {obtenerServicios()}, [])

  const obtenerServicios = () => {
    var config = {
      method: "get",
      url: `http://10.0.2.2:9300/servicio`,
    }
    axios(config)
    .then((response) => {
      setServicios(response.data)
      console.log(response.data)
    })
    .catch(function(error){
      console.log(error);
    })
    
  }

  return (
    <SafeAreaView style={styles.container}>
      <Pressable style={styles.btnNuevo} onPress={()=>navigation.navigate("AgregarServicio")}>
          <Text style={styles.btnNuevoText}>Nuevo</Text>
      </Pressable>
      <View style={styles.header}>
        <Text style={styles.titulo}>Tabla Servicios</Text>
      </View>
      <FlatList
        data={Servicios}
        renderItem={({item}) => <DatosCrudServicio item={item} navigation={navigation} obtenerServicios={obtenerServicios}/>}
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

export default CrudServicio;