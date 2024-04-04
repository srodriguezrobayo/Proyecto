import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Pressable, ScrollView, Image, Alert } from "react-native";
import axios from "axios";

const EditarLugarReservacion = ({ navigation, route }) => {
  let ID_lugreservParams = route.params?.ID_lugreserv

  const [IdLugar, setIdLugar] = useState(null);
  const [Direccion, setDireccion] = useState("");
  const [Nombre, setNombre] = useState("");
  const [Ciudad, setCiudad] = useState("");

  const editarLugares = () => {
    var config = {
      method: "put",
      url: `http://10.0.2.2:9300/lugar_reserva/actualizar/${ID_lugreservParams}`,
      data: {
        ID_lugreserv: IdLugar,	
        Direccion_lugarreserv: Direccion,	
        Nom_lugreserv: Nombre,	
        Ciudad_id_Ciudad: Ciudad,
      }
    }
    axios(config)
    .then((response) => {
      Alert.alert("Datos", "Se ha editado el dato"), [
        {
          text: "Listo",
        }
      ]
      console.log(response.data)
      navigation.navigate("CrudLugarReserva")
    })
    .catch(function(error){
      console.log(error);
    })
  }

  useEffect(() => {
    var config = {
        method: "get",
        url: `http://10.0.2.2:9300/lugar_reserva/${ID_lugreservParams}`,
      }
      axios(config)
      .then((response) => {
        setIdLugar((response.data[0].ID_lugreserv).toString())
        setDireccion(response.data[0].Direccion_lugarreserv)
        setNombre(response.data[0].Nom_lugreserv)
        setCiudad(response.data[0].Ciudad_id_Ciudad)
      })
      .catch(function(error){
        console.log(error);
      })
  }, [])


  return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Editar dato</Text>
        <Text></Text>

        <ScrollView>
          <TextInput
            placeholder="ID"
            style={styles.input}
            value={IdLugar}
            onChangeText={setIdLugar}
          />
          <TextInput
            placeholder="Direccion"
            style={styles.input}
            value={Direccion}
            onChangeText={setDireccion}
          />
          
          <TextInput
            placeholder="Nombre"
            style={styles.input}
            value={Nombre}
            onChangeText={setNombre}
          />
          
          <TextInput
            placeholder="Ciudad"
            style={styles.input}
            value={Ciudad}
            onChangeText={setCiudad}
          />



          <View style={styles.botones}>
            <Pressable style={styles.btn} onPress={editarLugares}>
              <Text style={styles.btntext}>EDITAR</Text>
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

export default EditarLugarReservacion;
