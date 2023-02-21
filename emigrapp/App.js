import React from "react";
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Landing from "./src/components/Landing";
import Login from "./src/components/Login";
import Home from "./src/components/Home";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ title: '', headerShown:false }} name="Landing" component={Landing} />
        <Stack.Screen options={{ title: '', headerShown:false }} name="Login" component={Login}/>
        <Stack.Screen options={{ title: '', headerShown:false }} name="Home" component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}