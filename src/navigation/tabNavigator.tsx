import { Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen, MessageScreen, NotificationScreen, SearchScreen } from '../screens'
import { Email, EmailSelected, Home, HomeSelected, Not, NotSelected, Searh, SearhSelected } from '../assets'
export function TabNavigator() {

    const Tab = createBottomTabNavigator()
    return (
        <Tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false, }}>
            <Tab.Screen name='HomeScreen' component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => focused ?
                        <Image
                            source={HomeSelected}
                            style={{
                                width: 24,
                                height: 24,

                            }} /> :
                        <Image
                            source={Home}
                            style={{
                                width: 24,
                                height: 24,

                            }} />,

                }} />
            <Tab.Screen name='SearchScreen' component={SearchScreen}
                options={{
                    tabBarIcon: ({ focused }) => focused ?
                        <Image
                            source={SearhSelected}
                            style={{
                                width: 30,
                                height: 30,

                            }} /> :
                        <Image
                            source={Searh}
                            style={{
                                width: 30,
                                height: 30,

                            }} />,
                }}

            />
            <Tab.Screen name='NotificationScreen' component={NotificationScreen}
                options={{
                    tabBarIcon: ({ focused }) => focused ?
                        <Image
                            source={NotSelected}
                            style={{
                                width: 26,
                                height: 26,

                            }} /> :
                        <Image
                            source={Not}
                            style={{
                                width: 26,
                                height: 26,

                            }} />,
                }} />
            <Tab.Screen name='MessageScreen' component={MessageScreen}
                options={{
                    tabBarIcon: ({ focused }) => focused ?
                        <Image
                            source={EmailSelected}
                            style={{
                                width: 26,
                                height: 26,

                            }} /> :
                        <Image
                            source={Email}
                            style={{
                                width: 26,
                                height: 26,

                            }} />,
                }} />
        </Tab.Navigator>
    )
}