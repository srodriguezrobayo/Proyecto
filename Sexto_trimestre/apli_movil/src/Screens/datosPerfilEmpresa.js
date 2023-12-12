import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React from "react";

const DatosPerfilEmpresa = ({ item, navigation }) => {
    let {Nit_Empresa,Nombre_empresa,Correoelectronico_empresa,Password_empresa,Desc_empresa,Telefono_empresa,Ciudad_id_Ciudad,Foto_empresa} = item


    return (
        <View style={styles.container}>
        <Text style={styles.titulop}>Perfil</Text>
          <View style={styles.header}>
            <Image style={styles.logo} source={{ uri: "https://i.pinimg.com/550x/09/90/fe/0990fe16f61df266c4fc0923bff98c3b.jpg" }}/>
            <Text style={styles.titulo}>{Nombre_empresa}</Text>
          </View>
          <View style={styles.datos}>
            <Text style={styles.datosText}>
              <Text style={styles.datosTextBold}>Nit Empresa: </Text>
            {Nit_Empresa}</Text>
            <Text style={styles.datosText}>
              <Text style={styles.datosTextBold}>Correo: </Text>
            {Correoelectronico_empresa}</Text>
            <Text style={styles.datosText}>
              <Text style={styles.datosTextBold}>Teléfono: </Text>
            {Telefono_empresa}</Text>
            <Text style={styles.datosText}>
              <Text style={styles.datosTextBold}>Ciudad: </Text>
            {Ciudad_id_Ciudad}</Text>
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

export default DatosPerfilEmpresa;