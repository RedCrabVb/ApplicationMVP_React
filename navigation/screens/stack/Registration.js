import * as React from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';



export default function Registration(props) {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder="Ваш логин"></TextInput>
            <TextInput style={styles.input} placeholder="Ваша почат"></TextInput>
            <TextInput style={styles.input} placeholder="Ваш пароль"></TextInput>
            <TextInput style={styles.input} placeholder="Повторите пароль ещё раз"></TextInput>
            <Button  style={styles.button} title="Регистрация"></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
    button: {
        padding: 10,
        paddingTop: 10,
        paddingHorizontal: 10
    },
    input: {
        width: '70%',
        borderStyle: 'solid',
        padding: 10,
        paddingBottom: 5,
        borderBottomWidth: 2,
        borderBottomColor: '#3949ab'
    }
});
