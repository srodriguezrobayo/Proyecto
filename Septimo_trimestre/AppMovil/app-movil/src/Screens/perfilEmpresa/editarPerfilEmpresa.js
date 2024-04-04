import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Pressable, ScrollView, Image, Alert,TouchableOpacity } from "react-native";
import axios from "axios";
import { FontAwesome, Feather } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from '@react-navigation/native';

const EditarPerfilEmpresa = ({ navigation, route }) => {
  let idEmpresaParams = route.params?.Nit_Empresa
  let Password_empresaBody = route.body?.Password_empresa

  const navegar = useNavigation();

  const [IdEmpresa, setIdEmpresa] = useState(null);
  const [Nombre, setNombre] = useState("");
  const [Correo, setCorreo] = useState("");
  const [Telefono, setTelefono] = useState("");
  const [Contraseña, setContraseña] = useState(Password_empresaBody);
  const [Descripcion, setDescripcion] = useState("");
  const [Ciudad, setCiudad] = useState("");
  const [Foto, setFoto] = useState("user.png");
  const [Ciudades, setCiudades] = useState([]);

  useEffect(() => {
    axios.get('http://10.0.2.2:9300/ciudad')
      .then(response => setCiudades(response.data))
      .catch(error => console.error('Error:', error));
  }, []);

  const editarEmpresas = () => {
    var config = {
      method: "put",
      url: `http://10.0.2.2:9300/empresa/actualizar/${idEmpresaParams}`,
      data: {
        Nit_Empresa: IdEmpresa,
        Nombre_empresa: Nombre,
        Correoelectronico_empresa: Correo,
        Telefono_empresa: Telefono,
        Password_empresa: Contraseña,
        Desc_empresa: Descripcion,
        Ciudad_id_Ciudad: Ciudad,
        Foto_empresa: Foto,
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
      navigation.navigate("PerfilEmpresa")
    })
    .catch(function(error){
      console.log(error);
    })
  }

  useEffect(() => {
    var config = {
        method: "get",
        url: `http://10.0.2.2:9300/obtenerEmpresa/${idEmpresaParams}`,
      }
      axios(config)
      .then((response) => {
        setIdEmpresa((response.data[0].Nit_Empresa).toString())
        setNombre(response.data[0].Nombre_empresa)
        setCorreo(response.data[0].Correoelectronico_empresa)
        setContraseña(response.data[0].Password_empresa)
        setTelefono(response.data[0].Telefono_empresa)
        setDescripcion((response.data[0].Desc_empresa).toString())
        setCiudad((response.data[0].Ciudad_id_Ciudad).toString())
        setFoto(response.data[0].Foto_empresa)
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
        <Text style={styles.titulo}>Editar Perfil</Text>
        <Text></Text>
        
        <View style={styles.image}>
          <Image style={styles.logo} source={{ uri: "https://i.pinimg.com/236x/23/40/8e/23408e565fc3f43454636fec27572d1f.jpg" }}/>
          <FontAwesome name="camera" size={20} style={styles.camera}/>
        </View>
        <ScrollView>
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
          <TextInput
            placeholder="Telefono"
            style={styles.input}
            value={Telefono}
            onChangeText={setTelefono}
          />
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
            placeholder="Descripcion"
            style={styles.inputFinal}
            value={Descripcion}
            onChangeText={setDescripcion}
          />

          <View style={styles.botones}>
            <Pressable style={styles.btn} onPress={editarEmpresas}>
              <Text style={styles.btntext}>ACTUALIZAR</Text>
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
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
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
    marginBottom: 4,
    paddingLeft: 17,
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
  logo: {
    width: 120,
    height: 120,
    borderRadius: 120,
    borderWidth: 2,
    borderColor: 'green',
    marginTop: 50,
  },
  image: {
    marginTop:-19,
    marginBottom: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  camera: {
    marginLeft: 80,
    marginTop: -20,
  },
});

export default EditarPerfilEmpresa;
