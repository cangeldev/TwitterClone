import { View, Text } from 'react-native'
import React from 'react'
import style from './style'
import { FloatingButton, Header } from '../../components'
import { Setting } from '../../assets'
import { TrendsCard } from '../../components/cards'
import { TouchableOpacity } from 'react-native-gesture-handler'

export function SearchScreen() {
    return (
        <View style={style.container}>
            <Header
                isChoose='txtInput'
                centerName={Setting}
                iconName={Setting}
                placeHolderText="Twitter'da Ara"
            />
            <View style={style.trendsView}>
                <Text style={style.title}>
                    İlgini çekebilecek gündemler
                </Text>

                <TrendsCard />
                <TrendsCard />
                <TrendsCard />
                <TrendsCard />
                <TrendsCard />
                <TouchableOpacity>
                    <Text style={style.moreTrendsText}>
                        Daha fazla göster
                    </Text>
                </TouchableOpacity>
            </View>
            <FloatingButton />
        </View>
    )
}