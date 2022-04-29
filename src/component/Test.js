import React from 'react'
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native'
import {currentTestName} from "../utils/ScreenNames";

export const Test = ({test, navigation}) => {

    return (
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {console.log("idTest" + test.idTest); navigation.navigate(currentTestName, {idTest: test.idTest})}}>
            <View style={styles.test}>
                <Text style={styles.textTest}>{test.test}</Text>
                <Text style={styles.textTest}>{test.description}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    test: {
        alignItems: 'center',
        padding: 15,
        borderWidth: 15,
        borderColor: '#eee',
        borderRadius: 5
    },
    textTest: {
        flexDirection: 'row',
        alignItems: 'center',
    }
})