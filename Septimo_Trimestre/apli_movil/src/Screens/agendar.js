import { StyleSheet, Text, View, TextInput, Pressable, Image, Alert, Modal } from "react-native";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Picker } from "@react-native-picker/picker";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const Agendar = ({modalAgendar, setModalAgendar}) => {

  const [idReserva, setIdReserva] = useState(null);
  const [servicio, setServicio] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [lugarReserva, setlugarReserva] = useState("");
  const [cantPersonas, setCantPersonas] = useState("");
  const [condiciones, setCondiciones] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [precio, setPrecio] = useState("");
  const [estatus, setEstatus] = useState("");
  const [Servicios, setServicios] = useState([]);
  const [Lugares, setLugares] = useState([]);

  useEffect(() => {
    axios.get('http://10.0.2.2:9300/servicio')
      .then(response => setServicios(response.data))
      .catch(error => console.error('Error:', error));

    axios.get('http://10.0.2.2:9300/lugar_reserva')
      .then(response => setLugares(response.data))
      .catch(error => console.error('Error:', error));
  }, []);

  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [Hora,setSelectedTime]=useState('Hora')

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleTimeConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    const dt = new Date(date);
    const x=dt.toLocaleTimeString();
    console.log(x);
    setSelectedTime(x);
    hideTimePicker();
  };
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
        Cant_person: cantPersonas,
        Condiciones: condiciones,
        Empresa_Nit_Empresa: empresa, 
        Cliente_id_Cliente: 5, 
        Valor: precio, 
        Estatus: estatus,
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
    <Modal animationType="slide" visible={modalAgendar}>
      <View style={styles.container}>
      <Pressable 
        style={styles.btnCancelar}
        onPress={()=>setModalAgendar(!modalAgendar)}>
          <Text style={styles.btntextCancelar}>{"Volver"}</Text>
      </Pressable>  
      <Text style={styles.titulop}>Agendar</Text>
        <View style={styles.form}>
          <View>
            <Text style={styles.inputTitle}>Servicio  /  Lugar de Reserva</Text>
            <View style={styles.input2}>
              <Picker
                selectedValue={servicio}
                style={styles.inputShared1}
                onValueChange={(itemValue) => setServicio(itemValue)}
              >
                <Picker.Item label="Seleccione Servicio" value="" />
                {Servicios.map((servicio) =>(
                  <Picker.Item key={servicio.idServicio} label={servicio.Nombre_servicio} value={servicio.idServicio} />
                ))}
              </Picker>
              <Picker
                selectedValue={lugarReserva}
                style={styles.inputShared1}
                onValueChange={(itemValue) => setlugarReserva(itemValue)}
              >
                <Picker.Item label="Seleccione Lugar" value="" />
                {Lugares.map((lugarReserva) =>(
                  <Picker.Item key={lugarReserva.ID_lugreserv} label={lugarReserva.Nom_lugreserv} value={lugarReserva.ID_lugreserv} />
                ))}
              </Picker>
            </View>
          </View>
          <View>
          <Text style={styles.inputTitle}>Fecha                                        Hora</Text>
            <View style={styles.input2}>
              <TextInput
                placeholder="Fecha"
                style={styles.inputShared}
                marginRight={3}
                value={fecha}
                onChangeText={setFecha}
              />
              <Pressable style={styles.inputShared} onPress={() => {showTimePicker();}}>
                  <Text style={styles.textpr}>{Hora}</Text>
              </Pressable> 
              <DateTimePickerModal
                  isVisible={isTimePickerVisible}
                  mode="time"
                  onConfirm={handleTimeConfirm}
                  onCancel={hideTimePicker}
               />
            </View>
          </View>
          <View>
          <Text style={styles.inputTitle}>Cant. Personas  /  Condiciones</Text>
            <View style={styles.input2}>
              <TextInput
                placeholder="Cant. Personas"
                style={styles.inputShared}
                marginRight={3}
                value={cantPersonas}
                onChangeText={setCantPersonas}
              />
              <TextInput
                placeholder="Condiciones"
                style={styles.inputShared}
                marginLeft={3}
                value={condiciones}
                onChangeText={setCondiciones}
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
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DADADA",
    paddingTop: 20,
    padding: 20,
  },
  titulop: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    marginTop: 25,
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
  btnCancelar: {
    marginVertical: 10,
    backgroundColor: "#ffffff",
    width: 50,
    height: 20,
    borderRadius: 50,
    elevation: 10,
    shadowColor: "black",
  },
  btntextCancelar: {
    textAlign: "center",
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
    marginBottom: 10,
    paddingLeft: 15,
    elevation: 10,
    shadowColor: "black",
    fontSize: 16,
  },
  inputShared1: {
    width: '49%',
    height: 52,
    backgroundColor: "#C7F5C7",
    marginBottom: 10,
    paddingLeft: 15,
    elevation: 10,
    shadowColor: "black",
    color: "#666666",
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
  textpr:{
    color: '#666',
    paddingTop: 17,
    fontSize: 15.5,
  },
});

export default Agendar;
