import { View, StatusBar } from 'react-native'
import React from 'react'
import Container from './container/container'

export default function App() {
  return (
    <View style={{flex:1}}>
      <Container />
      <StatusBar barStyle="dark-content" backgroundColor="white" />
    </View>
  )
}