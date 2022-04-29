import * as React from 'react'
import {View, Text, Alert} from 'react-native'
import {styles} from "../../../src/css/css"
import {CustomInput} from "../../../src/component/CustomInput"
import {CustomButton} from "../../../src/component/CutomButton"
import {useState} from "react"


export default function MailReset(props) {
    const [mail, setMail] = useState("")

    return (
        <View style={styles.container}>
            <CustomInput value={mail} setValue={setMail} placeholder="Ваша почата"/>

            <CustomButton onPress={() => Alert.alert("Функция временно не доступна")} text="Востоновить"/>
        </View>
    );
}

