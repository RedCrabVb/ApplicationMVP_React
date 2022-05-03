import * as React from 'react';
import {View, Text, Image, Button, StyleSheet, AsyncStorage, Alert} from 'react-native';
import {CustomButton} from "../../../src/component/CutomButton";
import {styles} from "../../../src/css/css"
import {saveResultTest} from "../../../src/utils/Api";
import {USER} from "../../../src/utils/Storage";
import {useState} from "react";



export default function ResultTestScreen(props) {
    const [sendResult, isSendResult] = useState(false)
    const params = props.route.params

    function millisToMinutesAndSeconds(millis) {
        let minutes = Math.floor(millis / 60000)
        let seconds = ((millis % 60000) / 1000).toFixed(0)
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds
    }

    React.useLayoutEffect(() => {
        props.navigation.setOptions({headerShown: false});
    }, [props.navigation])


    function sendResultFetch() {
        AsyncStorage.getItem(USER).then(u => JSON.parse(u)).then(user => {

            console.log(params)
            const apiAut = `${saveResultTest}?token=${user.token}&time=${params.endTime - params.startTime}&idTest=${params.test.idTest}&countRightAnswer=${params.countWrongAnswer}`;
            fetch(apiAut)
                .then((response) => response.json())
                .then((data) => {
                    console.log(data)
                    if ('error' in data) {
                        Alert.alert("Ошибка", "Ошибка при сохранение результатов, код: " + data.status)
                    } else {
                        isSendResult(true)
                    }
                })
                .catch((error) => Alert.alert(error))
        })
    }

    React.useEffect(() => {
            const unsubscribe = props.navigation.addListener('focus', () => {
                sendResultFetch()
            });
            return unsubscribe;
        }
    );


    return (
        <View style={styles.container}>
            <Text
                style={{ fontSize: 26, fontWeight: 'bold' }}>Результаты теста</Text>
            <Image source={require('../../../src/img/final_test.png')} />
            <Text style={{fontSize: 20}}>Количество неверных ответов: {props.route.params.countWrongAnswer}</Text>
            <Text style={{fontSize: 20}}>Время прохождения: {millisToMinutesAndSeconds(params.endTime - params.startTime)}</Text>
            <Text style={{fontSize: 20}}>Название теста: {params.test.test}</Text>
            <CustomButton text={sendResult ? "В главное меню" : "Отрпавить результаты"}
                          onPress={sendResult ? () => props.navigation.popToTop("Tabs") : sendResultFetch}></CustomButton>
        </View>
    );
}


