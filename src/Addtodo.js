import React from 'react'
import {View, StyleSheet, TextInput, Button} from 'react-native'

export const AddTodo = props => {
    return (
        <View style={styles.block}>
            <TextInput style={styles.input}/>
            <Button title='Добавить'></Button>
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