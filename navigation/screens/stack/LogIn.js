import * as React from 'react'
import {View, Button, Alert, AsyncStorage} from 'react-native'
import {styles} from "../../../src/css/css"
import {CustomInput} from "../../../src/component/CustomInput"
import {useState} from "react"
import {CustomButton} from "../../../src/component/CutomButton"
import {USER} from "../../../src/utils/Storage"
import {authorization} from "../../../src/utils/Api"
import {settingsName, gameName, homeName} from '../../../src/utils/ScreenNames'

export default function LogIn(props) {
    const [mail, setMail] = useState("")
    const [password, setPassword] = useState("")

    const handlerPressAut = () => {
        if (password.length < 4 || mail.length < 4) {
            Alert.alert("Почта и пароль должны быть больше 5 символов")
        } else {
            AsyncStorage.getItem(USER).then(u => JSON.parse(u)).then(user => {
                console.log(user);
                const apiAut = `${authorization}?email=${mail}&password=${password}`;
                const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                };
                fetch(apiAut, requestOptions)
                    .then((response) => response.json())
                    .then((data) => {
                        console.log(data)
                        if ('error' in data) {
                            Alert.alert("Ошибка", "Ошибка при регистрации, попробуте:\n1) изменить данные \n2) сбросить кэш \n3) подключиться позже \n4) обратиться к администратору ")
                        } else {
                            AsyncStorage.setItem(USER, JSON.stringify(data))
                            props.navigation.popToTop(settingsName)
                        }
                    })
                    .catch((error) => Alert.alert(error))
            });
        }
    }


    return (
        <View style={styles.container}>
            <CustomInput value={mail} setValue={setMail} placeholder="Ваш логин"></CustomInput>
            <CustomInput value={password} setValue={setPassword} secureTextEntry={true} placeholder="Ваш пароль" ></CustomInput>
            <CustomButton onPress={handlerPressAut} text="Войти"></CustomButton>
            <CustomButton text="Востоновить пароль" onPress={() => props.navigation.navigate("MailReset")} style={{bgColor: "red"}}></CustomButton>

        </View>
    );
}
