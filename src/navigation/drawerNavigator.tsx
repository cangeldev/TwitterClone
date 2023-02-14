import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { TabNavigator } from './tabNavigator'
import { CustomDrawer } from '../components/customDrawer/customDrawer'
import { Bookmarks, Lists, Moments, Profile, Topics } from '../pages'

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
            <Drawer.Screen
                name="Topics"
                component={Topics}
            />
            <Drawer.Screen
                name="Lists"
                component={Lists}
            />
            <Drawer.Screen
                name="Bookmarks"
                component={Bookmarks}
            />
            <Drawer.Screen
                name="Moments"
                component={Moments}
            />
        </Drawer.Navigator>
    )
}