import { View, Text, Switch } from 'react-native'
import React, { useState } from 'react'
import { SettingsHeader } from '../../components'
import style from './style'
import colors from '../../assets/colors/colors'

export const MessageSettingsPages = () => {
    const [isEnabled, setIsEnabled] = useState(true);
    const [isEnabledFilter, setIsEnabledFilter] = useState(true);
    const [isEnabledRead, setIsEnabledRead] = useState(true);

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const toggleSwitchFilter = () => setIsEnabledFilter(previousState => !previousState);
    const toggleSwitchRead = () => setIsEnabledRead(previousState => !previousState);
    return (
        <View style={style.container}>
            <SettingsHeader
                title='Twitter'
                go='MessageScreen'
            />
            <View style={style.contentView}>
                <Text style={style.title}>
                    Herkesten mesaj isteğine izin ver
                </Text>
                <View style={style.view}>
                    <Text style={style.text}>
                        Takip etmediğin kişilerin sana mesaj isteği göndermesine ve seni grup sohbetlerine eklenemesine izin ver.
                        Birisinin mesajını yanıtlamak için isteğini kabul etmelisin.
                    </Text>
                    <Switch
                        style={style.switch}
                        value={isEnabled}
                        trackColor={{ false: '#cacaca', true: "#abd9fa" }}
                        thumbColor={isEnabled ? colors.twitterLogoColor : "#ececec"}
                        onValueChange={toggleSwitch} />
                </View>
                <Text style={style.linkText}>
                    Daha fazla bilgi al
                </Text>
            </View>
            <View style={style.contentView}>
                <Text style={style.title}>
                    Düşük kaliteli mesajları filtrele
                </Text>
                <View style={style.view}>
                    <Text style={style.text}>
                        Potansiyel spam veya düşük kaliteli olarak tespit edilen mesajları gizle. Bunlar, mesaj isteklerinin en altında
                        bulunan ayrı bir gelen kutusuna gönderilir. Onlara dilediğin zaman ulaşabilirsin.
                    </Text>
                    <Switch
                        style={style.switch}
                        value={isEnabledFilter}
                        trackColor={{ false: '#cacaca', true: "#abd9fa" }}
                        thumbColor={isEnabledFilter ? colors.twitterLogoColor : "#ececec"}
                        onValueChange={toggleSwitchFilter} />
                </View>
                <Text style={style.linkText}>
                    Daha fazla bilgi al
                </Text>
            </View>
            <View style={style.contentView}>
                <Text style={style.title}>
                    Okundu bildirimleri gönder
                </Text>
                <View style={style.view}>
                    <Text style={style.text}>
                        Mesajlaştığın kişiler, gönderdikleri mesajları ne zaman okuduğunu bilsin. Okundu bildirimleri mesaj isteklerinde
                        görünmez.
                    </Text>
                    <Switch
                        style={style.switch}
                        value={isEnabledRead}
                        trackColor={{ false: '#cacaca', true: "#abd9fa" }}
                        thumbColor={isEnabledRead ? colors.twitterLogoColor : "#ececec"}
                        onValueChange={toggleSwitchRead} />
                </View>
                <Text style={style.linkText}>
                    Daha fazla bilgi al
                </Text>
            </View>
        </View>
    )
}