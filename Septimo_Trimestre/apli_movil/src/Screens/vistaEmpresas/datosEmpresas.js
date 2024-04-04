import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import Agendar from "../agendar";


const DatosEmpresas = ({ item }) => {
  const [modalAgendar, setModalAgendar] = useState(false);

  let {Nit_Empresa,Nombre_empresa,Correoelectronico_empresa,Password_empresa,Desc_empresa,Telefono_empresa,Ciudad_id_Ciudad,Foto_empresa} = item

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <View style={styles.item}>
          <Image style={styles.logo} source={{ uri: "https://i.pinimg.com/550x/09/90/fe/0990fe16f61df266c4fc0923bff98c3b.jpg" }}/>
          <Text style={styles.name}>{Nombre_empresa}</Text>
          <Text style={styles.desc}>{Desc_empresa}</Text>
          <Pressable style={styles.btn} onPress={()=>setModalAgendar(!modalAgendar)}>
            <Text style={styles.btntext}>AGENDAR</Text>
          </Pressable>
          <Agendar
            modalAgendar={modalAgendar}
            setModalAgendar={setModalAgendar}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DADADA",
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  item: {
    height: 250,
    width: '90%',
    backgroundColor: "#ffffff",
    borderRadius: 15,
    padding: 18,
    margin: 18,
    justifyContent: 'center', 
    alignItems: 'center',
    elevation: 10,
    paddingTop: 35,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  desc: {
    fontSize: 14,
    color: 'gray',
  },
  btn: {
    backgroundColor: "#8AEB8A",
    color: "#ffffff",
    padding: 6,
    width: "100%",
    borderRadius: 10,
    marginTop: 20,
  },
  btntext:{
    textAlign: "center",
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 14,
  },
});

export default DatosEmpresas;
