import { StyleSheet, Text, View, TextInput, Pressable, Image, Alert } from "react-native";
import axios from "axios";
import React, { useState } from "react";

const Agendar = ({ navigation }) => {

  const [idReserva, setIdReserva] = useState(null);
  const [servicio, setServicio] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [lugarReserva, setlugarReserva] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [precio, setPrecio] = useState("");

  const registrarReserva = () => {
    var config = {
      method: "post",
      url: "http://10.0.2.2:9300/reserva",
      data: {
        Id_Reservacion: idReserva,
        Servicio_idServicio: servicio, 
        Fecha_reservacion: fecha, 
        Hora_reservacion: hora, 
        Lugar_reservacion_idLugar_reservacion: lugarReserva, 
        Empresa_Nit_Empresa: empresa, 
        Cliente_id_Cliente: 9003, 
        Valor: precio, 
        Empleados_id_empleado: 55,
      }
    }
    axios(config)
    .then((response) => {
      Alert.alert("Reservación", "Reservación exitosa"), [
        {
          text: "Listo",
        }
      ]
      console.log(response.data);
    })
    .catch(function(error){
      console.log(error);
    })
  }

  return (
    <View style={styles.container}>
    <Text style={styles.titulop}>Agendar</Text>
      <View style={styles.form}>
        <View>
          <Text style={styles.inputTitle}>Servicio  /  Lugar de Reserva</Text>
          <View style={styles.input2}>
            <TextInput
              placeholder="Servicio"
              style={styles.inputShared}
              marginRight={3}
              value={servicio}
              onChangeText={setServicio}
            />
            <TextInput
              placeholder="Lugar de Reserva"
              style={styles.inputShared}
              marginLeft={3}
              value={lugarReserva}
              onChangeText={setlugarReserva}
            />
          </View>
        </View>
        <View>
        <Text style={styles.inputTitle}>Fecha  /  Hora</Text>
          <View style={styles.input2}>
            <TextInput
              placeholder="Fecha"
              style={styles.inputShared}
              marginRight={3}
              value={fecha}
              onChangeText={setFecha}
            />
            <TextInput
              placeholder="Hora"
              style={styles.inputShared}
              marginLeft={3}
              value={hora}
              onChangeText={setHora}
            />
          </View>
        </View>
        <View>
        <Text style={styles.inputTitle}>Empresa  /  Valor de Reserva</Text>
          <View style={styles.input2}>
            <TextInput
              placeholder="Empresa"
              style={styles.inputShared}
              marginRight={3}
              value={empresa}
              onChangeText={setEmpresa}
            />
            <TextInput
              placeholder="Valor de Reserva"
              style={styles.inputShared}
              marginLeft={3}
              value={precio}
              onChangeText={setPrecio}
            />
          </View>
        </View>
        <Pressable style={styles.btn} onPress={registrarReserva}>
          <Text style={styles.btntext}>AGENDAR</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DADADA",
    paddingTop: 50,
    padding: 20,
  },
  titulop: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },
  form: {
    margin: 10,
    marginTop: 50,
  },
  btn: {
    backgroundColor: "#8AEB8A",
    color: "#ffffff",
    padding: 15,
    marginTop: 25,
    width: "100%",
    borderRadius: 10,
    elevation: 10,
    shadowColor: "black",
  },
  btntext:{
    textAlign: "center",
    color: "#ffffff",
    fontWeight: "bold",
  },
  input2: {
    flexDirection: "row",
    alignItems: "center",
  },
  inputShared: {
    width: '49%',
    height: 52,
    backgroundColor: "#C7F5C7",
    borderRadius: 13,
    marginBottom: 10,
    paddingLeft: 15,
    elevation: 10,
    shadowColor: "black",
  },
  inputTitle: {
    fontSize: 14,
    color: "#808080",
  },
  input: {
    width: '100%',
    height: 52,
    backgroundColor: "#C7F5C7",
    borderRadius: 13,
    marginBottom: 10,
    paddingLeft: 15,
  },
});

export default Agendar;
