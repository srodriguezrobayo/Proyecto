import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Pressable, ScrollView, Modal, Image } from "react-native";
import axios from "axios";


const RegistroEmpresa = ({ navigation }) => {

  const [NitEmpresa, setNitEmpresa] = useState("");
  const [Nombre, setNombre] = useState("");
  const [Telefono, setTelefono] = useState("");
  const [Ciudad, setCiudad] = useState("");
  const [Correo, setCorreo] = useState("");
  const [Contraseña, setContraseña] = useState("");

  const registrarEmpresa = () => {
    var config = {
      method: "post",
      url: "http://10.0.2.2:9300/empresa/registro",
      data: {
        Nit_Empresa: NitEmpresa,
        Nombre_empresa: Nombre,
        Correoelectronico_empresa: Correo,
        Password_empresa: Contraseña,
        Desc_empresa: "Desc",
        Telefono_empresa: Telefono,
        Ciudad_id_Ciudad: Ciudad,
        Foto_empresa: "Foto",
      }
    }
    axios(config)
    .then((response) => {
      // Alert.alert("Registro", "Se ha registrado exitosamente"), [
      //   {
      //     text: "Listo",
      //     onPress: () => {
      //       setModalLogin(!modalLogin)
      //     }
      //   }
      // ]
      console.log(response.data);
      navigation.navigate("LoginEmpresa")
    })
    .catch(function(error){
      console.log(error);
    })
  }

  return (
      <View style={styles.container}>
        <Pressable 
        style={styles.btnCancelar}
        onPress={()=>navigation.navigate("Bienvenida")}>
          <Text style={styles.btntextCancelar}>{"<"}</Text>
        </Pressable>
        <Text style={styles.titulo}>Registrarse</Text>
        <Text style={styles.subtitulo}>Ingresa tus datos para continuar</Text>
        <Text></Text>

        <ScrollView>
        <TextInput
            placeholder="Nit Empresa"
            style={styles.input}
            value={NitEmpresa}
            onChangeText={setNitEmpresa}
          />
          <TextInput
            placeholder="Nombre"
            style={styles.input}
            value={Nombre}
            onChangeText={setNombre}
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
          <TextInput
            placeholder="Correo electrónico"
            style={styles.input}
            value={Correo}
            onChangeText={setCorreo}
          />
          <TextInput
            placeholder="Contraseña"
            secureTextEntry={true}
            style={styles.input}
            value={Contraseña}
            onChangeText={setContraseña}
          />

          <View style={styles.botones}>
            <Pressable style={styles.btn} onPress={registrarEmpresa}>
              <Text style={styles.btntext}>REGISTRARSE</Text>
            </Pressable>
            
            <Text style={styles.texto}>
              Ya tienes una cuenta?
              <Text style={styles.textoBold} onPress={() => navigation.navigate("LoginEmpresa")}>
                Inicia Sesión
              </Text>
            </Text>
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

export default RegistroEmpresa;
