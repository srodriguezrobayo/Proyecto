import { StyleSheet, Text, View, TextInput, Pressable, Image, FlatList, SafeAreaView, ScrollView } from "react-native";
import React, { useEffect, useCallback, useContext, useState } from "react";
import axios from "axios";
import DatosReservas from "./datosReservas";
import { AuthContext } from "../../Context/AuthContext";


const Reservas = ({ navigation }) => {
  const [reservas, setReservas] = useState([]);
  useEffect(() => {obtenerReservas()}, [])
  const {id} = useContext(AuthContext);

  const obtenerReservas = () => {
    var config = {
      method: "get",
      url: `http://10.0.2.2:9300/reservacion/cliente/${id}`,
    }
    axios(config)
    .then((response) => {
      setReservas(response.data)
      console.log(response.data)
    })
    .catch(function(error){
      console.log(error);
    })
  }

  return (
    <SafeAreaView style={styles.container}>
          <View>
              <Text style={styles.titulo}>Reservas</Text>
              <Text style={styles.subtitulo}>Historial de reservas realizadas con exito</Text>
              <Text/>
          </View>
          <FlatList
              data={reservas}
              renderItem={({item}) => <DatosReservas item={item} navigation={navigation}/>}
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
});

export default Reservas;
