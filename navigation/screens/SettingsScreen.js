import * as React from 'react';
import { View, Text } from 'react-native';
import homeName from "../MainContainer";

export default function SettingsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => navigation.navigate(homeName)}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Settings Screen</Text>
        </View>
    );
}