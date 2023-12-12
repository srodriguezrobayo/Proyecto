import { View, Text } from 'react-native';
import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext } from '../Context/AuthContext';
import TabCliente from '../Tabs/tabCliente';
import TabEmpresa from '../Tabs/tabEmpresa';
import PrincipalStack from '../stacks/PrincipalStack';
import { ActivityIndicator } from 'react-native-paper';
import AdminStack from './AdminStack';

const Nav = ({ navigation }) => {
    const {isLoading, rol} = useContext(AuthContext);
    if(isLoading){
        return(
            <View style={{ flex:1 }}>
                <ActivityIndicator size={"large"}  />
            </View>
        )
    }

  return (
    <NavigationContainer>
        {rol === null && (<PrincipalStack  />)}
        {rol === "Cliente" && (<TabCliente  />)}
        {rol === "Empresa" && (<TabEmpresa  />)}
        {rol === "Admin" && (<AdminStack  />)}
    </NavigationContainer>
  )
}

export default Nav;