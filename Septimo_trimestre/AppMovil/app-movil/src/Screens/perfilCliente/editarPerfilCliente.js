import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Pressable, ScrollView, Image, Alert, TouchableOpacity } from "react-native";
import axios from "axios";
import { Picker } from "@react-native-picker/picker";
import { FontAwesome, Feather } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

const EditarPerfilCliente = ({ navigation, route }) => {
  let idClienteParams = route.params?.id_Cliente 
  let Password_clienteBody = route.body?.Password_cliente

  const navegar = useNavigation();

  const [IdCliente, setIdCliente] = useState(null);
  const [Nombre, setNombre] = useState("");
  const [Correo, setCorreo] = useState("");
  const [Telefono, setTelefono] = useState("");
  const [Contraseña, setContraseña] = useState(Password_clienteBody);
  const [Genero, setGenero] = useState("");
  const [Ciudad, setCiudad] = useState("");
  const [Foto, setFoto] = useState("user.png");
  const [Generos, setGeneros] = useState([]);
  const [Ciudades, setCiudades] = useState([]);

  useEffect(() => {
    axios.get('http://10.0.2.2:9300/genero')
      .then(response => setGeneros(response.data))
      .catch(error => console.error('Error:', error));

    axios.get('http://10.0.2.2:9300/ciudad')
      .then(response => setCiudades(response.data))
      .catch(error => console.error('Error:', error));
  }, []);

  const editarClientes = () => {
    var config = {
      method: "put",
      url: `http://10.0.2.2:9300/cliente/actualizar/${idClienteParams}`,
      data: {
        id_Cliente: IdCliente,
        Nombre_cliente: Nombre,
        Correoelectronico_cliente: Correo,
        Telefono_cliente: Telefono,
        Password_cliente: Contraseña,
        Genero_idGenero: Genero,
        Ciudad_id_Ciudad: Ciudad,
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
      navigation.navigate("PerfilCliente")
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
        setFoto(response.data[0].Foto_cliente)
      })
      .catch(function(error){
        console.log(error);
      })
  }, [])
  
  return (
      <View style={styles.container}>
        <View>
          <TouchableOpacity style={{marginLeft: -20,}} onPress={() => navegar.goBack()}>
            <Feather name="chevron-left" size={24}/>
          </TouchableOpacity>
        </View>
        <View style={styles.image}>
          <Image style={styles.logo} source={{ uri: "https://i.pinimg.com/236x/23/40/8e/23408e565fc3f43454636fec27572d1f.jpg" }}/>
          <FontAwesome name="camera" size={20} style={styles.camera}/>
        </View>
        <View>
          <TextInput
            placeholder="Nombre"
            style={styles.inputInicio}
            value={Nombre}
            onChangeText={setNombre}
          />
          <TextInput
            placeholder="Correo"
            style={styles.input}
            value={Correo}
            onChangeText={setCorreo}
          />
          <Picker
            selectedValue={Genero}
            style={styles.input}
            onValueChange={(itemValue) => setGenero(itemValue)}
          >
            <Picker.Item label="Seleccione Género" value="" />
            {Generos.map((Genero) =>(
              <Picker.Item key={Genero.idGenero} label={Genero.Desc_genero} value={Genero.idGenero} />
            ))}
          </Picker>
          <Picker
            selectedValue={Ciudad}
            style={styles.input}
            onValueChange={(itemValue) => setCiudad(itemValue)}
          >
            <Picker.Item label="Seleccione Ciudad" value="" />
            {Ciudades.map((Ciudad) =>(
              <Picker.Item key={Ciudad.id_Ciudad} label={Ciudad.nombre_ciudad} value={Ciudad.id_Ciudad} />
            ))}
          </Picker>
          <TextInput
            placeholder="Telefono"
            style={styles.inputFinal}
            value={Telefono}
            onChangeText={setTelefono}
          />
          <View style={styles.botones}>
            <Pressable style={styles.btn} onPress={editarClientes}>
              <Text style={styles.btntext}>ACTUALIZAR</Text>
            </Pressable>
          </View>
        </View>
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
  image: {
    marginBottom: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  camera: {
    marginLeft: 80,
    marginTop: -20,
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 120,
    borderWidth: 2,
    borderColor: 'green',
    marginTop: 50,
  },
  input: {
    width: '100%',
    height: 52,
    borderColor: "#C7F5C7",
    backgroundColor: "#C7F5C7",
    marginBottom: 4,
    paddingLeft: 17,
    color: "#666666",
    fontSize: 16,
  },
  inputInicio: {
    width: '100%',
    height: 52,
    borderColor: "#C7F5C7",
    backgroundColor: "#C7F5C7",
    marginBottom: 4,
    paddingLeft: 17,
    color: "#666666",
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13,
    fontSize: 16,
  },
  inputFinal: {
    width: '100%',
    height: 52,
    borderColor: "#C7F5C7",
    backgroundColor: "#C7F5C7",
    paddingLeft: 17,
    marginBottom: 4,
    color: "#666666",
    borderBottomLeftRadius: 13,
    borderBottomRightRadius: 13,
    fontSize: 16,
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
});

export default EditarPerfilCliente;
