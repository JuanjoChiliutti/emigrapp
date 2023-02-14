import React, { useState } from "react";
import { useForm, useController } from "react-hook-form";
import { Button, ImageBackground, Text, TextInput, View, StyleSheet, Switch } from "react-native";
import image from "../../assets/bgemigrapp.jpg";

export default function Login() {
    const { control, handleSubmit } = useForm();
    const [active, setActive] = useState(false)

    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <View style={styles.loginSection}>
                    <View style={styles.switchBtn}>
                        
                        <View style={styles.btnLogin}><Text style={styles.btnLoginTxt}>Log in</Text></View>
                        <View style={styles.btnSignup}><Text style={styles.btnSignupTxt}>Sign Up</Text></View>

                    </View>
                    <Text style={styles.textEmail}>Email</Text>
                    <TextInput style={styles.inputEmail} name="Email" control={control}></TextInput>
                    <Text style={styles.textPassword}>Password</Text>
                    <TextInput style={styles.inputPassword} secureTextEntry={true} name="Password" control={control}></TextInput>
                </View>
                {/* <Button onPress={(onSubmit)}/> */}
            </ImageBackground>
        </View>
    )


};
const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        width: '100%',
        height: '100%',
        flex: 6,
        // justifyContent: "center",
        // alignItems: "center",
    },
    textEmail: {

    },
    textPassword: {

    },
    inputEmail: {

    },
    inputPassword: {

    },
    loginSection: {
        backgroundColor: "#FFFFFF",
        width: '82%',
        height: '64%',
        borderRadius: 40,
        
    },
    switchBtn: {
        width: '90%',
        height: '13%',
        backgroundColor: 'grey',
        borderRadius: 40,
        marginTop: '7%',
        marginLeft: '5%',
        marginBottom: '7%',
        flexDirection: "row",
    
    },
    btnLogin: {
        backgroundColor: '#25C90A',
        width:'55%',
        alignItems: 'center',
        justifyContent:'center',
        borderRadius:40,
        
    },
    btnSignup: {
        width: '45%',
        justifyContent:'center',
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
})