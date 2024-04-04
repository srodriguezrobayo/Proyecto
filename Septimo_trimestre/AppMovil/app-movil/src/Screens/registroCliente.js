import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Pressable, ScrollView, Alert, TouchableOpacity } from "react-native";
import axios from "axios";
import { Picker } from "@react-native-picker/picker";
import { FontAwesome, Feather } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';


const RegistroCliente = ({ navigation }) => {

  const navegar = useNavigation();
  

  const [IdCliente, setId] = useState(null);
  const [Nombre, setNombre] = useState("");
  const [Telefono, setTelefono] = useState("");
  const [Ciudad, setCiudad] = useState("");
  const [Genero, setGenero] = useState("");
  const [Correo, setCorreo] = useState("");
  const [Contraseña, setContraseña] = useState("");
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

  const registrarCliente = () => {
    var config = {
      method: "post",
      url: "http://10.0.2.2:9300/cliente/registro",
      data: {
        id_Cliente: IdCliente,
        Nombre_cliente: Nombre,
        Correoelectronico_cliente: Correo,
        Password_cliente: Contraseña,
        Telefono_cliente: Telefono,
        Genero_idGenero: Genero,
        Ciudad_id_Ciudad: Ciudad,
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
      navigation.navigate("LoginCliente")
    })
    .catch(function(error){
      console.log(error);
    })
  }

  return (
      <View style={styles.container}>
        <TouchableOpacity style={{marginLeft: -20, paddingBottom: 20}} onPress={() => navegar.goBack()}>
          <Feather name="chevron-left" size={24}/>
        </TouchableOpacity>
        <Text style={styles.titulo}>Registrarse</Text>
        <Text style={styles.subtitulo}>Ingresa tus datos para continuar</Text>
        <Text></Text>

        <ScrollView>
          <TextInput
            placeholder="Nombre"
            style={styles.inputInicio}
            value={Nombre}
            onChangeText={setNombre}
          />
          <TextInput
            placeholder="Telefono"
            style={styles.input}
            value={Telefono}
            onChangeText={setTelefono}
          />
          <Picker
            selectedValue={Ciudad}
            style={styles.inputS}
            onValueChange={(itemValue) => setCiudad(itemValue)}
          >
            <Picker.Item label="Seleccione Ciudad" value="" />
            {Ciudades.map((Ciudad) =>(
              <Picker.Item key={Ciudad.id_Ciudad} label={Ciudad.nombre_ciudad} value={Ciudad.id_Ciudad} />
            ))}
          </Picker>
          <Picker
            selectedValue={Genero}
            style={styles.inputS}
            onValueChange={(itemValue) => setGenero(itemValue)}
          >
            <Picker.Item label="Seleccione Género" value="" />
            {Generos.map((Genero) =>(
              <Picker.Item key={Genero.idGenero} label={Genero.Desc_genero} value={Genero.idGenero} />
            ))}
          </Picker>
          <TextInput
            placeholder="Correo electrónico"
            style={styles.input}
            value={Correo}
            onChangeText={setCorreo}
          />
          <TextInput
            placeholder="Contraseña"
            secureTextEntry={true}
            style={styles.inputFinal}
            value={Contraseña}
            onChangeText={setContraseña}
          />

          <View style={styles.botones}>
            <Pressable style={styles.btn} onPress={registrarCliente}>
              <Text style={styles.btntext}>REGISTRARSE</Text>
            </Pressable>
            
            <Text style={styles.texto}>
              Ya tienes una cuenta?
              <Text style={styles.textoBold} onPress={() => navigation.navigate("LoginCliente")}>
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
    marginBottom: 4,
    fontSize: 16,
    paddingLeft: 15,
    color: "#666666"
  },
  inputS: {
    width: '100%',
    height: 52,
    borderColor: "#C7F5C7",
    backgroundColor: "#C7F5C7",
    marginBottom: 4,
    color: "#666666",
  },
  inputInicio: {
    width: '100%',
    height: 52,
    borderColor: "#C7F5C7",
    backgroundColor: "#C7F5C7",
    marginBottom: 4,
    fontSize: 16,
    paddingLeft: 15,
    color: "#666666",
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13,
  },
  inputFinal: {
    width: '100%',
    height: 52,
    borderColor: "#C7F5C7",
    backgroundColor: "#C7F5C7",
    marginBottom: 4,
    fontSize: 16,
    paddingLeft: 15,
    color: "#666666",
    borderBottomLeftRadius: 13,
    borderBottomRightRadius: 13,
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
  texto: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 40,
  },
  textoBold: {
    fontWeight: "bold",
  },
  picker: {
    borderRadius: 20,
  }
});

export default RegistroCliente;
