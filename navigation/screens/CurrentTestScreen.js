import {StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/core'
import React, {useState, useEffect} from "react";
import {testCurrent} from "../../src/utils/Api";
import {BarCodeScanner} from "expo-barcode-scanner";



export const CurrentTestScreen = (params) => {
    const apiUrl = testCurrent + params.route.params.idTest

    const [test, setTest] = useState({})
    const [isLoading, setLoading] = useState(true)

    const [countWrongAnswer, setCountWrongAnswer] = useState(0)
    const [currentQuestion, setCurrentQuestion] = useState(0)

    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [text, setText] = useState('Not yet scanned')

    const incrementQuestion = () => {
        setCurrentQuestion(currentQuestion + 1)
    }

    const incrementCountWrongAnswer = () => {
        setCountWrongAnswer(countWrongAnswer + 1)
    }

    const pressHandler = () => {
        // Alert.alert("Ответили")
        incrementQuestion()
    }



    const navigation = useNavigation()

    useEffect(() => {
        if (isLoading) {
            fetch(apiUrl)
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    setTest(data)
                })
                .catch((error) => alert(error))
                .finally(() => setLoading(false));
            console.log("test" + test)
        }
    })

    const askForCameraPermission = () => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })()
    }

    // Request Camera Permission
    useEffect(() => {
        askForCameraPermission();
    }, []);

    // What happens when we scan the bar code
    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        setText(data)
        console.log('Type: ' + type + '\nData: ' + data)
    };

    // Check permissions and return the screens
    if (hasPermission === null) {
        return (
            <View style={styles.container}>
                <Text>Requesting for camera permission</Text>
            </View>)
    }
    if (hasPermission === false) {
        return (
            <View style={styles.container}>
                <Text style={{ margin: 10 }}>No access to camera</Text>
                <Button title={'Allow Camera'} onPress={() => askForCameraPermission()} />
            </View>)
    }

    return (
        <View>

            {
                isLoading ? (
                    <ActivityIndicator>
                    </ActivityIndicator>
                ) : (
                    <View style={styles.block}>
                        <Text>{currentQuestion} / {test.answerList.length}</Text>
                        <Text>Вопрос: {test.answerList[currentQuestion].question}</Text>
                        <Text>Комментарий: {test.answerList[currentQuestion].comment}</Text>
                        <Text>Ответ: {test.answerList[currentQuestion].response}</Text>
                    </View>
                )
            }

            <View style={styles.container}>

                <View style={styles.barcodebox}>
                    <BarCodeScanner
                        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                        style={{ height: 400, width: 400 }} />
                </View>
                <Text style={styles.maintext}>{text}</Text>

                {scanned && <Button title={'Scan again?'} onPress={() => setScanned(false)} color='tomato' />}
            </View>

            <Button onPress={pressHandler} title="Отправить"></Button>

        </View>
    );
}

const styles = StyleSheet.create({
    block : {
     paddingHorizontal: 50,
    },
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    maintext: {
        fontSize: 16,
        margin: 20,
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