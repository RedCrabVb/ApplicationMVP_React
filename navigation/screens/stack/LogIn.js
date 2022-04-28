import * as React from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';



export default function LogIn(props) {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder="Ваш логин"></TextInput>
            <TextInput style={styles.input} placeholder="Ваш пароль"></TextInput>
            <Button  style={styles.button} title="Войти"></Button>
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
        borderBottomWidth: 2,
        borderBottomColor: '#3949ab'
    }
});
