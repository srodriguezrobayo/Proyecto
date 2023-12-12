import { StyleSheet, Text, View, TextInput, Pressable, Image, FlatList } from "react-native";
import React, { useEffect, useCallback, useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";
import DatosPerfilCliente from "./datosPerfilCliente";


const Perfilusuario = ({ navigation }) => {
  const [cliente, setCliente] = useState([]);
  useEffect(() => {obtenerCliente()}, [])
  const {id} = useContext(AuthContext);

  const obtenerCliente = () => {
    var config = {
      method: "get",
      url: `http://10.0.2.2:9300/obtenerCliente/${id}`,
    }
    axios(config)
    .then((response) => {
      setCliente(response.data)
      console.log(response.data)
    })
    .catch(function(error){
      console.log(error);
    })
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={cliente}
        keyExtractor={(item) => item.id_Cliente}
        renderItem={({item}) => <DatosPerfilCliente item={item} navigation={navigation}/>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingTop: 40,
    padding: 20,
  },
});

export default Perfilusuario;
