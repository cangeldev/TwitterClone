import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { HomeScreen, MessageScreen, NotificationScreen, SearchScreen } from '../screens'
import { NotificationSettingsPages, SearchSettingsPages } from '../pages'
export type RootStackParams = {
    HomeScreen: any;
    SearchScreen: any
    SearchSettingsPages: any
    NotificationSettingsPages: any
    NotificationScreen: any
    MessageScreen: any
}
const Stack = createStackNavigator<RootStackParams>()
export function HomeStackNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name='HomeScreen'
                component={HomeScreen} />
        </Stack.Navigator>
    )
}
export function SearchStackNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name='SearchScreen'
                component={SearchScreen} />
            <Stack.Screen
                name='SearchSettingsPages'
                component={SearchSettingsPages} />
        </Stack.Navigator>
    )
}
export function NotificationStackNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name='NotificationScreen'
                component={NotificationScreen} />
            <Stack.Screen
                name='NotificationSettingsPages'
                component={NotificationSettingsPages} />
        </Stack.Navigator>
    )
}
export function MessageStackNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name='MessageScreen'
                component={MessageScreen} />
        </Stack.Navigator>
    )
}