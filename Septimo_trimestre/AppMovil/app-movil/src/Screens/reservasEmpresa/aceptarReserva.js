import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Pressable, ScrollView, Image, Alert } from "react-native";
import axios from "axios";

const AceptarReserva = ({ navigation, route }) => {
  let idReservaParams = route.params?.Id_Reservacion

  const [IdReserva, setIdReserva] = useState(null);
  const [Valor, setValor] = useState("");

  const aceptarReservas = () => {
    var config = {
      method: "put",
      url: `http://10.0.2.2:9300/reservacion/aceptar/${idReservaParams}`,
      data: {
        Id_Reservacion: IdReserva,
        Valor: Valor,
      }
    }
    axios(config)
    .then((response) => {
      Alert.alert("Reserva", "Se ha aceptado la reserva"), [
        {
          text: "Listo",
        }
      ]
      console.log(response.data)
      navigation.navigate("TabEmpresa")
    })
    .catch(function(error){
      console.log(error);
    })
  }

  useEffect(() => {
    var config = {
        method: "get",
        url: `http://10.0.2.2:9300/obtenerReserva/${idReservaParams}`,
      }
      axios(config)
      .then((response) => {
        setIdReserva((response.data[0].Id_Reservacion).toString())
        setValor(response.data[0].Valor)
      })
      .catch(function(error){
        console.log(error);
      })
  }, [])


  return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Aceptar Reserva</Text>
        <Text></Text>

        <ScrollView>
        <Text style={styles.subtitulo}>Indique un valor para esta reserva</Text>
        <Text></Text>
          <TextInput
            placeholder="Valor"
            style={styles.input}
            value={Valor}
            onChangeText={setValor}
          />

          <View style={styles.botones}>
            <Pressable style={styles.btn} onPress={aceptarReservas}>
              <Text style={styles.btntext}>ACEPTAR</Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingTop: 40,
    padding: 30,
  },
  titulo: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "left",
  },
  subtitulo: {
    fontSize: 17,
    textAlign: "left",
  },
  input: {
    width: '100%',
    height: 52,
    borderColor: "#C7F5C7",
    backgroundColor: "#C7F5C7",
    borderRadius: 13,
    marginBottom: 4,
    textAlign: "center",
  },
  btn: {
    backgroundColor: "#8AEB8A",
    color: "#ffffff",
    padding: 15,
    marginTop: 25,
    borderRadius: 10,
    width: "100%",
  },
  btntext:{
    textAlign: "center",
    color: "#ffffff",
    fontWeight: "bold",
  },
  btnCancelar: {
    marginVertical: 10,
    backgroundColor: "#DADADA",
    width: 20,
    height: 20,
    borderRadius: 50,
  },
  btntextCancelar: {
    textAlign: "center",
    fontWeight: "bold",
  },
  otro: {
    textAlign: "center",
    margin: 30,
    fontSize: 15,
  },
  fila: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 50,
    height: 50,
    marginHorizontal: 15,
  },
  logo1: {
    width: 68,
    height: 50,
  },
  texto: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 40,
  },
  textoBold: {
    fontWeight: "bold",
  },
});

export default AceptarReserva;
