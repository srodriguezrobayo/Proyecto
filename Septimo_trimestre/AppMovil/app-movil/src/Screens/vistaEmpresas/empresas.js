import { StyleSheet, Text, View, TextInput, Pressable, Image, FlatList } from "react-native";
import React, { useEffect, useCallback, useContext, useState } from "react";
import axios from "axios";
import DatosEmpresas from "./datosEmpresas";
import { SafeAreaView } from "react-native-safe-area-context";


const Empresas = ({ navigation }) => {
  const [empresas, setEmpresas] = useState([]);
  useEffect(() => {obtenerEmpresas()}, [])

  const obtenerEmpresas = () => {
    var config = {
      method: "get",
      url: `http://10.0.2.2:9300/empresa`,
    }
    axios(config)
    .then((response) => {
      setEmpresas(response.data)
      console.log(response.data)
    })
    .catch(function(error){
      console.log(error);
    })
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>Empresas</Text>
        <Text style={styles.subtitulo}>Reservaciones Disponibles por las Empresas</Text>
      </View>
      <FlatList
        data={empresas}
        renderItem={({item}) => <DatosEmpresas item={item} navigation={navigation}/>}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    paddingTop: 30,
    padding: 20,
    paddingBottom: 90,
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
  subtitulo: {
    fontSize: 14,
    color: "#808080",
    marginTop: 16,
  },
});

export default Empresas;
