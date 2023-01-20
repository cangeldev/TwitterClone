import { View, Text } from 'react-native'
import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen, MessageScreen, NotificationScreen, SearchScreen } from '../screens'
export function TabNavigator() {
    const Tab = createBottomTabNavigator()
    return (
        <Tab.Navigator>
            <Tab.Screen name='HomeScreen' component={HomeScreen} />
            <Tab.Screen name='SearchScreen' component={SearchScreen} />
            <Tab.Screen name='NotificationScreen' component={NotificationScreen} />
            <Tab.Screen name='MessageScreen' component={MessageScreen} />
        </Tab.Navigator>
    )
}