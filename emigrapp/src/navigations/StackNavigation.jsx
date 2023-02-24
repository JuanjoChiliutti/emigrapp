import React,{useEffect, useState} from "react";
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from "@react-native-async-storage/async-storage";

import Landing from "../screen/Landing";
import Login from "../screen/Login";
import TabNavigation from "./TabNavigation";

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  const [isLogged, setIsLogged] = useState(false)
  useEffect( async () =>{
    const token = await AsyncStorage.getItem('token');
    if(token){
      setIsLogged(true);
    }else{
      setIsLogged(false);
    }
  },[])

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ title: '', headerShown:false }} name="Landing" component={Landing} />
        {
          isLogged 
          ?
          <Stack.Screen options={{ title: '', headerShown:false}} name="TabNavigation" component={TabNavigation}/>
          :
          <Stack.Screen options={{ title: '', headerShown:false }} name="Login" component={Login}/>
        }
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}