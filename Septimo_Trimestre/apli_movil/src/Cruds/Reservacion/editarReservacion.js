import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Pressable, ScrollView, Image, Alert } from "react-native";
import axios from "axios";

const EditarReservacion = ({ navigation, route }) => {
  let Id_ReservacionParams = route.params?.Id_Reservacion 

  const [IdReserva, setIdReserva] = useState(null);
  const [servicio, setservicio] = useState("");
  const [fecha, setfecha] = useState("");
  const [hora, sethora] = useState("");
  const [lugar, setlugar] = useState("");
  const [cantidad, setcantidad] = useState("");
  const [condiciones, setcondiciones] = useState("");
  const [Nit, setNit] = useState("");
  const [cliente, setcliente] = useState("");
  const [valor, setvalor] = useState("");
  const [estatus, setestatus] = useState("");
  const [empleado, setempleado] = useState("");


  const editarReservaciones = () => {
    var config = {
      method: "put",
      url: `http://10.0.2.2:9300/reservacion/actualizar/${Id_ReservacionParams}`,
      data: {
        Id_Reservacion:IdReserva,	
        Servicio_idServicio:servicio,	
        Fecha_reservacion:fecha,	
        Hora_reservacion:hora,	
        Lugar_reservacion_idLugar_reservacion:lugar,	
        Cant_person:cantidad,	
        Condiciones:condiciones,	
        Empresa_Nit_Empresa:Nit,	
        Cliente_id_Cliente: cliente,	
        Valor: valor,	
        Estatus: estatus,	
        Empleados_id_empleado: empleado,
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
      navigation.navigate("TabEmpresa")
    })
    .catch(function(error){
      console.log(error);
    })
  }

  useEffect(() => {
    var config = {
        method: "get",
        url: `http://10.0.2.2:9300/reservacion/${Id_ReservacionParams}`,
      }
      axios(config)
      .then((response) => {
        setIdReserva((response.data[0].Id_Reservacion).toString())
        setservicio(response.data[0].Servicio_idServicio)
        setfecha(response.data[0].Fecha_reservacion)
        sethora(response.data[0].Hora_reservacion)
        setlugar(response.data[0].Lugar_reservacion_idLugar_reservacion)
        setcantidad(response.data[0].Cant_person)
        setcondiciones(response.data[0].Condiciones)
        setNit(response.data[0].Empresa_Nit_Empresa)
        setcliente(response.data[0].Cliente_id_Cliente)
        setvalor(response.data[0].Valor)
        setestatus(response.data[0].Estatus)
        setempleado(response.data[0].Empleados_id_empleado)
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
            value={IdReserva}
            onChangeText={setIdReserva}
          />

        <TextInput
            placeholder="Servicio"
            style={styles.input}
            value={servicio}
            onChangeText={setservicio}
          />

            <TextInput
            placeholder="Fecha"
            style={styles.input}
            value={fecha}
            onChangeText={setfecha}
          />

          <TextInput
            placeholder="Hora"
            style={styles.input}
            value={hora}
            onChangeText={sethora}
          />
          <TextInput
            placeholder="Lugar"
            style={styles.input}
            value={lugar}
            onChangeText={setlugar}
          />
          <TextInput
            placeholder="Cantidad Personas"
            style={styles.input}
            value={cantidad}
            onChangeText={setcantidad}
          />
          <TextInput
            placeholder="condiciones"
            style={styles.input}
            value={condiciones}
            onChangeText={setcondiciones}
          />
          <TextInput
            placeholder="Empresa"
            style={styles.input}
            value={Nit}
            onChangeText={setNit}
          />
          <TextInput
            placeholder="Cliente"
            style={styles.input}
            value={cliente}
            onChangeText={setcliente}
          />
          <TextInput
            placeholder="Valor"
            style={styles.input}
            value={valor}
            onChangeText={setvalor}
          />
          <TextInput
            placeholder="Estatus"
            style={styles.input}
            value={estatus}
            onChangeText={setestatus}
          />
          <TextInput
            placeholder="Empleado"
            style={styles.input}
            value={empleado}
            onChangeText={setempleado}
          />

          <View style={styles.botones}>
            <Pressable style={styles.btn} onPress={editarReservaciones}>
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

export default EditarReservacion;
