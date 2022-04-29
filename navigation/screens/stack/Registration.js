import * as React from 'react';
import {View, Text, TextInput, Button, Alert, AsyncStorage} from 'react-native';
import {styles} from "../../../src/css/css"
import {CustomInput} from "../../../src/component/CustomInput";
import {CustomButton} from "../../../src/component/CutomButton";
import {useState} from "react";
import {setPersonData} from "../../../src/utils/Api";
import {USER} from "../../../src/utils/Storage";
import {settingsName} from "../../MainContainer";

export default function Registration(props) {

    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")
    const [mail, setMail] = useState("")
    const [login, setLogin] = useState("")

    const handlerPressReg = () => {
        if (password != password2 || password.length < 4) {
            Alert.alert("Пароли должны быть одинаковы и больше 4 символов")
        } else if (login.length < 4 || mail.length < 4) {
            Alert.alert("Логин и почта должны быть больше 5 символов")
        } else {
            AsyncStorage.getItem(USER).then(u => JSON.parse(u)).then(user => {
                console.log(user)
                const apiReg = `${setPersonData}?username=${login}&email=${mail}&password=${password}`
                const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ token: user.token})
                };
                fetch(apiReg, requestOptions)
                    .then((response) => response.json())
                    .then((data) => {
                        console.log(data);
                        AsyncStorage.setItem(USER, JSON.stringify(data))
                    })
                    .catch((error) => alert(error))
                    .finally(() => props.navigation.popToTop(settingsName));
            });
        }
    }

    return (
        <View style={styles.container}>
            <CustomInput value={login} setValue={setLogin} placeholder="Ваш логин"></CustomInput>
            <CustomInput value={mail} setValue={setMail} placeholder="Ваша почта"></CustomInput>

            <CustomInput secureTextEntry={true} value={password2} setValue={setPassword2}  placeholder="Ваш пароль"></CustomInput>
            <CustomInput secureTextEntry={true} value={password} setValue={setPassword} placeholder="Повторите пароль ещё раз"></CustomInput>
            <CustomButton onPress={handlerPressReg} text="Регистрация"></CustomButton>
        </View>
    );
}

