import { StyleSheet, Text, View, TextInput, Pressable, Image, FlatList } from "react-native";
import React, { useEffect, useCallback, useContext, useState } from "react";
import axios from "axios";
import { SafeAreaView } from "react-native-safe-area-context";
import DatosCrudReservacion from "./datosCrudReservacion";


const CrudReservacion = ({ navigation }) => {
  const [reservaciones, setreservaciones] = useState([]);
  useEffect(() => {obtenerReservaciones()}, [])

  const obtenerReservaciones = () => {
    var config = {
      method: "get",
      url: `http://10.0.2.2:9300/reservacion`,
    }
    axios(config)
    .then((response) => {
      setreservaciones(response.data)
      console.log(response.data)
    })
    .catch(function(error){
      console.log(error);
    })
    
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.btnsUp}>
        <Pressable style={styles.btnNuevo} onPress={()=>navigation.navigate("AgregarReservacion")}>
            <Text style={styles.btnNuevoText}>Nuevo</Text>
        </Pressable>
      </View>
      <View style={styles.header}>
        <Text style={styles.titulo}>Tabla Reservaciones</Text>
      </View>
      <FlatList
        data={reservaciones}
        renderItem={({item}) => <DatosCrudReservacion item={item} navigation={navigation} obtenerReservaciones={obtenerReservaciones}/>}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DADADA",
    paddingTop: 40,
    padding: 20,
  },
  btnsUp: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
  },
  btnNuevo: {
    borderRadius: 5,
    flexDirection: "row-reverse"
  },
  btnNuevoText: {
    color: "blue",
    fontWeight: "bold",
  },
  btnLogout: {
    borderRadius: 5,
    flexDirection: "row"
  },
  btnLogoutText: {
    color: "red",
    fontWeight: "bold",
  },
});

export default CrudReservacion;
