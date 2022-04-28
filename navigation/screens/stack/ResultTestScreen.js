import * as React from 'react';
import {View, Text, ScrollView, Button} from 'react-native';
import homeName from "../../MainContainer"

export default function ResultTestScreen(props) {
    console.log(props)
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                style={{ fontSize: 26, fontWeight: 'bold' }}>Результаты теста</Text>
            <Text>Количество неверных ответво {props.route.params.countWrongAnswer}</Text>
            <Text>Прочие {props.route.params.test.idTest}</Text>
            <Button title="В главное меню" onPress={() => props.navigation.popToTop("Tabs")}></Button>
        </View>
    );
}