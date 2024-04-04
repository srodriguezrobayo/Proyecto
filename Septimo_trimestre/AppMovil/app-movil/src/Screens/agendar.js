import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, Text, View, TextInput, Pressable,Image, TouchableOpacity, Alert, Modal, ScrollView, RefreshControl } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { AuthContext } from "../Context/AuthContext";
import { AntDesign, Feather } from "@expo/vector-icons";
import axios from "axios";
import DateTimePickerModal from "react-native-modal-datetime-picker";




const Agendar = ({modalAgendar, setModalAgendar, IdEmpresa, NombreEmpresa}) => {
  
  const [idReserva, setIdReserva] = useState(null);
  const [servicio, setServicio] = useState("");
  const [fecha, setFecha] = useState("Seleccionar");
  const [hora, setHora] = useState("Seleccionar");
  const [lugarReserva, setlugarReserva] = useState("");
  const [cantPersonas, setCantPersonas] = useState("");
  const [condiciones, setCondiciones] = useState("");
  const [Servicios, setServicios] = useState([]);
  const [Lugares, setLugares] = useState([]);
  const [idEmpresa, setIdEmpresa] = useState(IdEmpresa);
  const [nombreEmpresa, setNombreEmpresa] = useState(NombreEmpresa);
  const {id} = useContext(AuthContext);
  const [refreshing, setRefreshing] = useState(false);

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const fetchData = () => {
    axios.get('http://10.0.2.2:9300/servicio')
      .then(response => {
        setServicios(response.data);
        setRefreshing(false); // Asegúrate de detener el indicador de actualización
      })
      .catch(error => {
        console.error('Error fetching servicios:', error);
        setRefreshing(false); // Asegúrate de detener el indicador de actualización incluso en caso de error
      });
  
    axios.get('http://10.0.2.2:9300/lugar_reserva')
      .then(response => {
        setLugares(response.data);
        setRefreshing(false); // Asegúrate de detener el indicador de actualización
      })
      .catch(error => {
        console.error('Error fetching lugares de reserva:', error);
        setRefreshing(false); // Asegúrate de detener el indicador de actualización incluso en caso de error
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleDateConfirm = (date) => {
    const dt = new Date(date);
    const x = dt.toISOString().split('T');
    const x1 = x[0].split('-');
    setFecha(x1[0] + '/' + x1[1] + '/' + x1[2]);
    hideDatePicker();
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };
  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };
  const handleTimeConfirm = (date) => {
    const dt = new Date(date);
    const options = {hour12: false, hour: '2-digit', minute:'2-digit', second: '2-digit'};
    const x = dt.toLocaleTimeString('en-US', options);
    console.log(x);
    setHora(x);
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
        Empresa_Nit_Empresa: idEmpresa,
        Cliente_id_Cliente: id,
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
      setModalAgendar(false);
    })
    .catch(function(error){
      console.log(error);
    })
  }

  const onRefresh = () => {
    setRefreshing(true);
    fetchData();
    setRefreshing(false);
    setServicio("");
    setlugarReserva("");
    setFecha("Seleccionar");
    setHora("Seleccionar");
    setCantPersonas("");
    setCondiciones("");
  };

  return (
    <Modal animationType="slide" visible={modalAgendar}>
      <View style={styles.container}>   
        <TouchableOpacity style={{marginLeft: -10, paddingBottom: 20}} onPress={()=>setModalAgendar(!modalAgendar)}>
          <Feather name="chevron-left" size={24}/>
        </TouchableOpacity>
        <Text style={styles.titulop}>Realizar Reserva</Text>
          <Image style={styles.logo} source={{ uri: "https://i.pinimg.com/236x/23/40/8e/23408e565fc3f43454636fec27572d1f.jpg" }}/>
            <Text style={styles.empresaText}>Empresa:</Text>
            <Text style={styles.empresa}>{NombreEmpresa}</Text>
        <ScrollView
          contentContainerStyle={styles.scrollView}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }
        >
          <View style={styles.form}>
            
            <View>
              <Text style={styles.inputTitle}>Servicio                                     Lugar de Reserva</Text>
              <View style={styles.input2}>
                <Picker
                  selectedValue={servicio}
                  style={styles.inputShared1}
                  onValueChange={(itemValue) => setServicio(itemValue)}
                >
                  <Picker.Item label="Servicio" value="" />
                  {Servicios.map((servicio) =>(
                    <Picker.Item key={servicio.idServicio} label={servicio.Nombre_servicio} value={servicio.idServicio} />
                  ))}
                </Picker>
                <Picker
                  selectedValue={lugarReserva}
                  style={styles.inputShared1}
                  onValueChange={(itemValue) => setlugarReserva(itemValue)}
                >
                  <Picker.Item label="Lugar" value="" />
                  {Lugares.map((lugarReserva) =>(
                    <Picker.Item key={lugarReserva.ID_lugreserv} label={lugarReserva.Nom_lugreserv} value={lugarReserva.ID_lugreserv} />
                  ))}
                </Picker>
              </View>
            </View>
            <View>
              <Text style={styles.inputTitle}>Fecha                                          Hora</Text>
              <View style={styles.input2}>
                <Pressable style={styles.inputShared} onPress={() => {showDatePicker();}}>
                  <Text style={styles.textPr}>{fecha}           <AntDesign name="caretdown" size={10}/></Text>
                </Pressable>
                <Pressable style={styles.inputShared} onPress={() => {showTimePicker();}}>
                  <Text style={styles.textPr}>{hora}           <AntDesign name="caretdown" size={10}/></Text>
                </Pressable>
              </View>
            </View>
            <View>
              <Text style={styles.inputTitle}>Cant. Personas                         Condiciones</Text>
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
            <TouchableOpacity style={styles.btn} onPress={registrarReserva}>
              <Text style={styles.btntext}>RESERVAR</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleDateConfirm}
          onCancel={hideDatePicker}
        />
        <DateTimePickerModal
          isVisible={isTimePickerVisible}
          mode="time"
          onConfirm={handleTimeConfirm}
          onCancel={hideTimePicker}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    paddingTop: 20,
    padding: 20,
  },
  titulop: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 40,
  },
  form: {
    margin: 10,
    marginTop: 35,
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
  textPr: {
    color: '#666',
    paddingTop: 17,
    fontSize: 15.5,
  },
  scrollView: {
    flex: 1,
  },
  logo:{
    borderRadius:100,
    width: 130,
    height: 130,
  },
  empresa:{
    fontSize:20,
    fontWeight: 'bold',
    marginTop: -60,
    marginBottom: 30,
    marginLeft: 150,
  },
  empresaText: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: -90,
    marginBottom: 65,
    marginLeft: 150,
  },
});

export default Agendar;
