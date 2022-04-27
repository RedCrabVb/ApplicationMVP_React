import React, {useState} from 'react'
import {View, StyleSheet, TextInput, Button, Alert, Text, AsyncStorage} from 'react-native'

export const AddTodo = ({ onSubmit }) => {
    const LOGIN = "LOGIN";

    const [value, setValue] = useState('')
    const [login, setLogin] = useState('')

    const pressHandler = () => {
        if (value.trim()) {
            onSubmit(value)
            setValue('')
        } else {
            Alert.alert("Дело не может быть пустым")
        }
    }

    AsyncStorage.getItem(LOGIN).then(login => {
        setLogin(login)
    })

    return (
        <View style={styles.block}>
            <Text style={styles.block}>{login}</Text>

            <TextInput style={styles.input}
                onChangeText={text => setValue(text)}
                value={value}
                placeholder="Введите название дела"/>
            <Button title='Добавить' onPress={pressHandler}/>

        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    input: {
        width: '70%',
        borderStyle: 'solid',
        padding: 10,
        borderBottomWidth: 2,
        borderBottomColor: '#3949ab'
    }
})