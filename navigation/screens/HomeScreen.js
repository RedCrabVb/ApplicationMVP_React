import * as React from 'react';
import { StyleSheet, View, Text, AsyncStorage, ActivityIndicator} from 'react-native';
import {USER} from "../../src/utils/Storage"
import {useEffect, useState} from "react";
import {registration, news as newsApi} from "../../src/utils/Api";
import QRCode from 'react-qr-code';
import {} from 'react-native-svg';


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
                if (data == null) {
                    const requestOptions = {
                        method: 'POST',
                        headers: {'Content-Type': 'application/json'}
                    };
                    fetch(registration, requestOptions)
                        .then(response => response.json())
                        .then(data => {
                            console.log("fetch: " + data);
                            AsyncStorage.setItem(USER, JSON.stringify(data));
                            return setUser(data);
                        })
                        .then(f => isAuthorized(true))
                } else {
                    console.log("get store : " + data)
                    setUser(JSON.parse(data));
                    isAuthorized(true);
                }
            });
        }
    });


    return (
        <View style={styles.containerHome}>
            {
                authorized && user != null ? (
                    <View>

                        <QRCode value={user.qrCode} />

                    </View>
                ) : (
                    <ActivityIndicator></ActivityIndicator>
                )
            }
            <View>
                {/*<WebView style={styles.wegPage} source={{ uri: "https://github.com/"}} onLoad={console.log("load")}  /> //bag*/}
            </View>
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