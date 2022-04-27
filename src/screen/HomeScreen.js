import {StyleSheet, Text, View, ScrollView, Button} from 'react-native';
import {useNavigation} from '@react-navigation/core'
import React, {useState} from "react";

export const HomeScreen = () => {
    const navigation = useNavigation()

    return (
        <View>
            <Text>Home</Text>
            <Button onPress={() => navigation.navigate("todo")} title="todo"/>
        </View>
    );
}

const styles = StyleSheet.create({});
