import { StyleSheet, Text, View, Pressable, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { SafeAreaView } from "react-native-safe-area-context";
import DatosCrudCliente from "./datosCrudCliente";


const CrudCliente = ({ navigation }) => {
  const [clientes, setClientes] = useState([]);
  useEffect(() => {obtenerClientes()}, [])

  const obtenerClientes = () => {
    var config = {
      method: "get",
      url: `http://10.0.2.2:9300/cliente`,
    }
    axios(config)
    .then((response) => {
      setClientes(response.data)
      console.log(response.data)
    })
    .catch(function(error){
      console.log(error);
    })
    
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.btnsUp}>
        <Pressable style={styles.btnNuevo} onPress={()=>navigation.navigate("AgregarCliente")}>
          <Text style={styles.btnNuevoText}>Nuevo</Text>
        </Pressable>
      </View>
      <View style={styles.header}>
        <Text style={styles.titulo}>Tabla Clientes</Text>
      </View>
      <FlatList
        data={clientes}
        renderItem={({item}) => <DatosCrudCliente item={item} navigation={navigation} obtenerClientes={obtenerClientes}/>}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DADADA",
    paddingHorizontal: 20,
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
    flexDirection: "row",
  },
  btnNuevoText: {
    color: "blue",
    fontWeight: "bold",
    marginTop: 3.5,
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

export default CrudCliente;
