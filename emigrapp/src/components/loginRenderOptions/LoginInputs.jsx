import React, {useState} from "react";

import {
  Text,
  TextInput,
  View,
  StyleSheet,
  Pressable,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function LoginInputs() {
    const [inputs, setInputs] = useState({
      email:"",
      password:"",
    })
    const navigation = useNavigation();

    const sendCred = async () => {
    
      fetch('http://10.0.2.2:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'email': inputs.email,
          'password': inputs.password
        })
      })
      
      .then(res => res.json())
      .then(async (data) => {
        try {
          await AsyncStorage.setItem('token', data.token)
          navigation.navigate("TabNavigation")
        } catch (error) {
          console.log(error)
        }
      })
    }

    // const Validate = () => {
    //   var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    //   if (!email) {
    //     Toast.show('Email is required.');
    //   } else if (!email.match(validRegex)) {
    //     Toast.show('Invalid Email');
    //   } else if (!password) {
    //     Toast.show('Password is required.');
    //   }
    // }

    const clearInputs = () => {
      setInputs({
        email: '',
        password: ''
      })
    }
   
    const onChange = (e,type) => {
      setInputs({ ...inputs, [type]: e.nativeEvent.text})
    }
  

  return (
    <View>
      <View style={styles.cont1}>
        <Text style={styles.welcomeText}>¡Bienvenido!</Text>
        <Text style={styles.subText}>
          {" "}
          Estas a punto de comenzar una nueva aventura
        </Text>
      </View>
      <View style={styles.cont2}>
        <TextInput
          name="Email"
          style={styles.inputEmail}
          placeholderTextColor={"#A6A4A4"}
          placeholder="Email"
          value={inputs.email}
          onChange={(e) => onChange(e,"email")}
        ></TextInput>
        <TextInput
          name="Password"
          style={styles.inputPassword}
          placeholderTextColor={"#A6A4A4"}
          secureTextEntry={true}
          placeholder="Password"
          value={inputs.password}
          onChange={(e) => onChange(e,"password")}
        ></TextInput>
      </View>
      <View style={styles.cont3}>
        <Pressable
          style={styles.btn2}
          onPress={() => {
            sendCred()
            clearInputs()
            console.log(inputs)
          }}
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
  );
}

const styles = StyleSheet.create({
 
 
  title: {
    color: "#FDFDFD",
    fontWeight: "bold",
    fontSize: 32,
    textAlign: "center",
    marginTop: 190,
  },
  inputEmail: {
    height: "30%",
    width: "80%",
    borderBottomWidth: 1,
    alignSelf: "center",
    marginBottom: "5%",
    marginTop: 30,
    borderBottomColor: "#A6A4A4",
    fontSize: 17,
  },
  inputPassword: {
    height: "30%",
    width: "80%",
    borderBottomWidth: 1,
    borderBottomColor: "#A6A4A4",
    alignSelf: "center",
    marginTop: 10,
    fontSize: 17,
  },
  btn2: {
    backgroundColor: "#25C90A",
    width: "90%",
    height: "30%",
    justifyContent: "center",
    borderRadius: 40,
    alignSelf: "center",
    marginTop: 40,
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
    marginTop: "5%",
    marginBottom: 50,
  },
  welcomeText: {
    color: "#000000",
    fontWeight: "bold",
    fontSize: 25,
    alignSelf: "center",
  },
  subText: {
    color: "#000000",
    fontWeight: "bold",
    fontSize: 15,
    alignSelf: "center",
  },
  cont1: {
    flex: 1,
  },
  cont2: {
    flex: 3,
    justifyContent: "center",
    backgroundColor: "#FFF",
    width: "82%",
    alignSelf: "center",
  },
  cont3: {
    flex: 3,
  },
});
