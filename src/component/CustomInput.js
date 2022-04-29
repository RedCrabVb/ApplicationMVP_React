import React from 'react'
import {TextInput, View, StyleSheet} from 'react-native'

export const CustomInput = ({value,
                                setValue,
                                placeholder,
                                secureTextEntry = false}) => {

    return (
        <View style={styles.container}>
            <TextInput
                value={value}
                onChangeText={setValue}
                placeholder={placeholder}
                style={styles.input}
                secureTextEntry={secureTextEntry}
            >

            </TextInput>
        </View>
    );
};

const styles = StyleSheet.create({
    container : {
        backgroundColor: 'white',
        width: '100%',

        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,

        paddingHorizontal: 10,
        marginVertical: 5
    },
    input: {}
});