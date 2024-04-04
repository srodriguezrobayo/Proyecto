import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Pressable, ScrollView, Image, Alert } from "react-native";
import axios from "axios";

const EditarCiudad = ({ navigation, route }) => {
  let id_CiudadParams = route.params?.id_Ciudad 

  const [IdCiudad, setIdCiudad] = useState(null);
  const [Nombre, setNombre] = useState("");
  const [Depa, setDepa] = useState("");

  const editarCiudades = () => {
    var config = {
      method: "put",
      url: `http://10.0.2.2:9300/ciudad/actualizar/${idGeneroParams}`,
      data: {
        id_Ciudad:IdCiudad,
        nombre_ciudad: Nombre,
        Departamento_idDepartamento: Depa,
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
      navigation.navigate("CrudCiudad")
    })
    .catch(function(error){
      console.log(error);
    })
  }

  useEffect(() => {
    var config = {
        method: "get",
        url: `http://10.0.2.2:9300/ciudad/${id_CiudadParams}`,
      }
      axios(config)
      .then((response) => {
        setIdCiudad((response.data[0].id_Ciudad).toString())
        setNombre(response.data[0].nombre_ciudad)
        setDepa(response.data[0].Departamento_idDepartamento)
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
            value={IdCiudad}
            onChangeText={setIdCiudad}
          />
          <TextInput
            placeholder="Nombre"
            style={styles.input}
            value={Nombre}
            onChangeText={setNombre}
          />
          
          <TextInput
            placeholder="Departamento"
            style={styles.input}
            value={Depa}
            onChangeText={setDepa}
          />

          <View style={styles.botones}>
            <Pressable style={styles.btn} onPress={editarCiudades}>
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

export default EditarCiudad;