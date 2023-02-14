import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { DrawerNavigator, } from '../navigation'

export default function Container() {
    return (
        <NavigationContainer>
            <DrawerNavigator />
        </NavigationContainer>
    )
}