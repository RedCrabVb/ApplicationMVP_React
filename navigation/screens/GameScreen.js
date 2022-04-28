import * as React from 'react';
import { View, Text } from 'react-native';
import homeName from "../MainContainer";
import HomeScreen from "./HomeScreen";

export default function GameScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => navigation.navigate(homeName)}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Details Screen</Text>
        </View>
    );
}