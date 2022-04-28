import {StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/core'
import React, {useState, useEffect} from "react";
import {testCurrent} from "../../src/utils/Api";

export const CurrentTestScreen = (params) => {
    const apiUrl = testCurrent + params.route.params.idTest

    const [test, setTest] = useState({})
    const [isLoading, setLoading] = useState(true)

    const [countWrongAnswer, setCountWrongAnswer] = useState(0)
    const [currentQuestion, setCurrentQuestion] = useState(0)

    const incrementQuestion = () => {
        setCurrentQuestion(currentQuestion + 1)
    }

    const incrementCountWrongAnswer = () => {
        setCountWrongAnswer(countWrongAnswer + 1)
    }

    const pressHandler = () => {
        Alert.alert("Ответили")
        incrementQuestion()
    }



    const navigation = useNavigation()

    useEffect(() => {
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {console.log(data); setTest(data) })
            .catch((error) => alert(error))
            .finally(() => setLoading(false));
        console.log("isLoading" + isLoading)
        console.log("test" + test)
    })

    return (
        <View>
            <Text>TestAll</Text>
            {/*<Button onPress={() => navigation.navigate("currenttest")} title="home"></Button>*/}

            {
                isLoading ? (
                    <ActivityIndicator></ActivityIndicator>
                ) : (
                    <View>
                        <Text>Вопрос: {test.answerList[currentQuestion].question}</Text>
                        <Text>Комментарий: {test.answerList[currentQuestion].comment}</Text>
                        <Text>Ответ: {test.answerList[currentQuestion].response}</Text>
                    </View>
                )
            }


            <Button onPress={pressHandler} title="Отправить"></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        width: '100%',
        height: 50,
        marginLeft: 16,
        maxWidth: 239
    }
});
