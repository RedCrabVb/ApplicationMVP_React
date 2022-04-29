import * as React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {
    settingsName,
    gameName,
    homeName,
    logInName,
    registrationName,
    mailResetName,
    resultTestName, currentTestName, tabsName
} from '../src/utils/ScreenNames'

import HomeScreen from './screens/HomeScreen';
import GameScreen from './screens/GameScreen';
import LogIn from './screens/stack/LogIn';
import MailReset from './screens/stack/MailReset';
import Registration from './screens/stack/Registration';
import SettingsScreen from './screens/SettingsScreen';
import {CurrentTestScreen} from "./screens/stack/CurrentTestScreen";
import ResultTestScreen from "./screens/stack/ResultTestScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MyBottomMenu() {
   return  (<Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({route}) => ({
            tabBarInactiveTintColor: "#288bf4",
            tabBarActiveTintColor: "#045063",
            activeTintColor: 'tomato',
            inactiveTintColor: 'grey',
            labelStyle: {paddingBottom: 10, fontSize: 10},
            style: {padding: 10, height: 70},
            tabBarIcon: ({focused, color, size}) => {
                let iconName;
                let rn = route.name;

                if (rn === homeName) {
                    iconName = focused ? 'home' : 'home-outline';

                } else if (rn === gameName) {
                    iconName = focused ? 'game-controller' : 'game-controller-outline';

                } else if (rn === settingsName) {
                    iconName = focused ? 'settings' : 'settings-outline';
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color}/>;
            },
        })}>

        <Tab.Screen name={homeName} component={HomeScreen}/>
        <Tab.Screen name={gameName} component={GameScreen}/>
        <Tab.Screen name={settingsName} component={SettingsScreen}/>


    </Tab.Navigator>)
}


function MainContainer() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Tabs">
                <Stack.Screen name={currentTestName} component={CurrentTestScreen}/>
                <Stack.Screen name={resultTestName} component={ResultTestScreen}/>
                <Tab.Screen name={logInName} component={LogIn}/>
                <Tab.Screen name={registrationName} component={Registration}/>
                <Tab.Screen name={mailResetName} component={MailReset}/>
                <Stack.Screen name={tabsName} component={MyBottomMenu} options={{headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MainContainer;