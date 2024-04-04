import { StyleSheet, Text, View, TextInput, Pressable, Image, FlatList } from "react-native";
import React, { useEffect, useCallback, useContext, useState } from "react";
import axios from "axios";
import { SafeAreaView } from "react-native-safe-area-context";
import DatosCrudCiudad from "./datosCrudCiudad";


const CrudCiudad = ({ navigation }) => {
  const [ciudades, setciudades] = useState([]);
  useEffect(() => {obtenerCiudades()}, [])

  const obtenerCiudades = () => {
    var config = {
      method: "get",
      url: `http://10.0.2.2:9300/ciudad`,
    }
    axios(config)
    .then((response) => {
      setciudades(response.data)
      console.log(response.data)
    })
    .catch(function(error){
      console.log(error);
    })
    
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.btnsUp}>
        <Pressable style={styles.btnNuevo} onPress={()=>navigation.navigate("AgregarCiudad")}>
            <Text style={styles.btnNuevoText}>Nuevo</Text>
        </Pressable>
      </View>
      <View style={styles.header}>
        <Text style={styles.titulo}>Tabla Ciudades</Text>
      </View>
      <FlatList
        data={ciudades}
        renderItem={({item}) => <DatosCrudCiudad item={item} navigation={navigation} obtenerCiudades={obtenerCiudades}/>}
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
  btnsUp: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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

export default CrudCiudad;
