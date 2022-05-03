import React from 'react'
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native'
import {currentTestName} from "../utils/ScreenNames";

export const Test = ({test, navigation}) => {

    return (
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {console.log("idTest" + test.idTest); navigation.navigate(currentTestName, {idTest: test.idTest})}}
            style={{padding: '2%'}}>
            <View style={styles.test}>
                <Text style={{textAlign: 'center', fontSize: 17}}>{test.test}</Text>
                <Text style={{padding: 5, fontSize: 12}}>{test.description}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    test: {
        padding: 10,
        borderWidth: 2,
        borderColor: '#2f96cd',
        borderRadius: 3
    }
})