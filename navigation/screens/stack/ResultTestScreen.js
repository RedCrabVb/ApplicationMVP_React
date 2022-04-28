import * as React from 'react';
import {View, Text, ScrollView, Button, StyleSheet} from 'react-native';


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

const styles = StyleSheet.create({
    containerHome: { flex: 1, alignItems: 'center', justifyContent: 'center' },
    webPag: {
        marginTop: 50,
        flex: 1,
        width: '100%',
        height: '100%',
    },
    input: {
        width: '70%',
        borderStyle: 'solid',
        padding: 10,
        borderBottomWidth: 2,
        borderBottomColor: '#3949ab'
    }
});


