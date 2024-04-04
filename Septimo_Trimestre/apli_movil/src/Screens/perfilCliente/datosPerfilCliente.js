import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React from "react";

const DatosPerfilCliente = ({ item, navigation }) => {
    let {Nombre_cliente,Correoelectronico_cliente,Telefono_cliente,GeneroDesc,NombreCiudad} = item

    return (
        <View style={styles.container}>
        <Text style={styles.titulop}>Perfil</Text>
          <View style={styles.header}>
            <Image style={styles.logo} source={{ uri: "https://play-lh.googleusercontent.com/hJGHtbYSQ0nCnoEsK6AGojonjELeAh_Huxg361mVrPmzdwm8Ots-JzEH5488IS2nojI=w240-h480-rw" }}/>
            <Text style={styles.titulo}>{Nombre_cliente}</Text>
          </View>
          <View style={styles.datos}>
            <Text style={styles.datosText}>
              <Text style={styles.datosTextBold}>Correo: </Text>
            {Correoelectronico_cliente}</Text>
            <Text style={styles.datosText}>
              <Text style={styles.datosTextBold}>Teléfono: </Text>  
            {Telefono_cliente}</Text>
            <Text style={styles.datosText}>
              <Text style={styles.datosTextBold}>Ciudad: </Text>  
            {NombreCiudad}</Text>
            <Text style={styles.datosText}>
              <Text style={styles.datosTextBold}>Género: </Text>  
            {GeneroDesc}</Text>
          </View>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: "#ffffff",
        paddingTop: 1,
        padding: 20,
      },
      header: {
        marginBottom: 45,
        marginTop: 45,
        justifyContent: 'center', 
        alignItems: 'center',
      },
      logo: {
        width: 280,
        height: 280,
        borderRadius: 140,
      },
      titulop: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 30,
      },
      titulo: {
        fontSize: 32,
        textAlign: "center",
        fontWeight: "bold",
      },
      datos: {
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: "#8AEB8A",
        borderRadius: 10,
        padding: 12,
        elevation: 6,
      },
      datosText: {
        fontSize: 16,
      },
      datosTextBold: {
        fontSize: 16,
        fontWeight: "bold",
      },
    });

export default DatosPerfilCliente;