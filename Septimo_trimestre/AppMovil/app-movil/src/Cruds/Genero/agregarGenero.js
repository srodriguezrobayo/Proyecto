import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Pressable, ScrollView, TouchableOpacity, Alert } from "react-native";
import axios from "axios";
import { FontAwesome, Feather } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

const AgregarGenero = ({ navigation }) => {

  const [IdGenero, setIdGenero] = useState(null);
  const [Desc, setDesc] = useState("");

  const navegar = useNavigation();

  const agregarGeneros = () => {
    var config = {
      method: "post",
      url: `http://10.0.2.2:9300/genero/agregar`,
      data: {
        idGenero: IdGenero,
        Desc_genero: Desc,
      }
    }
    axios(config)
    .then((response) => {
      Alert.alert("Datos", "Se ha agregado el dato nuevo"), [
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

  return (
      <View style={styles.container}>
        <View>
          <TouchableOpacity style={{marginLeft: -20,}} onPress={() => navegar.goBack()}>
            <Feather name="chevron-left" size={24}/>
          </TouchableOpacity>
        </View>
        <Text style={styles.titulo}>Agregar nuevo dato</Text>
        <Text />

        <ScrollView>
          <TextInput
            placeholder="Descripción"
            style={styles.input}
            value={Desc}
            onChangeText={setDesc}
          />

          <View style={styles.botones}>
            <Pressable style={styles.btn} onPress={agregarGeneros}>
              <Text style={styles.btntext}>AGREGAR</Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    paddingTop: 40,
    padding: 30,
  },
  titulo: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "left",
    marginTop: 40,
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

export default AgregarGenero;
