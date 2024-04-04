import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Pressable, ScrollView, Image, Alert } from "react-native";
import axios from "axios";

const AgregarEmpresa = ({ navigation }) => {

  const [Nit, setNit] = useState(null);
  const [Nombre, setNombre] = useState("");
  const [Correo, setCorreo] = useState("");
  const [Password, setPassword] = useState("");
  const [Desc, setDesc] = useState("");
  const [Telefono, setTelefono] = useState("");
  const [Ciudad, setCiudad] = useState("");
  const [Foto, setFoto] = useState("Aun no se puede");


  const agregarEmpresas = () => {
    var config = {
      method: "post",
      url: `http://10.0.2.2:9300/empresa/agregar`,
      data: {
        Nit_Empresa:Nit,
        Nombre_empresa:Nombre,
        Correoelectronico_empresa:Correo,
        Password_empresa:Password,
        Desc_empresa:Desc,
        Telefono_empresa:Telefono,
        Ciudad_id_Ciudad:Ciudad,
        Foto_empresa:Foto,
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
      navigation.navigate("CrudEmpresa")
    })
    .catch(function(error){
      console.log(error);
    })
  }

  return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Agregar nuevo dato</Text>
        <Text></Text>
        

        <ScrollView>
        <TextInput
            placeholder="NIT"
            style={styles.input}
            value={Nit}
            onChangeText={setNit}
          />
        <TextInput
            placeholder="Nombre"
            style={styles.input}
            value={Nombre}
            onChangeText={setNombre}
          />
        <TextInput
            placeholder="Correo"
            style={styles.input}
            value={Correo}
            onChangeText={setCorreo}
          />
        <TextInput
            placeholder="Password"
            style={styles.input}
            value={Password}
            onChangeText={setPassword}
          />
        <TextInput
            placeholder="Descripción"
            style={styles.input}
            value={Desc}
            onChangeText={setDesc}
          />
        <TextInput
            placeholder="Telefono"
            style={styles.input}
            value={Telefono}
            onChangeText={setTelefono}
          />
        <TextInput
            placeholder="Ciudad"
            style={styles.input}
            value={Ciudad}
            onChangeText={setCiudad}
          />


          <View style={styles.botones}>
            <Pressable style={styles.btn} onPress={agregarEmpresas}>
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

export default AgregarEmpresa;
