import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Pressable, ScrollView } from "react-native";

const Bienvenida = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={{uri: "https://i.ibb.co/fq0Vnrb/logo.png"}} />
      <Text></Text><Text></Text>
      <Text style={styles.titulo}>Reserve Shoot</Text>
      <Text></Text><Text></Text>
      <Text style={styles.subtitulo}>Bienvenido a Reserve Shoot</Text>

      <View style={styles.botones}>
        <Pressable 
        style={styles.btn} 
        onPress={()=>navigation.navigate("RegistroCliente")}>
          <Text style={styles.btntext}>CLIENTE</Text>
        </Pressable>
        <Pressable style={styles.btn}
        onPress={()=>navigation.navigate("RegistroEmpresa")}>
          <Text style={styles.btntext}>EMPRESA</Text>
        </Pressable>
        <Pressable style={styles.btn}
        onPress={()=>navigation.navigate("LoginAdmin")}>
          <Text style={styles.btntext}>ADMIN</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingTop: 100,
  },
  logo: {
    width: 400,
    height: 400,
  },
  titulo: {
    fontSize: 34,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitulo: {
    fontSize: 16,
    textAlign: "center",
  },
  botones: {
    marginVertical: 20,
  },
  btn: {
    backgroundColor: "#8AEB8A",
    color: "#ffffff",
    padding: 15,
    marginTop: 8,
    marginLeft: 25,
    marginRight: 25,
    borderRadius: 10,
  },
  btntext: {
    textAlign: "center",
    color: "#ffffff",
    fontWeight: "bold",
  },
});

export default Bienvenida;
