import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export const Container = ({children}) => {
    return (
        <View style={styles.container}>
            {children}
            <Text text="hello"></Text>
            <Text>hello</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        paddingVertical: 12,
        marginLeft: 16,
        paddingHorizontal: 22
    }
})