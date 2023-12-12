import React, { useContext, useState } from 'react';
import { Text, StyleSheet, View, TextInput, ScrollView, Pressable, Image } from "react-native";
import axios from 'axios';
import { AuthContext } from '../Context/AuthContext';


const LoginAdmin = ({ navigation }) => {
    const [Correo, setCorreo] = useState("");
    const [Contraseña, setContraseña] = useState("");
    const {LoginAdmin} = useContext(AuthContext);

    const loginAdmin = () => {
        LoginAdmin(Correo, Contraseña)
        
    }

    return (
        <View style={styles.contenido}>
            <ScrollView>
                <Text/>
                <View style={styles.login}>
                <Text style={styles.titulo}>Iniciar Sesion {''}</Text>
                <Text style={styles.tituloBold}>Ingresa tus datos para continuar</Text>
                </View>

                <TextInput 
                    style={styles.input}
                    placeholder="Nombre" 
                    placeholderTextColor={'#666'}
                    value={Correo}
                    onChangeText={setCorreo}
                />                       
                <TextInput 
                    label="Password"
                    style={styles.input} 
                    placeholder="Contraseña" 
                    placeholderTextColor={'#666'}
                    secureTextEntry={true}
                    value={Contraseña}
                    onChangeText={setContraseña}
                />
                <Pressable style={styles.btnNuevaCita} onPress={loginAdmin}>
                    <Text style={styles.btnNuevaCitaTexto}>INICIAR SESION</Text>
                </Pressable>
                <Text/>
            </ScrollView>
        </View>
        
    );
}


const styles = StyleSheet.create({
    contenido: {
        flex: 1,
        backgroundColor: "#ffffff",
        paddingTop: 40,
        padding: 30,
    },
    titulo: {
        fontSize: 32,
        fontWeight: "bold",
        textAlign: "left",
    },
    tituloBold: {
        fontSize: 17,
        textAlign: "left",
    },
    btnCancelar: {
        marginVertical: 30,
        backgroundColor: '#5827A4',
        marginHorizontal: 30,
        padding: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
    },
    btnCarcelarTexto: {
        color: '#FFF',
        textAlign: 'center',
        fontWeight: '900',
        fontSize: 16,
        textTransform: 'uppercase'
    },
    campo: {
        marginTop: 10,
        marginHorizontal: 30,
        color: '#96FBA4'
    },
    label: {
        color: '#fff',
        marginBottom: 10,
        marginTop: 15,
        fontSize: 20,
        fontWeight: '600',
    },
    input: { 
        width: '100%',
        height: 52,
        borderColor: "#C7F5C7",
        backgroundColor: "#C7F5C7",
        borderRadius: 13,
        marginBottom: 4,
        textAlign: "center",
    },
    btnNuevaCita: {
        backgroundColor: "#8AEB8A",
        color: "#ffffff",
        padding: 15,
        marginTop: 25,
        borderRadius: 10,
        width: "100%",
    },
    btnNuevaCitaTexto: {
        textAlign: "center",
        color: "#ffffff",
        fontWeight: "bold",
    },
    inicio: {
        textAlign: "center",
        margin: 15,
        fontSize: 15,    
    },
    imagenes: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    logo: {
        width: 50,
        height: 50,
        marginHorizontal: 15,
        borderRadius: 25
    },
    login: {
        marginBottom : 40,
        marginTop: 40
    },
    medio: {
        textAlign: 'right',
        marginTop: 15
    },
    texto: {
        fontSize: 16,
        textAlign: "center",
        marginTop: 40,
    },
      textoBold: {
        fontWeight: "bold",
    },
})

export default LoginAdmin;