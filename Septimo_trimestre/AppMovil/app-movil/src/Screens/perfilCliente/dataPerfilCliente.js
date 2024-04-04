import { StyleSheet, Text, View, Pressable, Image, ImageBackground, TouchableOpacity, SafeAreaView } from "react-native";
import React, { useContext } from "react";
import { AuthContext} from '../../Context/AuthContext';
import { Ionicons, AntDesign, Entypo, FontAwesome5 } from "@expo/vector-icons";

const DataPerfilCliente = ({ item, navigation }) => {
    let {id_Cliente,Nombre_cliente,Correoelectronico_cliente,Telefono_cliente,GeneroDesc,NombreCiudad} = item
    const {logout} = useContext(AuthContext);

    return (
        <View style={{backgroundColor: '#f0f0f0', paddingBottom: 200}}>   
            <View style={styles.container}>
                <View style={{paddingRight: 15}}>
                    <Image source={require('../../components/img/fondo.png')} style={styles.backgroundImage}/> 
                    <TouchableOpacity style={{flexDirection: 'row-reverse', marginTop: -265}} onPress={() => logout()}>
                        <Ionicons name="exit" size={30}/>
                    </TouchableOpacity> 
                </View>
                <View style={styles.profile}>
                    <Image style={styles.logo} source={{ uri: "https://i.pinimg.com/236x/23/40/8e/23408e565fc3f43454636fec27572d1f.jpg" }}/>
                    <Text style={styles.name}>{Nombre_cliente}</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("EditarPerfilCliente", {id_Cliente: id_Cliente})}>
                        <Text style={{color: 'gray', fontSize: 13}}>Editar Perfil</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <View style={styles.datos}>
                    <Text style={styles.datosText}>
                        <Ionicons name="mail" size={24}/>    {Correoelectronico_cliente}
                    </Text>
                    <Text style={styles.datosText}>
                        <FontAwesome5 name="phone-alt" size={24}/>    {Telefono_cliente}
                    </Text>
                    <Text style={styles.datosText}>
                        <Ionicons name="location-sharp" size={24}/>    {NombreCiudad}
                    </Text>
                    <Text style={styles.datosText}>
                        <FontAwesome5 name="transgender" size={24}/>     {GeneroDesc}
                    </Text>
                </View>
            </View>
        </View> 
      );
    };
    
    const styles = StyleSheet.create({ 
      container: {
        flex: 1,
      },
      backgroundImage: {
        width: '104%',
        height: 300,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
      },
      profile: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
      },
      logo: {
        width: 220,
        height: 220,
        borderRadius: 120,
        borderWidth: 2,
        borderColor: 'green',
        marginTop: 90,
        resizeMode: 'contain',
      },
      name: {
        fontWeight: 'bold',
        fontSize: 26,
      },
      datos: {
        marginTop: 40,
      },
      datosText: {
        marginTop: 14,
        paddingHorizontal: 55,
        fontSize: 18,
        borderBottomColor: 'green',
        borderBottomWidth: .8,
        paddingBottom: 8,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
      },
    });

export default DataPerfilCliente;