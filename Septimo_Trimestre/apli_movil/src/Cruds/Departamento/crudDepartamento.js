import { StyleSheet, Text, View, TextInput, Pressable, Image, FlatList } from "react-native";
import React, { useEffect, useCallback, useContext, useState } from "react";
import axios from "axios";
import { SafeAreaView } from "react-native-safe-area-context";
import DatosCrudDepartamento from "./datosCrudDepartamento";


const CrudDepartamento = ({ navigation }) => {
  const [departamentos, setDepartamentos] = useState([]);
  useEffect(() => {obtenerDepartamentos()}, [])

  const obtenerDepartamentos = () => {
    var config = {
      method: "get",
      url: `http://10.0.2.2:9300/departamento`,
    }
    axios(config)
    .then((response) => {
      setDepartamentos(response.data)
      console.log(response.data)
    })
    .catch(function(error){
      console.log(error);
    })
    
  }

  return (
    <SafeAreaView style={styles.container}>
      <Pressable style={styles.btnNuevo} onPress={()=>navigation.navigate("AgregarDepartamento")}>
          <Text style={styles.btnNuevoText}>Nuevo</Text>
      </Pressable>
      <View style={styles.header}>
        <Text style={styles.titulo}>Tabla Departamentos</Text>
      </View>
      <FlatList
        data={departamentos}
        renderItem={({item}) => <DatosCrudDepartamento item={item} navigation={navigation} obtenerDepartamentos={obtenerDepartamentos}/>}
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

export default CrudDepartamento;
