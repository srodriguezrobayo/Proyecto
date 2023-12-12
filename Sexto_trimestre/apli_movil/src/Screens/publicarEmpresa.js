import { StyleSheet, Text, View, TextInput, Pressable, ScrollView } from "react-native";

const PublicarEmpresa = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Publicar Empresa</Text>

      <ScrollView>
        <View>
          <Text style={styles.inputTitle}>Titulo de la Publicación</Text>
          <TextInput
            placeholder="Titulo"
            style={styles.input}
          />
        </View>
        <View>
          <Text style={styles.inputTitle}>Subir Imagen</Text>
            <Pressable style={styles.subir}>
              <Text style={styles.btntext} >Seleccionar Archivo</Text>
            </Pressable>
        </View>
        <View>
          <Text style={styles.inputTitle}>Descripción</Text>
          <TextInput
            placeholder="Aqui su descripción"
            style={styles.input}
            height={110}
          />
        </View>
        
        <View>
          <Text style={styles.inputTitle}>Precio y Tipo de Reservación</Text>
          <View style={styles.input2}>
            <TextInput
              placeholder="Precio"
              style={styles.inputShared}
              marginRight={3}
            />
            <TextInput
              placeholder="Tipo Reservacion"
              style={styles.inputShared}
              marginLeft={3}
            />
          </View>
        </View>
        <View>
        <Text style={styles.inputTitle}>Fecha de Inicio/Vencimiento</Text>
          <View style={styles.input2}>
            <TextInput
              placeholder="Fecha Inicio"
              style={styles.inputShared}
              marginRight={3}
            />
            <TextInput
              placeholder="Fecha Vencimiento"
              style={styles.inputShared}
              marginLeft={3}
            />
          </View>
        </View>
        <View>
        <Text style={styles.inputTitle}>Telefono y Correo de Contacto</Text>
          <View style={styles.input2}>
            <TextInput
              placeholder="Telefono Contacto"
              style={styles.inputShared}
              marginRight={3}
            />
            <TextInput
              placeholder="Correo Contacto"
              style={styles.inputShared}
              marginLeft={3}
            />
          </View>
        </View>
        <Pressable style={styles.btn}>
          <Text style={styles.btntext} >PUBLICAR</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 45,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 52,
    backgroundColor: "#C7F5C7",
    borderRadius: 13,
    marginBottom: 10,
    paddingLeft: 15,
  },
  inputTitle: {
    fontSize: 14,
    color: "#808080",
  },
  btn: { 
    backgroundColor: "#8AEB8A",
    color: "#ffffff",
    padding: 15,
    marginTop: 25,
    borderRadius: 10,
    width: "100%",
  },
  btntext:{
    textAlign: "center",
    color: "#ffffff",
    fontWeight: "bold",
  },
  subir: {
    backgroundColor: "#8AEB8A",
    color: "#ffffff",
    padding: 15,
    borderRadius: 10,
    width: "100%",
    marginBottom: 10,

  },
  input2: {
    flexDirection: "row",
    alignItems: "center",
  },
  inputShared: {
    width: '49%',
    height: 52,
    backgroundColor: "#C7F5C7",
    borderRadius: 13,
    marginBottom: 10,
    paddingLeft: 15,
  },
});

export default PublicarEmpresa;
