import * as React from 'react';
import { View, Text, Button, AsyncStorage} from 'react-native';
import homeName from "../MainContainer";

export default function SettingsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => navigation.navigate(homeName)}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Settings Screen</Text>
            <Button title="Сбросить данные" onPress={() => {console.log("clear data"); AsyncStorage.clear()}}></Button>
            <Button title="Войти"></Button>
            <Button title="Регистрация"></Button>
            <Button title="Востоновить пароль"></Button>
        </View>
    );
}