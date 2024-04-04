import { StyleSheet, Text, View, TextInput, Pressable, Image, FlatList } from "react-native";
import React, { useEffect, useCallback, useContext, useState } from "react";
import axios from "axios";
import { SafeAreaView } from "react-native-safe-area-context";
import DatosCrudEmpresa from "./datosCrudEmpresa";


const CrudEmpresa = ({ navigation }) => {
  const [Empresas, setEmpresas] = useState([]);
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
      <View style={styles.btnsUp}>
      
        <Pressable style={styles.btnNuevo} onPress={()=>navigation.navigate("AgregarEmpresa")}>
            <Text style={styles.btnNuevoText}>Nuevo</Text>
        </Pressable>
      </View>
      <View style={styles.header}>
        <Text style={styles.titulo}>Tabla Empresas</Text>
      </View>
      <FlatList
        data={Empresas}
        renderItem={({item}) => <DatosCrudEmpresa item={item} navigation={navigation} obtenerEmpresas={obtenerEmpresas}/>}
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

export default CrudEmpresa;
