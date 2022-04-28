import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createNativeStackNavigator} from '@react-navigation/native-stack'


// Screens
import HomeScreen from './screens/HomeScreen';
import GameScreen from './screens/GameScreen';
import LogIn from './screens/stack/LogIn';
import MailReset from './screens/stack/MailReset';
import Registration from './screens/stack/Registration';
import SettingsScreen from './screens/SettingsScreen';
import {CurrentTestScreen} from "./screens/stack/CurrentTestScreen";
import ResultTestScreen from "./screens/stack/ResultTestScreen";

//Screen names
const homeName = "Главная";
const gameName = "Игра";
const settingsName = "Настройки";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MyBottomMenu() {
   return  (<Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
                let iconName;
                let rn = route.name;

                if (rn === homeName) {
                    iconName = focused ? 'home' : 'home-outline';

                } else if (rn === gameName) {
                    iconName = focused ? 'list' : 'list-outline';

                } else if (rn === settingsName) {
                    iconName = focused ? 'settings' : 'settings-outline';
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color}/>;
            },
        })}
        tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'grey',
            labelStyle: {paddingBottom: 10, fontSize: 10},
            style: {padding: 10, height: 70}
        }}>

        <Tab.Screen name={homeName} component={HomeScreen}/>
        <Tab.Screen name={gameName} component={GameScreen}/>
        <Tab.Screen name={settingsName} component={SettingsScreen}/>


    </Tab.Navigator>)
}


function MainContainer() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Tabs">
                <Stack.Screen name="Test" component={CurrentTestScreen}/>
                <Stack.Screen name="Result" component={ResultTestScreen}/>
                <Tab.Screen name="LogIn" component={LogIn}/>
                <Tab.Screen name="Registration" component={Registration}/>
                <Tab.Screen name="MailReset" component={MailReset}/>
                <Stack.Screen name="Tabs" component={MyBottomMenu} options={{headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MainContainer;