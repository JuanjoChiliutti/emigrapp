import React from "react";
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Landing from "../screen/Landing";
import Login from "../screen/Login";
import TabNavigation from "./TabNavigation";


const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ title: '', headerShown:false }} name="Landing" component={Landing} />
        <Stack.Screen options={{ title: '', headerShown:false }} name="Login" component={Login}/>
        <Stack.Screen options={{ title: '', headerShown:false}} name="TabNavigation" component={TabNavigation}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}