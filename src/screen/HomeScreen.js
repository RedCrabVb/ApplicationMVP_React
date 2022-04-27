import {StyleSheet, Text, View, TextInput, Button, Alert, AsyncStorage} from 'react-native';
import {useNavigation} from '@react-navigation/core'
import React, {useState} from "react";

export const HomeScreen = () => {
    const LOGIN = "LOGIN";

    const [login, setLogin] = useState('')

    const pressHandler = () => {
        if (login.trim()) {
            AsyncStorage.setItem(LOGIN, login)
            setLogin('')
        } else {
            Alert.alert("Login не может быть пустым")
        }
    }


    const navigation = useNavigation()

    return (
        <View>
            <Text>Home</Text>
            <Button onPress={() => navigation.navigate("todo")} title="todo"/>

            <TextInput
                onChangeText={text => setLogin(text)}
                style={styles.input}
                placeholder="Email"
            />
            <Button title='Сохранить' onPress={pressHandler}/>
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
