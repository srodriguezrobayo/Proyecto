
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Pressable, ScrollView, Image, Alert } from "react-native";
import axios from "axios";


const EditarTipo_usuario = ({ navigation, route }) => {
  let idTipo_usuarioParams = route.params?.idTipo_usuario

  const [idTipo_usuario, setidTipo_usuario] = useState(null);
  const [ Nombre_t_usuario, setNombre_t_usuario] = useState("");
  const [estado, setestado] = useState("");
  const editarTipo_usuarios = () => {
    var config = {
      method: "put",
      url: `http://10.0.2.2:9300/tipo_usuario/actualizar/${idTipo_usuarioParams}`,
      data: {
        idTipo_usuario: idTipo_usuario,
        Nombre_t_usuario: Nombre_t_usuario,
        estado: estado,
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
      navigation.navigate("CrudTipo_usuario")
    })
    .catch(function(error){
      console.log(error);
    })
  }

  useEffect(() => {
    var config = {
        method: "get",
        url: `http://10.0.2.2:9300/tipo_usuario/${idTipo_usuarioParams}`,
      }
      axios(config)
      .then((response) => {
        setidTipo_usuario((response.data[0].idTipo_usuario).toString())
        setNombre_t_usuario(response.data[0].Nombre_t_usuario)
        setestado(response.data[0].estado)
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
            value={idTipo_usuario}
            onChangeText={setidTipo_usuario}
          />
          <TextInput
            placeholder="Nombre"
            style={styles.input}
            value={Nombre_t_usuario}
            onChangeText={setNombre_t_usuario}
          />
                    <TextInput
            placeholder="Estado"
            style={styles.input}
            value={estado}
            onChangeText={setestado}
          />

          <View style={styles.botones}>
            <Pressable style={styles.btn} onPress={editarTipo_usuarios}>
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

export default EditarTipo_usuario;



