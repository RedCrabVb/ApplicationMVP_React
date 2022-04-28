import * as React from 'react';
import {View, Text, ScrollView} from 'react-native';
import homeName from "../MainContainer";
import {testAll} from "../../src/utils/Api";
import {Test} from "../../src/component/Test";
import {useState} from "react";

export default function GameScreen({ navigation }) {
    const [tests, setTests] = useState([])

    fetch(testAll)
        .then((response) => response.json())
        .then((data) => setTests(data));


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                style={{ fontSize: 26, fontWeight: 'bold' }}>Веберите тест</Text>
            <ScrollView>
                {tests.map(test => <Test test={test} key={test.idTest} navigation={navigation}></Test>)}
            </ScrollView>
        </View>
    );
}