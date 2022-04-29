import * as React from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import {styles} from "../../../src/css/css"
import {CustomInput} from "../../../src/component/CustomInput";
import {CustomButton} from "../../../src/component/CutomButton";
import {useState} from "react";


export default function Registration(props) {
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")
    const [mail, setMail] = useState("")

    const [login, setLogin] = useState("")

    return (
        <View style={styles.container}>
            <CustomInput value={login} setValue={setLogin} placeholder="Ваш логин"></CustomInput>
            <CustomInput value={mail} setValue={setMail} placeholder="Ваша почат"></CustomInput>

            <CustomInput value={password2} setValue={setPassword2}  placeholder="Ваш пароль"></CustomInput>
            <CustomInput value={password} setValue={setPassword} placeholder="Повторите пароль ещё раз"></CustomInput>
            <CustomButton text="Регистрация"></CustomButton>
        </View>
    );
}

