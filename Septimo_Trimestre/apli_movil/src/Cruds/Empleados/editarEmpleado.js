import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Pressable, ScrollView, Image, Alert } from "react-native";
import axios from "axios";

const EditarEmpleado = ({ navigation, route }) => {
  let id_empleadoParams = route.params?.id_empleado 


  const [IdEmpleado, setIdEmpleado] = useState(null);
  const [Nombre, setNombre] = useState("");
  const [Correo, setCorreo] = useState("");
  const [Password, setPassword] = useState("");
  const [TipoUsuario, setTipoUsuario] = useState("");
  const [Telefono, setTelefono] = useState("");
  const [Genero, setGenero] = useState("");

  const editarEmpleados = () => {
    var config = {
      method: "put",
      url: `http://10.0.2.2:9300/empleado/actualizar/${id_empleadoParams}`,
      data: {
        id_empleado: IdEmpleado,
        Nom_empleado: Nombre,
        Correo_elec_admin: Correo,
        Password_empleado: Password,
        Tipo_usuario_idTipo_usuario: TipoUsuario,
        Telefono_empleado: Telefono,
        Genero_idGenero: Genero,
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
      navigation.navigate("CrudEmpleado")
    })
    .catch(function(error){
      console.log(error);
    })
  }

  useEffect(() => {
    var config = {
        method: "get",
        url: `http://10.0.2.2:9300/empleado/${id_empleadoParams}`,
      }
      axios(config)
      .then((response) => {
        setIdEmpleado((response.data[0].id_empleado).toString())
        setNombre(response.data[0].Nom_empleado)
        setCorreo(response.data[0].Correo_elec_admin)
        setPassword(response.data[0].Password_empleado)
        setTipoUsuario(response.data[0].Tipo_usuario_idTipo_usuario)
        setTelefono(response.data[0].Telefono_empleado)
        setGenero(response.data[0].Genero_idGenero)
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
            value={IdEmpleado}
            onChangeText={setIdEmpleado}
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
            placeholder="tipo_usuario"
            style={styles.input}
            value={TipoUsuario}
            onChangeText={setTipoUsuario}
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

          

          

          <View style={styles.botones}>
            <Pressable style={styles.btn} onPress={editarEmpleados}>
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

export default EditarEmpleado;
