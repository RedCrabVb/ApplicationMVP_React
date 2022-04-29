import * as React from 'react';
import {View, Button} from 'react-native';
import {styles} from "../../../src/css/css"
import {CustomInput} from "../../../src/component/CustomInput";
import {useState} from "react";
import {CustomButton} from "../../../src/component/CutomButton";


export default function LogIn(props) {
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")

    return (
        <View style={styles.container}>
            <CustomInput value={login} setValue={setLogin} placeholder="Ваш логин"></CustomInput>
            <CustomInput value={password} setValue={setPassword} secureTextEntry={true} placeholder="Ваш пароль" ></CustomInput>
            <CustomButton onPress={() => console.log("press")} text="Войти"></CustomButton>
            <CustomButton text="Востоновить пароль" onPress={() => props.navigation.navigate("MailReset")} style={{bgColor: "red"}}></CustomButton>

        </View>
    );
}
