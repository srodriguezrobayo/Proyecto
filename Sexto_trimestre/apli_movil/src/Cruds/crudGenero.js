import { StyleSheet, Text, View, TextInput, Pressable, Image, FlatList } from "react-native";
import React, { useEffect, useCallback, useContext, useState } from "react";
import axios from "axios";
import { SafeAreaView } from "react-native-safe-area-context";
import DatosCrudGenero from "./datosCrudGenero";


const CrudGenero = ({ navigation }) => {
  const [generos, setGeneros] = useState([]);
  useEffect(() => {obtenerGeneros()}, [])

  const obtenerGeneros = () => {
    var config = {
      method: "get",
      url: `http://10.0.2.2:9300/genero`,
    }
    axios(config)
    .then((response) => {
      setGeneros(response.data)
      console.log(response.data)
    })
    .catch(function(error){
      console.log(error);
    })
    
  }

  return (
    <SafeAreaView style={styles.container}>
      <Pressable style={styles.btnNuevo} onPress={()=>navigation.navigate("AgregarGenero")}>
          <Text style={styles.btnNuevoText}>Nuevo</Text>
      </Pressable>
      <View style={styles.header}>
        <Text style={styles.titulo}>Tabla Generos</Text>
      </View>
      <FlatList
        data={generos}
        renderItem={({item}) => <DatosCrudGenero item={item} navigation={navigation} obtenerGeneros={obtenerGeneros}/>}
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

export default CrudGenero;
