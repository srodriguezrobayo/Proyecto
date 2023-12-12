import { View, Text, Pressable, StyleSheet } from 'react-native';
import React, { useContext } from 'react';
import { AuthContext} from '../Context/AuthContext';

const CerrarSesion = ({ navigation }) => {
    const {logout} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text>¿Quieres cerrar tu sesión?</Text>
      <Pressable style={styles.btn} onPress={() => logout()}>
        <Text>Si, cerrar sesión</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#ffffff",
      justifyContent: "center",
      alignContent: "center",
      alignItems: "center"
    },
    btn: {
        backgroundColor: "green",
        borderRadius: 8,
        padding: 10,
    }
  });

export default CerrarSesion;