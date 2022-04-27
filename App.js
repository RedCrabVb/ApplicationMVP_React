import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useState} from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {HomeScreen} from "./src/screen/HomeScreen";
import {TodoScreen} from "./src/screen/TodoScreen";
import {TestAllScreen} from "./src/screen/TestAllScreen";
import {CurrentTestScreen} from "./src/screen/CurrentTestScreen";

const Stack = createNativeStackNavigator();

export default function App() {

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='home'
                screenOptions={{
                    headerShown: true
                }}
            >
                <Stack.Screen name="home" component={HomeScreen}></Stack.Screen>
                <Stack.Screen name="todo" component={TodoScreen} options={{headerShown: false}}></Stack.Screen>
                <Stack.Screen name="testall" component={TestAllScreen} options={{headerShown: false}}></Stack.Screen>
                <Stack.Screen name="currenttest" component={CurrentTestScreen} options={{headerShown: false}}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 20
    }
});
