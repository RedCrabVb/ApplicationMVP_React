import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export const Container = ({children}) => {
    return (
        <View style={styles.container}>
            <Text text="hello"></Text>
            {children}
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