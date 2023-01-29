import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import style from './style'
import { FloatingButton, Header } from '../../components'
import { Setting } from '../../assets'
import { RecommendedContacts, TrendsCard } from '../../components/cards'

export function SearchScreen() {
    return (
        <View style={style.container}>
            <Header
                isChoose='txtInput'
                centerName={Setting}
                iconName={Setting}
                placeHolderText="Twitter'da Ara"
                go='SearchSettingsPages'
            />
            <ScrollView>
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
                <View style={style.trendsView}>
                    <Text style={style.title}>
                        Kimi takip etmeli
                    </Text>
                    <View style={style.recommendedContactsView}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <RecommendedContacts />
                            <RecommendedContacts />
                            <RecommendedContacts />
                        </ScrollView>
                    </View>
                    <TouchableOpacity>
                        <Text style={style.moreTrendsText}>
                            Daha fazla göster
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <FloatingButton />
        </View>
    )
}