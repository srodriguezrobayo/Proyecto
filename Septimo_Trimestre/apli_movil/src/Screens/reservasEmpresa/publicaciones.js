import { StyleSheet, Text, View, TextInput, Pressable, Image, FlatList, SafeAreaView, ScrollView } from "react-native";
import React, { useEffect, useCallback, useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../Context/AuthContext";
import DatosPublicaciones from "./datosPublicaciones";


const Publicaciones = ({ navigation }) => {
  const [publicaciones, setPublicaciones] = useState([]);
  useEffect(() => {obtenerPublicaciones()}, [])
  const {id} = useContext(AuthContext);

  const obtenerPublicaciones = () => {
    var config = {
      method: "get",
      url: `http://10.0.2.2:9300/reservacion/empresa/${id}`,
    }
    axios(config)
    .then((response) => {
      setPublicaciones(response.data)
      console.log(response.data)
    })
    .catch(function(error){
      console.log(error);
    })
  }

  return (
    <SafeAreaView style={styles.container}>
        <View>
            <Text style={styles.titulo}>Publicaciones</Text>
            <Text style={styles.subtitulo}>Historial de publicaciones</Text>
            <Text style={styles.textBold}>Formato: Id / Fecha / Personas / Valor / Estado</Text>
            <Text/>
        </View>
        <View>
          <Pressable style={styles.btnAc} onPress={() => obtenerPublicaciones()}>
            <Text style={styles.btnAcText}>Actualizar</Text>
          </Pressable>
        </View>
        <FlatList
        data={publicaciones}
        renderItem={({ item }) => (
          <View>
            <DatosPublicaciones item={item} navigation={navigation} />
          </View>
        )}
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
  titulo: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
  },
  subtitulo: {
    fontSize: 14,
    color: "#808080",
    marginTop: 10,
  },
  btn: {
    backgroundColor: "green",
    paddingHorizontal: 6,
    paddingVertical: 10,
    borderRadius: 6,
  },
  btnAc: {
    marginVertical: 10,
    backgroundColor: "#ffffff",
    width: 70,
    height: 20,
    borderRadius: 50,
    elevation: 10,
    shadowColor: "black",
  },
  btnAcText: {
    textAlign: "center",
  },
});

export default Publicaciones;
