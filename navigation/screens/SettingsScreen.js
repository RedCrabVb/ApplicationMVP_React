import * as React from 'react';
import {View, Text, Button, AsyncStorage, StyleSheet} from 'react-native';
import {styles} from "../../src/css/css"

import {CustomButton} from "../../src/component/CutomButton";

export default function SettingsScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.textBig}>Логин: </Text>
            <Text style={styles.textBig}>Почта: </Text>
            <View style={{paddingBottom: '50%'}}></View>
            <CustomButton text="Войти" onPress={() => navigation.navigate("LogIn")}></CustomButton>
            <CustomButton text="Регистрация" onPress={() => navigation.navigate("Registration")}></CustomButton>
            <CustomButton text="Сбросить данные" onPress={() => {console.log("clear data"); AsyncStorage.clear()}}></CustomButton>
            <Text style={{paddingTop: '30%'}}>Верисия: 2.5</Text>
        </View>
    );
}

