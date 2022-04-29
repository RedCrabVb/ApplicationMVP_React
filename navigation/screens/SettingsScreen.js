import * as React from 'react';
import {View, Text, Button, AsyncStorage, StyleSheet} from 'react-native';
import {styles} from "../../src/css/css"

import {CustomButton} from "../../src/component/CutomButton";
import {useEffect, useState} from "react";
import {USER} from "../../src/utils/Storage";

export default function SettingsScreen({navigation}) {
    const [login, setLogin] = useState("");
    const [mail2, setMail2] = useState("");


    React.useEffect(() => {
            const unsubscribe = navigation.addListener('focus', () => {
                AsyncStorage.getItem(USER).then(data => {
                    if (data != null) {
                        const user = (JSON.parse(data));
                        setLogin(user.username);
                        setMail2(user.email);
                    }
                });
                console.log("userEffect")
            });
            return unsubscribe;
        }
    );

    return (
        <View style={styles.container}>
            <Text style={styles.textBig}>Логин: {login}</Text>
            <Text style={styles.textBig}>Почта: {mail2}</Text>
            <View style={{paddingBottom: '50%'}}></View>
            <CustomButton text="Войти" onPress={() => navigation.navigate("LogIn")}></CustomButton>
            <CustomButton text="Регистрация" onPress={() => navigation.navigate("Registration")}></CustomButton>
            <CustomButton text="Сбросить данные" onPress={() => {
                console.log("clear data");
                AsyncStorage.clear()
            }}></CustomButton>
            <Text style={{paddingTop: '30%'}}>Верисия: 2.5</Text>
        </View>
    );
}

