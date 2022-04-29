import * as React from 'react';
import {StyleSheet, View, Text, ActivityIndicator} from 'react-native';
import {WebView} from 'react-native-webview';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {USER} from "../../src/utils/Storage"
import {useEffect, useState} from "react";
import {registration, news as newsApi} from "../../src/utils/Api";
import QRCode from 'react-qr-code';
import {} from 'react-native-svg';


export default function HomeScreen({navigation}) {
    const [authorized, isAuthorized] = useState(false)
    const [user, setUser] = useState({})
    const [newsLink, setNewsLink] = useState("google.com")


    useEffect(() => {
            const unsubscribe = navigation.addListener('focus', () => {
                if (!authorized) {
                    fetch(newsApi)
                        .then(response => response.json())
                        .then(data => setNewsLink(data.News))
                        .then(() => console.log(newsLink))

                    AsyncStorage.getItem(USER).then(data => {
                        console.log("getItem user: " + data)
                        if (data == null || !('token' in JSON.parse(data))) {
                            console.log("registration first")
                            const requestOptions = {
                                method: 'POST',
                                headers: {'Content-Type': 'application/json'}
                            };
                            fetch(registration, requestOptions)
                                .then(response => response.json())
                                .then(data => {
                                    console.log("fetch: " + data)
                                    AsyncStorage.setItem(USER, JSON.stringify(data))
                                    return setUser(data)
                                })
                                .then(() => isAuthorized(true))
                        } else {
                            console.log("get store : " + data)
                            setUser(JSON.parse(data))
                            isAuthorized(true)
                        }
                    });
                } else {
                    AsyncStorage.getItem(USER).then(data => {
                        if (data != null || ('token' in data)) {
                            isAuthorized(true)
                            setUser(JSON.parse(data))
                        }
                    });
                }
            });
            return unsubscribe;
        }
    );

    return (
        <View style={styles.containerHome}>
            {
                authorized && user != null && 'qrCode' in user ? (
                    <View>
                        <QRCode value={user.qrCode}/>

                    </View>
                ) : (
                    <ActivityIndicator/>
                )
            }


            <View>
                {/*bag*/}
                <Text>                                                                                     </Text>
                <WebView
                    source={{
                        uri: newsLink
                    }}
                    style={{marginTop: 20, marginBottom: 10, padding: 0}}
                />
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    containerHome: {
        flex: 0,
        alignItems: 'center',
        alignContent: 'center',
        margin: 5,
        padding: 0
    }
});