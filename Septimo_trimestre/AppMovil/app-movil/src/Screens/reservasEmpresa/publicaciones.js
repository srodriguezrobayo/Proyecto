import { StyleSheet, Text, View, RefreshControl, Pressable, FlatList, SafeAreaView, ScrollView } from "react-native";
import React, { useEffect, useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../Context/AuthContext";
import DatosPublicaciones from "./datosPublicaciones";


const Publicaciones = ({ navigation }) => {
  const [publicaciones, setPublicaciones] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  useEffect(() => {obtenerPublicaciones()}, [])
  const {id} = useContext(AuthContext);
  
  const obtenerPublicaciones = () => {
    var config = {
      method: "get",
      url: `http://10.0.2.2:9300/reservacion/empresa/${id}`,
    }
    axios(config)
    .then((response) => {
      if (response.data === "No hay registros"){
        return (
          <SafeAreaView style={styles.container}>
            <View>
              <Text style={styles.titulo}>Reservas</Text>
              <Text style={styles.subtitulo}>
                Historial de reservas realizadas por los clientes
              </Text>
              <Text />
              <Text>No hay reservas disponibles</Text>
            </View>
          </SafeAreaView>
        )
      } else{
        setPublicaciones(response.data);
        console.log(response.data);
      }
    })
    .catch(function(error){
      console.log(error);
    })
  }

  const onRefresh = () => {
    obtenerPublicaciones();
  };

  return (
    <SafeAreaView style={styles.container}>
          <View>
              <Text style={styles.titulo}>Reservaciones</Text>
              <Text style={styles.subtitulo}>
                Historial de reservas realizadas por los clientes</Text>
              <Text/>
          </View>
          <View>
            <Text style={{fontWeight: 'bold'}}>Formato: Id / Fecha / Personas / Valor / Estado</Text>
          </View>
          <FlatList
          data={publicaciones}
          renderItem={({ item }) =>  <DatosPublicaciones item={item} navigation={navigation} />}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
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