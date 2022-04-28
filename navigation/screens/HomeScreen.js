import * as React from 'react';
import { View, Text, AsyncStorage, ActivityIndicator} from 'react-native';
import {USER} from "../../src/utils/Storage"
import {useEffect, useState} from "react";
import {registration, news as newsApi} from "../../src/utils/Api";

export default function HomeScreen({ navigation }) {
    const [authorized, isAuthorized] = useState(false);
    const [user, setUser] = useState({});
    const [newsLink, setNewsLink] = useState("test");




    useEffect(() => {
        console.log(user)
        if (!authorized) {
            fetch(newsApi)
                .then(response => response.json())
                .then(data => setNewsLink(data.News))

            AsyncStorage.getItem(USER).then(data => {
                setUser(data);

                if (user == null) {
                    const requestOptions = {
                        method: 'POST',
                        headers: {'Content-Type': 'application/json'}
                    };
                    fetch(registration, requestOptions)
                        .then(response => response.json())
                        .then(data => {
                            console.log(data);
                            AsyncStorage.setItem(USER, data);
                            return setUser(data);
                        })
                        .then(f => isAuthorized(true))
                } else {
                    isAuthorized(true);
                    setUser(data);
                }
            });
        }
    });


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => alert('This is the "Home" screen.')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Home Screen</Text>
            <Text style={{ fontSize: 26, fontWeight: 'bold' }}>News: {newsLink} {5 + 5}</Text>
            {
                authorized && user != null ? (
                    <Text style={{ fontSize: 26, fontWeight: 'bold' }}>QrCode: {user.qrCode}</Text>
                ) : (
                    <ActivityIndicator></ActivityIndicator>
                )
            }
            <Text>authorized: {authorized.toString()}</Text>
        </View>
    );
}