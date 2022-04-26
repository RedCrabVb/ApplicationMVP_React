import React, {useState} from 'react'
import {View, StyleSheet, TextInput, Button, Alert} from 'react-native'

export const AddTodo = ({ onSubmit }) => {
    const [value, setValue] = useState('')

    const pressHandler = () => {
        if (value.trim()) {
            onSubmit(value)
            setValue('')
        } else {
            Alert.alert("Дело не может быть пустым")
        }
    }

    return (
        <View style={styles.block}>
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