import * as React from 'react';
import { StyleSheet, View, Text, AsyncStorage, ActivityIndicator} from 'react-native';
import {USER} from "../../src/utils/Storage"
import {useEffect, useState} from "react";
import {registration, news as newsApi} from "../../src/utils/Api";
import { WebView } from 'react-native-webview';

export default function HomeScreen({ navigation }) {
    const [authorized, isAuthorized] = useState(false);
    const [user, setUser] = useState({});
    const [newsLink, setNewsLink] = useState("test");


    useEffect(() => {
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
        <View>
            {
                authorized && user != null ? (
                    <View>

                        <Text style={{ fontSize: 26, fontWeight: 'bold' }}>QrCode: {user.qrCode}</Text>
                    </View>
                ) : (
                    <ActivityIndicator></ActivityIndicator>
                )
            }
            <View>
                {/*<WebView style={styles.wegPage} source={{ uri: "https://github.com/"}} onLoad={console.log("load")}  /> //bag*/}
            </View>

            <Text>authorized: {authorized.toString()}</Text>
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
    }
});