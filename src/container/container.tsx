import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { DrawerNavigator, TabNavigator } from '../navigation'

export default function Container() {

    return (
        <NavigationContainer>
            <DrawerNavigator />
        </NavigationContainer>
    )
}