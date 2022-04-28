import * as React from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';



export default function MailReset(props) {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder="Ваша почата"></TextInput>
            <Button  style={styles.button} title="Востоновить"></Button>
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
        paddingBottom: 5,
        borderBottomWidth: 2,
        borderBottomColor: '#3949ab'
    }
});
