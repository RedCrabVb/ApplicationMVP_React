import {StyleSheet, Text, View, Button, ActivityIndicator} from 'react-native'
import React, {useState, useEffect} from "react"
import {testCurrent} from "../../../src/utils/Api"
import {BarCodeScanner} from "expo-barcode-scanner"
import {CustomButton} from "../../../src/component/CutomButton"
import {resultTestName} from "../../../src/utils/ScreenNames";

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

    const [hasPermission, setHasPermission] = useState(null);
    const [text, setText] = useState('Not yet scanned')

    const incrementQuestion = () => {
        setCurrentQuestion(currentQuestion + 1)
        setError(false)
    }

    const incrementCountWrongAnswer = () => {
        setCountWrongAnswer(countWrongAnswer + 1)
        setError(true)
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
                    console.log("load test: " + data.idTest);
                    setStartTime(Date.now());
                    setAnswerList(data.answerList);

                    setTest(data);
                })
                .catch((error) => alert(error))
                .finally(() => setLoading(false));
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
        setResponseCurrent(answerList.find(a => a.hash == x.data).response)
        console.log('Type: ' + x.type + '\nData: ' + x.data)
    };

    if (hasPermission === null) {
        return (
            <View style={styles.container}>
                <Text>Requesting for camera permission</Text>
            </View>)
    }
    if (hasPermission === false) {
        return (
            <View style={styles.container}>
                <Text style={{margin: 10}}>No access to camera</Text>
                <Button title={'Allow Camera'} onPress={() => askForCameraPermission()}/>
            </View>)
    }

    return (
        <View style={styles.container}>

            {
                isLoading ? (
                    <ActivityIndicator>
                    </ActivityIndicator>
                ) : (
                    <View style={styles.block}>
                        <Text style={styles.maintext}>{currentQuestion} / {answerList.length}</Text>
                        <Text style={styles.maintext}>Вопрос: {answerList[currentQuestion].question}</Text>
                        <Text style={styles.maintext}>Ответ: {responseCurrent}</Text>
                        <Text style={styles.maintext}>Комментарий: {answerList[currentQuestion].comment}</Text>
                    </View>
                )
            }


            <View style={styles.barcodebox}>
                <BarCodeScanner
                    onBarCodeScanned={handleBarCodeScanned}
                    style={{height: 400, width: 400}}/>
            </View>
            {
                !error ? (
                    <View>
                        {/*<CircularProgress*/}
                        {/*    radius={100}*/}
                        {/*    value={value}*/}
                        {/*    textColor='#222'*/}
                        {/*    fontSize={20}*/}
                        {/*    valueSuffix={'%'}*/}
                        {/*    activeStrokeColor={'tomato'}*/}
                        {/*    inActiveStrokeOpacity={0.2}*/}
                        {/*    duration={4000}*/}
                        {/*/>*/}

                    </View>
                ) : (<Text>Ошибка</Text>)
            }
            <Text>{text}</Text>

            <CustomButton onPress={pressHandler} text="Отправить"></CustomButton>

        </View>
    );
}

const styles = StyleSheet.create({
    block: {
        paddingHorizontal: 50,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30
    },
    maintext: {
        fontSize: 14,
        margin: 10,
    },
    barcodebox: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 300,
        width: 300,
        overflow: 'hidden',
        borderRadius: 30,
        backgroundColor: 'tomato'
    }
});