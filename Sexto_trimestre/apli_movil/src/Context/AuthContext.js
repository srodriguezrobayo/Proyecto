import { View, Text, Alert } from 'react-native';
import React, { Context, createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [id, setId] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [rol, setRol] = useState(null);
    const LoginCliente = (Correoelectronico_cliente, Password_cliente) => {
        setIsLoading(true)
        var config = {
            method: "post",
            url: "http://10.0.2.2:9300/cliente/login",
            data: {
              Correoelectronico_cliente,
              Password_cliente,
            }
          }
          axios(config)
          .then((response) => {
            if(response.data == "Bienvenido") {
                axios.post("http://10.0.2.2:9300/cliente/obtenerId", {Correoelectronico_cliente, Password_cliente})
                .then((response2) => {
                    let idCliente = response2.data[0].id_Cliente.toString()
                    setRol("Cliente")
                    AsyncStorage.setItem("rol", "Cliente")
                    setId(idCliente)
                    AsyncStorage.setItem("idL", idCliente)
                })
                .catch(function(error){
                    console.log(error);
                })
            } else{
                Alert.alert("Inicio Sesión", response.data), [
                    {
                       text: "Listo",
                    }
                ]
            }
          })
          .catch(function(error){
            console.log(error);
          })
          setIsLoading(false)
    }

    const LoginEmpresa = (Correoelectronico_empresa, Password_empresa) => {
        setIsLoading(true)
        var config = {
            method: "post",
            url: "http://10.0.2.2:9300/empresa/login",
            data: {
                Correoelectronico_empresa,
                Password_empresa,
            }
          }
          axios(config)
          .then((response) => {
            if(response.data == "Bienvenido") {
                axios.post("http://10.0.2.2:9300/empresa/obtenerId", {Correoelectronico_empresa, Password_empresa})
                .then((response2) => {
                    let idEmpresa = response2.data[0].Nit_Empresa.toString()
                    setRol("Empresa")
                    AsyncStorage.setItem("rol", "Empresa")
                    setId(idEmpresa)
                    AsyncStorage.setItem("idL", idEmpresa)
                })
                .catch(function(error){
                    console.log(error);
                })
            } else{
                Alert.alert("Inicio Sesión", response.data), [
                    {
                       text: "Listo",
                    }
                ]
            }
          })
          .catch(function(error){
            console.log(error);
          })
          setIsLoading(false)
    }

    const LoginAdmin = (Nom_empleado,Password_empleado) => {
        setIsLoading(true)
        var config = {
            method: "post",
            url: "http://10.0.2.2:9300/admin/login",
            data: {
                Nom_empleado,
                Password_empleado,
            }
          }
          axios(config)
          .then((response) => {
            if(response.data == "Bienvenido") {
                axios.post("http://10.0.2.2:9300/admin/obtenerId", {Nom_empleado, Password_empleado})
                .then((response2) => {
                    let idAdmin = response2.data[0].id_empleado.toString()
                    setRol("Admin")
                    AsyncStorage.setItem("rol", "Admin")
                    setId(idAdmin)
                    AsyncStorage.setItem("idL", idAdmin)
                })
                .catch(function(error){
                    console.log(error);
                })
            } else{
                Alert.alert("Inicio Sesión", response.data), [
                    {
                       text: "Listo",
                    }
                ]
            }
          })
          .catch(function(error){
            console.log(error);
          })
          setIsLoading(false)
    }

    const logout = () => {
        setIsLoading(true)
        setRol(null)
        setId(null)
        AsyncStorage.removeItem("rol")
        AsyncStorage.removeItem("idL")
        setIsLoading(false)
    }

    const isLoggedIn = async() => {
        try{
            setIsLoading(true)
            let rol = await AsyncStorage.getItem("rol")
            let idLog = await AsyncStorage.getItem("idL")
            setRol(rol)
            setId(idLog)
            setIsLoading(false)
        }
        catch(e){
            console.log(`isLogged error ${e}`)
        }
    }
    useEffect(() => {isLoggedIn()}, [])

    return (
    <AuthContext.Provider value={{ LoginCliente, LoginEmpresa, LoginAdmin, logout, isLoading, rol, id }}> 
        {children}
    </AuthContext.Provider>
    )
}
