import React, { useState } from "react";
import { useForm, useController } from "react-hook-form";
import {
  Button,
  ImageBackground,
  Text,
  TextInput,
  View,
  StyleSheet,
  Pressable,
  TouchableWithoutFeedback,
} from "react-native";
import image from "../../assets/bgemigrapp.jpg";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const { control, handleSubmit } = useForm();
  const navigation = useNavigation();
  const [active, setActive] = useState(true)

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

            <TouchableWithoutFeedback onPress={
              () => {
                setActive(!active)
              }
            }>

              <View style={styles.switchBtn}>

                <View style={active ? styles.btnLogin : styles.btnSignup}><Text style={styles.btnLoginTxt}>Log in</Text></View>
                <View style={active ? styles.btnSignup : styles.btnLogin}><Text style={styles.btnSignupTxt}>Sign Up</Text></View>

              </View>
            </TouchableWithoutFeedback>
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
              onPress={() => {
                // navigation.navigate("#")
                console.log('apretaste boton 2')
              }
              }
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
    
    height: '30%',
    width: '80%',
    borderBottomWidth: 1,
    alignSelf: "center",
    marginBottom: '5%',
    borderBottomColor: "#A6A4A4",
  },
  inputPassword: {
    height: '30%',
    width: '80%',
    borderBottomWidth: 1,
    alignSelf: "center",
    borderBottomColor: "#A6A4A4",
  },
  loginSecction: {
    flex: 2.5,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    width: '82%',
    height: '90%',
    alignSelf: "center",

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
  welcomeText: {
    color: "#000000",
    fontWeight: "bold",
    fontSize: 25,
    alignSelf: "center",
    marginTop: '5%',
  },
  subText: {
    color: "#000000",
    fontWeight: "bold",
    fontSize: 15,
    alignSelf: "center",
    marginTop: '1%',
  },
  switchBtn: {
    flex: 2,
    width: '90%',
    height: '13%',
    backgroundColor: 'grey',
    borderRadius: 40,
    marginTop: '7%',
    marginLeft: '5%',
    marginBottom: '7%',
    flexDirection: "row",
  },

  cont2: {
    flex: 2,
    justifyContent: "center",
    backgroundColor: '#FFF',
    width: '82%',
    alignSelf: 'center',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  cont3: {
    flex: 2,
  },
  btnLogin: {
    backgroundColor: '#25C90A',
    width: '55%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,

  },

  btnSignup: {
    width: '45%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnLoginTxt: {
    marginLeft: '5%',
    fontWeight: "bold",
    fontSize: 18,
    color: "#FDFDFD",
  },
  btnSignupTxt: {
    marginLeft: '5%',
    fontWeight: "bold",
    fontSize: 18,
    color: "#FDFDFD",
  }
});
