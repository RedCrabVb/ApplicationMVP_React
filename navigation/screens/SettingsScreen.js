import * as React from 'react';
import {View, Text, Button, AsyncStorage, StyleSheet} from 'react-native';
import homeName from "../MainContainer";

export default function SettingsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button title="Сбросить данные" onPress={() => {console.log("clear data"); AsyncStorage.clear()}}></Button>
            <Button title="Войти" onPress={() => navigation.navigate("LogIn")}></Button>
            <Button title="Регистрация" onPress={() => navigation.navigate("Registration")}></Button>
            <Button title="Востоновить пароль" onPress={() => navigation.navigate("MailReset")}></Button>
        </View>
    );
}
