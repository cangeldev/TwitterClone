import { Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Email, EmailSelected, Home, HomeSelected, Not, NotSelected, Searh, SearhSelected } from '../assets'
import { HomeStackNavigator, MessageStackNavigator, NotificationStackNavigator, SearchStackNavigator } from './stackNavigator'
export function TabNavigator() {

    const Tab = createBottomTabNavigator()
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarHideOnKeyboard: true
            }}>
            <Tab.Screen
                name='HomeStackNavigator'
                component={HomeStackNavigator}
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
            <Tab.Screen
                name='SearchStackNavigator'
                component={SearchStackNavigator}
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
                    // tabBarStyle: { display: "none" },
                }}
            />
            <Tab.Screen
                name='NotificationStackNavigator'
                component={NotificationStackNavigator}
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
            <Tab.Screen
                name='MessageStackNavigator'
                component={MessageStackNavigator}
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