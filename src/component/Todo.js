import React from 'react'
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native'

export const Todo = ({todo}) => {
    return (
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => console.log("Pressed", todo.id)}>
            <View style={styles.todo}>
                <Text>{todo.title}</Text>
            </View>
        </TouchableOpacity>
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