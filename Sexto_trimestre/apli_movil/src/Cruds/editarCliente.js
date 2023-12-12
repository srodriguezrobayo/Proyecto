import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Pressable, ScrollView, Image, Alert } from "react-native";
import axios from "axios";

const EditarCliente = ({ navigation, route }) => {
  let idClienteParams = route.params?.id_Cliente 

  const [IdCliente, setIdCliente] = useState(null);
  const [Nombre, setNombre] = useState("");
  const [Correo, setCorreo] = useState("");
  const [Contraseña, setContraseña] = useState("");
  const [Telefono, setTelefono] = useState("");
  const [Genero, setGenero] = useState("");
  const [Ciudad, setCiudad] = useState("");
  const [TipoUsuario, setTipoUsuario] = useState("");
  const [Foto, setFoto] = useState("Aun no se puede");

  const editarClientes = () => {
    var config = {
      method: "put",
      url: `http://10.0.2.2:9300/cliente/actualizar/${idClienteParams}`,
      data: {
        id_Cliente: IdCliente,
        Nombre_cliente: Nombre,
        Correoelectronico_cliente: Correo,
        Password_cliente: Contraseña,
        Telefono_cliente: Telefono,
        Genero_idGenero: Genero,
        Ciudad_id_Ciudad: Ciudad,
        TipoUsuario_idTipo_usuario: TipoUsuario,
        Foto_cliente: Foto,
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
      navigation.navigate("CrudCliente")
    })
    .catch(function(error){
      console.log(error);
    })
  }

  useEffect(() => {
    var config = {
        method: "get",
        url: `http://10.0.2.2:9300/obtenerCliente/${idClienteParams}`,
      }
      axios(config)
      .then((response) => {
        setIdCliente((response.data[0].id_Cliente).toString())
        setNombre(response.data[0].Nombre_cliente)
        setCorreo(response.data[0].Correoelectronico_cliente)
        setContraseña(response.data[0].Password_cliente)
        setTelefono(response.data[0].Telefono_cliente)
        setGenero((response.data[0].Genero_idGenero).toString())
        setCiudad((response.data[0].Ciudad_id_Ciudad).toString())
        setTipoUsuario((response.data[0].TipoUsuario_idTipo_usuario).toString())
        setFoto(response.data[0].Foto_cliente)
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
            value={IdCliente}
            onChangeText={setIdCliente}
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
            placeholder="Contraseña"
            style={styles.input}
            value={Contraseña}
            onChangeText={setContraseña}
          />
          <TextInput
            placeholder="Telefono"
            style={styles.input}
            value={Telefono}
            onChangeText={setTelefono}
          />
          <TextInput
            placeholder="Genero"
            style={styles.input}
            value={Genero}
            onChangeText={setGenero}
          />
          <TextInput
            placeholder="Ciudad"
            style={styles.input}
            value={Ciudad}
            onChangeText={setCiudad}
          />
          <TextInput
            placeholder="Tipo Usuario"
            style={styles.input}
            value={TipoUsuario}
            onChangeText={setTipoUsuario}
          />

          <View style={styles.botones}>
            <Pressable style={styles.btn} onPress={editarClientes}>
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

export default EditarCliente;
