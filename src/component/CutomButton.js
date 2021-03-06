import React from 'react'
import {Text, View, StyleSheet, Pressable, TouchableOpacity} from 'react-native'

export const CustomButton = ({onPress, text, disabled = false}) => {

    return (
        <TouchableOpacity activeOpacity={0.5} disabled={disabled} onPress={onPress} style={disabled ? styles.containerDisabled : styles.container}>
            <Text style={styles.text}>
                {text}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container : {
        backgroundColor: '#3949ab',
        width: '100%',

        padding: 15,
        marginVertical: 5,

        alignItems: 'center',
        borderRadius: 5
    },
    containerDisabled : {
        backgroundColor: '#b3bdfc',
        width: '100%',

        padding: 15,
        marginVertical: 5,

        alignItems: 'center',
        borderRadius: 5
    },
    text: {
        fontWeight: 'bold',
        color: 'white'
    }
});