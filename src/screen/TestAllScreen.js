import {StyleSheet, Text, View, TextInput, Button, Alert, AsyncStorage, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/core'
import React, {useState} from "react";
import {Test} from "../component/Test";

export const TestAllScreen = () => {
    const apiUrl = "http://servermvp.ru:49207/api/testAll"

    const [tests, setTests] = useState([])

    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => setTests(data));

    const navigation = useNavigation()

    return (
        <View>
            <Text>TestAll</Text>
            <Button onPress={() => navigation.navigate("home")} title="home"/>

            <ScrollView>
                {tests.map(test => <Test test={test}></Test>)}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    input:{
        width:'100%',
        height:50,
        marginLeft:16,
        maxWidth:239
    }
});
