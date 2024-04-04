import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Pressable, ScrollView, Image, Alert } from "react-native";
import axios from "axios";

const EditarGenero = ({ navigation, route }) => {
  let idGeneroParams = route.params?.idGenero 

  const [IdGenero, setIdGenero] = useState(null);
  const [Desc, setDesc] = useState("");

  const editarGeneros = () => {
    var config = {
      method: "put",
      url: `http://10.0.2.2:9300/genero/actualizar/${idGeneroParams}`,
      data: {
        idGenero: IdGenero,
        Desc_genero: Desc,
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
      navigation.navigate("CrudGenero")
    })
    .catch(function(error){
      console.log(error);
    })
  }

  useEffect(() => {
    var config = {
        method: "get",
        url: `http://10.0.2.2:9300/genero/${idGeneroParams}`,
      }
      axios(config)
      .then((response) => {
        setIdGenero((response.data[0].idGenero).toString())
        setDesc(response.data[0].Desc_genero)
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
            value={IdGenero}
            onChangeText={setIdGenero}
          />
          <TextInput
            placeholder="Descripción"
            style={styles.input}
            value={Desc}
            onChangeText={setDesc}
          />

          <View style={styles.botones}>
            <Pressable style={styles.btn} onPress={editarGeneros}>
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

export default EditarGenero;
