import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { HomeScreen, MessageScreen, NotificationScreen, SearchScreen } from '../screens'
import { Bookmarks, Lists, MessageSettingsPages, Moments, NotificationSettingsPages, Profile, SearchSettingsPages, Topics } from '../pages'
export type RootStackParams = {
    HomeScreen: any;
    SearchScreen: any
    SearchSettingsPages: any
    NotificationSettingsPages: any
    MessageSettingsPages: any
    NotificationScreen: any
    MessageScreen: any
    Profile: any
    Topics: any
    Bookmarks: any
    Lists: any
    Moments: any
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
            <Stack.Screen
                name='MessageSettingsPages'
                component={MessageSettingsPages} />
        </Stack.Navigator>
    )
}
// export function DrawerStackNavigator() {
//     return (
//         <Stack.Navigator screenOptions={{ headerShown: false }}>
//             <Stack.Screen
//                 name='Profile'
//                 component={Profile} />
//             <Stack.Screen
//                 name='Topics'
//                 component={Topics} />
//             <Stack.Screen
//                 name='Bookmarks'
//                 component={Bookmarks} />
//             <Stack.Screen
//                 name='Lists'
//                 component={Lists} />
//             <Stack.Screen
//                 name='Moments'
//                 component={Moments} />
//         </Stack.Navigator>
//     )
// }