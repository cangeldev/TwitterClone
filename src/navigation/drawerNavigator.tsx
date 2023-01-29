import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { TabNavigator } from './tabNavigator'
import { CustomDrawer } from '../components/customDrawer/customDrawer'
import { Profile } from '../pages'
const Drawer = createDrawerNavigator()
export function DrawerNavigator() {
    return (
        <Drawer.Navigator
            drawerContent={props => <CustomDrawer {...props} />}
            screenOptions={{
                headerShown: false,
                drawerStyle: { width: 310 }
            }}>
            <Drawer.Screen
                name="TabNavigator"
                component={TabNavigator}
            />
            <Drawer.Screen
                name="Profile"
                component={Profile}
            />
        </Drawer.Navigator>
    )
}