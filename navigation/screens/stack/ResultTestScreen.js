import * as React from 'react';
import {View, Text, ScrollView, Button, StyleSheet} from 'react-native';
import {CustomButton} from "../../../src/component/CutomButton";
import {styles} from "../../../src/css/css"



export default function ResultTestScreen(props) {
    console.log(props)
    return (
        <View style={styles.container}>
            <Text
                style={{ fontSize: 26, fontWeight: 'bold' }}>Результаты теста</Text>
            <Text>Количество неверных ответво {props.route.params.countWrongAnswer}</Text>
            <Text>Прочие {props.route.params.test.idTest}</Text>
            <CustomButton text="В главное меню" onPress={() => props.navigation.popToTop("Tabs")}></CustomButton>
        </View>
    );
}


