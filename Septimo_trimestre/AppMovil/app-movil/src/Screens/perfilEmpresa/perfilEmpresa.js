import { StyleSheet, Text, View, TextInput, Pressable, Image, FlatList } from "react-native";
import React, { useEffect, useCallback, useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../Context/AuthContext";
import DatosPerfilEmpresa from "./datosPerfilEmpresa";


const PerfilEmpresa = ({ navigation }) => {
  const [empresa, setEmpresa] = useState([]);
  useEffect(() => {obtenerEmpresa()}, [])
  const {id} = useContext(AuthContext);

  const obtenerEmpresa = () => {
    var config = {
      method: "get",
      url: `http://10.0.2.2:9300/obtenerEmpresa/${id}`,
    }
    axios(config)
    .then((response) => {
      setEmpresa(response.data)
      console.log(response.data)
    })
    .catch(function(error){
      console.log(error);
    })
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={empresa}
        keyExtractor={(item) => item.Nit_Empresa}
        renderItem={({item}) => <DatosPerfilEmpresa item={item} navigation={navigation}/>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default PerfilEmpresa;