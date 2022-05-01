import {StyleSheet, Text, View, Button, ScrollView, ActivityIndicator, Alert} from 'react-native'
import React, {useState, useEffect} from "react"
import {testCurrent} from "../../../src/utils/Api"
import {BarCodeScanner} from "expo-barcode-scanner"
import {CustomButton} from "../../../src/component/CutomButton"
import {resultTestName} from "../../../src/utils/ScreenNames";
import { AnimatedCircularProgress } from 'react-native-circular-progress';

export const CurrentTestScreen = (params) => {
    const apiTest = testCurrent + params.route.params.idTest

    const [test, setTest] = useState({})
    const [answerList, setAnswerList] = useState([])
    const [responseCurrent, setResponseCurrent] = useState("")
    const [error, setError] = useState(false)
    const [isLoading, setLoading] = useState(true)

    const [countWrongAnswer, setCountWrongAnswer] = useState(0)
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [startTime, setStartTime] = useState(0)

    const [timer, setTimer] = useState({})
    const [statusBar, setStatusBar] = useState(0)

    const [hasPermission, setHasPermission] = useState(null);
    const [text, setText] = useState('Нет данных')
    const [qrScanEnable, setQRScanEnable] = useState(true)

    const incrementQuestion = () => {
        setCurrentQuestion(currentQuestion + 1)
    }

    const incrementCountWrongAnswer = () => {
        setCountWrongAnswer(countWrongAnswer + 1)
        setError(true)
        setTimer(setInterval(() => setStatusBar(statusBar + 60), 1000 * Math.min(countWrongAnswer, 5)))
        setTimeout(() => {
            setStatusBar(100)
            clearInterval(timer)
            setError(false)
        }, 1000 * Math.min(countWrongAnswer, 5))
    }

    const pressHandler = () => {


        if (text == answerList[currentQuestion].hash) {
            setText("")
            if (currentQuestion + 1 == answerList.length) {
                params.navigation.navigate(resultTestName, {
                    countWrongAnswer: countWrongAnswer,
                    test: test,
                    startTime: startTime,
                    endTime: Date.now()
                });
            } else {
                incrementQuestion();
            }
        } else {
            incrementCountWrongAnswer();
        }
    }


    useEffect(() => {
        if (isLoading) {
            fetch(apiTest)
                .then((response) => response.json())
                .then((data) => {
                    if (!('error' in data)) {
                        console.log("load test: " + data.idTest);
                        setStartTime(Date.now());
                        setAnswerList(data.answerList);

                        setTest(data);
                        setLoading(false)
                    } else {
                        Alert.alert("Ошибки при загрзуки теста, код: " + data.status)
                    }
                })
                .catch((error) => alert(error))
        }
    })

    const askForCameraPermission = () => {
        (async () => {
            const {status} = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })()
    }

    useEffect(() => {
        askForCameraPermission();
    }, []);

    const handleBarCodeScanned = (x) => {
        setText(x.data)
        setQRScanEnable(false)
        if (answerList.map(a => a.hash).includes(x.data)) {
            setResponseCurrent(answerList.find(a => a.hash == x.data).response)
            console.log('Type: ' + x.type + '\nData: ' + x.data)
        } else {
            Alert.alert("Отсканирован qr код, которые не относится к тесту")
        }
        setTimeout(() => setQRScanEnable(true), 2300)
    }

    if (hasPermission === null) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#ce1c1c" />
                <Text>Запрашиваю разрешение камеры</Text>
            </View>)
    }
    if (hasPermission === false) {
        return (
            <View style={styles.container}>
                <Text style={{margin: 10}}>Нет доступа к камере</Text>
                <CustomButton text={'Разрешить доступ'} onPress={askForCameraPermission}/>
            </View>)
    }

    return (
        <View style={styles.container}>

            {
                isLoading ? (
                    <ActivityIndicator>
                    </ActivityIndicator>
                ) : (
                    <ScrollView style={styles.block}>
                        <Text style={styles.maintext}>{currentQuestion} / {answerList.length}</Text>
                        <Text style={styles.headerText}>Вопрос:</Text>
                        <Text style={styles.maintext}>{answerList[currentQuestion].question}</Text>
                        <Text style={styles.headerText}>Ответ:</Text>
                        <Text style={styles.maintext}>{responseCurrent}</Text>
                        <Text style={styles.headerText}>Комментарий</Text>
                        <Text style={styles.maintext}>{answerList[currentQuestion].comment}</Text>
                    </ScrollView>
                )
            }

            {
                !error ? (
                    <View></View>
                ) : (<View style={{        alignItems: 'center',
                    justifyContent: 'center'}} >
                    <ActivityIndicator size="large" color="#c40a0a" />
                    <Text style={{color: '#c40a0a'}}>Ошибка</Text>
                </View>)
            }


            <View style={styles.barcodebox}>
                <BarCodeScanner
                    onBarCodeScanned={qrScanEnable ? handleBarCodeScanned : undefined}
                    style={{height: 400, width: 400}}/>
            </View>

            <CustomButton disabled={error} onPress={pressHandler} text="Отправить"></CustomButton>

        </View>
    );
}

const styles = StyleSheet.create({
    block: {
        paddingHorizontal: 30,
        marginVertical: 20
    },
    container: {
        flex: 1,
        paddingHorizontal: 30,
        paddingVertical: 30
    },
    maintext: {
        fontSize: 14,
        margin: 4,
    },
    headerText: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    barcodebox: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '40%',
        width: '100%',
        overflow: 'hidden',
        borderRadius: 30,
        backgroundColor: '#39aae8'
    }
});