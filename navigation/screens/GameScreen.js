import * as React from 'react'
import {View, Text, ScrollView} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {testAll} from "../../src/utils/Api"
import {Test} from "../../src/component/Test"
import {useState} from "react"
import {styles} from "../../src/css/css"

export default function GameScreen({navigation}) {
    const [tests, setTests] = useState([])


    React.useEffect(() => {
            const unsubscribe = navigation.addListener('focus', () => {
                fetch(testAll)
                    .then((response) => response.json())
                    .then((data) => {
                        console.log("test: " + JSON.stringify(data))
                        if (!('error' in data)) {
                            setTests(data)
                        }
                    })
            });
            return unsubscribe
        }
    );


    return (
        <View>
            <Text
                style={styles.textBig}>Веберите тест</Text>
            <ScrollView style={{padding: '0%'}}>
                {tests.filter(t => t.active).map(test => <Test test={test} key={test.idTest}
                                                               navigation={navigation} ></Test>)}
            </ScrollView>
        </View>
    );
}