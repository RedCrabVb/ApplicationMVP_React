import * as React from 'react';
import {View, Button} from 'react-native';
import {styles} from "../../../src/css/css"
import {CustomInput} from "../../../src/component/CustomInput";
import {useState} from "react";


export default function LogIn(props) {
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")

    return (
        <View style={styles.container}>
            <CustomInput value={login} setValue={setLogin} placeholder="Ваш логин"></CustomInput>
            <CustomInput value={password} setValue={setPassword} placeholder="Ваш пароль"></CustomInput>
            <Button  style={styles.button} title="Войти"></Button>
        </View>
    );
}
