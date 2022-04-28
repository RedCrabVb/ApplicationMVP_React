import * as React from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import {styles} from "../../../src/css/css"
import {CustomInput} from "../../../src/component/CustomInput";


export default function Registration(props) {
    return (
        <View style={styles.container}>
            {/*<CustomInput style={styles.input} placeholder="Ваш логин"></CustomInput>*/}
            {/*<CustomInput style={styles.input} placeholder="Ваша почат"></CustomInput>*/}
            {/*<CustomInput style={styles.input} placeholder="Ваш пароль"></CustomInput>*/}
            {/*<CustomInput style={styles.input} placeholder="Повторите пароль ещё раз"></CustomInput>*/}
            <Button  style={styles.button} title="Регистрация"></Button>
        </View>
    );
}

