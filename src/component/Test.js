import React from 'react'
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native'
import {currentTestName} from "../utils/ScreenNames";

export const Test = ({test, navigation}) => {

    return (
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {console.log("idTest" + test.idTest); navigation.navigate(currentTestName, {idTest: test.idTest})}}>
            <View style={styles.test}>
                <Text>{test.test}</Text>
                <Text>{test.description}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    test: {
        alignItems: 'center',
        padding: 20,
        borderWidth: 2,
        borderColor: '#2f96cd',
        borderRadius: 5,
        paddingHorizontal: '20%'
    }
})