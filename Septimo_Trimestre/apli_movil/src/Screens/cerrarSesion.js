import { View, Text, Pressable, StyleSheet,Image } from 'react-native';
import React, { useContext } from 'react';
import { AuthContext} from '../Context/AuthContext';

const CerrarSesion = ({ navigation }) => {
    const {logout} = useContext(AuthContext);

  return (
    <View style={styles.container}>
        <Image  style={styles.wav} source={require("../components/img/wave.png")} alt="wave" ></Image>
      <Text style={styles.tex}>¿Quieres cerrar tu sesión?</Text>
      <Pressable style={styles.btn} onPress={() => logout()}>
        <Text style={styles.tex}>Si, cerrar sesión</Text>
      </Pressable>
      <Image  style={styles.wave} source={require("../components/img/wave.png")} alt="wave" ></Image>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#ffffff",
      justifyContent: "center",
      alignContent: "center",
      alignItems: "center",
    },
    tex: {
      fontWeight: 'bold'
    },
      btn: {
      backgroundColor: "#3AFA86",
      borderRadius: 8,
      padding: 10,
    },
    wave:{
      bottom: 0,
      left: 0,
      height: 350,
      width: 400, // Ancho deseado de la imagen
      resizeMode: 'stretch',
      position: 'absolute',
  },
  wav:{
    bottom: 0,
    left: 0,
    height: 350,
    width: 400, // Ancho deseado de la imagen
    resizeMode: 'stretch',
    position: 'relative',
    transform: [{ rotate: '180deg'}],
    marginStart:20,
    marginTop:-400,
},
  });

export default CerrarSesion;