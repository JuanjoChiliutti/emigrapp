import React from "react";
import { useForm, useController } from "react-hook-form";
import {
  Button,
  ImageBackground,
  Text,
  TextInput,
  View,
  StyleSheet,
  Pressable,
} from "react-native";
import image from "../../assets/bgemigrapp.jpg";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const { control, handleSubmit } = useForm();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <LinearGradient
          style={styles.container}
          colors={["transparent", "rgba(0,0,0,0.8)"]}
        >
          <View style={styles.field1}>
            <Text style={styles.title}>EMIGRAR EN FAMILIA</Text>
          </View>
          <View style={styles.loginSecction}>
          <View style={styles.cont1}>
            <Pressable
                style={styles.btn}
                onPress={() => navigation.navigate("#")}
              >
                <Text style={styles.textBtn}>Ingresar</Text>
              </Pressable>
              <Text style={styles.welcomeText}>¡Bienvenido!</Text>
              <Text style={styles.subText}>Estas a punto de comenzar una nueva aventura</Text>
          </View>
          <View style={styles.cont2}>
            <TextInput name="Email" style={styles.inputEmail} placeholderTextColor={"#A6A4A4"} placeholder="Email"></TextInput>
            <TextInput name="Password" style={styles.inputPassword} placeholderTextColor={"#A6A4A4"} secureTextEntry={true} placeholder="Password"></TextInput>
          </View>
          <View style={styles.cont3}>
            <Pressable
              style={styles.btn2}
              onPress={() => navigation.navigate("#")}
            >
              <Text style={styles.textBtn}>Ingresar</Text>
            </Pressable>

            <Text style={styles.text}>
             Olvidaste la contraseña? {"\n"}Ingresa{" "}
              <Text
                style={{ color: "#ED0101" }}
                onPress={() => navigation.navigate("Landing")}
              >
                AQUI
              </Text>
            </Text>
          </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 6,
    width: '100%',
    height: '100%',
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    color: "#FDFDFD",
    fontWeight: "bold",
    fontSize: 32,
    textAlign: "center",
    marginTop: 220,
  },
  field1: {
    flexDirection: "column",
    flex: 2,
  },
  inputEmail: {
  height:'30%',
  width:'80%',
  borderBottomWidth:1,
  alignSelf: "center",
  marginBottom:'5%',
  borderBottomColor: "#A6A4A4",
  },
  inputPassword: {
  height:'30%',
  width:'80%',
  borderBottomWidth:1,
  alignSelf: "center",
  borderBottomColor: "#A6A4A4",
  },
  loginSecction: {
    flex:2.5,
    backgroundColor: "#FFFFFF",
    borderRadius: 40,
    bottom: 70,
    width: '82%',
    height:'64%',
    alignSelf: "center",
    
  },
  btn: {
    color: "red",
    backgroundColor: "#25C90A",
    width: '90%',
    height: '35%',
    justifyContent: "center",
    borderRadius: 40,
    alignSelf: "center",
    marginTop: '10%'
  },
  btn2: {
    color: "red",
    backgroundColor: "#25C90A",
    width: '90%',
    height: '35%',
    justifyContent: "center",
    borderRadius: 40,
    alignSelf: "center",
    marginTop: '8%'
    
  },
  textBtn: {
    textAlign: "center",
    color: "#FDFDFD",
    fontWeight: "bold",
    fontSize: 18,
  },
  text: {
    textAlign: "center",
    color: "#000000",
    fontWeight: "bold",
    fontSize: 18,
    marginTop: '5%',
    marginBottom: 30,
   
  },
  welcomeText:{
    color: "#000000",
    fontWeight: "bold",
    fontSize: 25,
    alignSelf: "center",
    marginTop: '5%',
  },
  subText:{
    color: "#000000",
    fontWeight: "bold",
    fontSize: 15,
    alignSelf: "center",
    marginTop: '1%',
  },
  cont1:{
    flex: 2,
  },
  cont2:{
    flex: 2,
    justifyContent: "center",
  },
  cont3:{
    flex: 2,
  },
});
