import * as React from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import {styles} from "../../../src/css/css"
import {CustomInput} from "../../../src/component/CustomInput";


export default function MailReset(props) {
    return (
        <View style={styles.container}>
            {/*<CustomInput style={styles.input} placeholder="Ваша почата"></CustomInput>*/}
            <Button  style={styles.button} title="Востоновить"></Button>
        </View>
    );
}

