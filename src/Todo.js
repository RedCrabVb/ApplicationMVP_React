import React from 'react'
import {Text, View, StyleSheet} from 'react-native'

export const Todo = ({todo}) => {
    return (
        <View style={styles.todo}>
            <Text>{todo.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    todo: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderWidth: 15,
        borderColor: '#eee',
        borderRadius: 5
    }
})