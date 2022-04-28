import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useState} from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import MainContainer from "./navigation/MainContainer";


export default function App() {

    return (
        <MainContainer/>
    );
}

//        <NavigationContainer>
//             <Stack.Navigator
//                 initialRouteName='home'
//                 screenOptions={{
//                     headerShown: true
//                 }}
//             >
//                 <Stack.Screen name="home" component={HomeScreen}></Stack.Screen>
//                 <Stack.Screen name="todo" component={TodoScreen} options={{headerShown: false}}></Stack.Screen>
//                 <Stack.Screen name="testall" component={TestAllScreen} options={{headerShown: false}}></Stack.Screen>
//                 <Stack.Screen name="currenttest" component={CurrentTestScreen} options={{headerShown: false}}></Stack.Screen>
//                 <Stack.Screen name="scan" component={ScanQrScreen} options={{headerShown: false}}></Stack.Screen>
//             </Stack.Navigator>
//         </NavigationContainer>

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 20
    }
});
