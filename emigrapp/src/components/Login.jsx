import React from "react";
import { useForm, useController } from "react-hook-form";
import { Button, Text, TextInput, View } from "react-native";

export default function Login(){
    const {control, handleSubmit} = useForm();

    return(
        <View>
            <Text>Email</Text>
            <TextInput name="Email" control={control}></TextInput>
            <Text>Password</Text>
            <TextInput name="Password" control={control}></TextInput>
            {/* <Button onPress={(onSubmit)}/> */}
        </View>
    )
};