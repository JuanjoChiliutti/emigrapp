import React from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  Pressable,
} from "react-native";

import { useNavigation } from "@react-navigation/native";


export default function SignupInputs() {

    const navigation = useNavigation();

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
          name="Name"
          style={styles.inputEmail}
          placeholderTextColor={"#A6A4A4"}
          placeholder="Name"
        ></TextInput>
        <TextInput
          name="Email"
          style={styles.inputEmail}
          placeholderTextColor={"#A6A4A4"}
          placeholder="Email"
        ></TextInput>
        <TextInput
          name="Password"
          style={styles.inputPassword}
          placeholderTextColor={"#A6A4A4"}
          secureTextEntry={true}
          placeholder="Password"
        ></TextInput>
        <TextInput
          name="Confirm-Password"
          style={styles.inputPassword}
          placeholderTextColor={"#A6A4A4"}
          secureTextEntry={true}
          placeholder="Confirm Password"
        ></TextInput>
      </View>
      <View style={styles.cont3}>
        <Pressable
          style={styles.btn2}
          onPress={() => {
            navigation.navigate("TabNavigation");
          }}
        >
          <Text style={styles.textBtn}>Registrar</Text>
        </Pressable>

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
    height: "20%",
    width: "80%",
    borderBottomWidth: 1,
    alignSelf: "center",
    marginTop: 15,
    borderBottomColor: "#A6A4A4",
    fontSize: 17,
  },
  inputPassword: {
    height: "20%",
    width: "80%",
    borderBottomWidth: 1,
    borderBottomColor: "#A6A4A4",
    alignSelf: "center",
    marginTop: 15,
    fontSize: 17,
  },
  btn2: {
    backgroundColor: "#25C90A",
    width: "90%",
    height: "50%",
    justifyContent: "center",
    borderRadius: 40,
    alignSelf: "center",
    marginBottom: 50,
    marginTop: 30,
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
    marginBottom: 20,
  },
  cont2: {
    flex: 3,
    justifyContent: "center",
    backgroundColor: "#FFF",
    width: "82%",
    alignSelf: "center",
    marginBottom: 10,
  },
  cont3: {
    flex: 3,
  },
})