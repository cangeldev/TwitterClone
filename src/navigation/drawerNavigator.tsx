import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { TabNavigator } from './tabNavigator'
import { SearchScreen } from '../screens'
const Drawer = createDrawerNavigator()
export function DrawerNavigator() {
    
    return (
        <Drawer.Navigator screenOptions={{ headerShown: false }}>
            <Drawer.Screen name="TabNavigator" component={TabNavigator} />
            <Drawer.Screen name="SearchScreen" component={SearchScreen} />
        </Drawer.Navigator>
    )
}