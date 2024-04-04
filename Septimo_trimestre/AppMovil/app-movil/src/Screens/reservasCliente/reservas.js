import { StyleSheet, Text, View, TextInput, Pressable, Image, FlatList, SafeAreaView, ScrollView, RefreshControl } from "react-native";
import React, { useEffect, useContext, useState } from "react";
import axios from "axios";
import DatosReservas from "./datosReservas";
import { AuthContext } from "../../Context/AuthContext";


const Reservas = ({ navigation }) => {
  const [reservas, setReservas] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  useEffect(() => {obtenerReservas()}, [])
  const {id} = useContext(AuthContext);

  const obtenerReservas = () => {
    var config = {
      method: "get",
      url: `http://10.0.2.2:9300/reservacion/cliente/${id}`,
    }
    axios(config)
    .then((response) => {
      if (response.data === "No hay registros"){
        return (
          <SafeAreaView style={styles.container}>
            <View>
              <Text style={styles.titulo}>Reservas</Text>
              <Text style={styles.subtitulo}>
                Historial de reservas realizadas con éxito
              </Text>
              <Text />
              <Text>No hay reservas disponibles</Text>
            </View>
          </SafeAreaView>
        )
      } else{
        setReservas(response.data);
        console.log(response.data);
      }
      
    })
    .catch(function(error){
      console.log(error);
    })
  }

  const onRefresh = () => {
    obtenerReservas();
  };

  return (
    <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.titulo}>Reservas</Text>
          <Text style={styles.subtitulo}>
            Historial de reservas realizadas con éxito
          </Text>
          <Text />
        </View>
        <FlatList
          data={reservas}
          renderItem={({ item }) => <DatosReservas item={item} navigation={navigation} />}
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
    marginBottom: 80,
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
});

export default Reservas;
