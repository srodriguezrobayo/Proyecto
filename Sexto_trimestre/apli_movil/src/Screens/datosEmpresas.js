import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet, Image } from "react-native";


const DatosEmpresas = ({ item, navigation }) => {
  let {Nit_Empresa,Nombre_empresa,Correoelectronico_empresa,Password_empresa,Desc_empresa,Telefono_empresa,Ciudad_id_Ciudad,Foto_empresa} = item

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <View style={styles.item}>
          <Image style={styles.logo} source={{ uri: "https://i.pinimg.com/550x/09/90/fe/0990fe16f61df266c4fc0923bff98c3b.jpg" }}/>
          <Text style={styles.name}>{Nombre_empresa}</Text>
          <Pressable style={styles.btn} onPress={() => navigation.navigate("Agendar")}>
            <Text style={styles.btntext}>AGENDAR</Text>
          </Pressable>
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
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  item: {
    height: 150,
    width: 150,
    backgroundColor: "#ffffff",
    borderRadius: 15,
    padding: 10,
    margin: 18,
    justifyContent: 'center', 
    alignItems: 'center',
    elevation: 12,
  },
  list: {
    flex: 1,
    flexDirection: "row",
  },
  name: {
    fontSize: 15,
  },
  btn: {
    backgroundColor: "#8AEB8A",
    color: "#ffffff",
    padding: 3,
    width: "100%",
    borderRadius: 10,
    marginTop: 13,
  },
  btntext:{
    textAlign: "center",
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 12,
  },
});

export default DatosEmpresas;
