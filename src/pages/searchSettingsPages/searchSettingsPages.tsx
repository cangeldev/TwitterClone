import { View, Text, Switch, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import style from './style'
import IconA from 'react-native-vector-icons/AntDesign';
import colors from '../../assets/colors/colors';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack/lib/typescript/src/types'
import { RootStackParams } from '../../navigation/stackNavigator'
export const SearchSettingsPages = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParams>>();
    const [isEnabled, setIsEnabled] = useState(true);
    const [isEnabledPersonal, setIsEnabledPersonal] = useState(true);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const toggleSwitchPersonal = () => setIsEnabledPersonal(previousState => !previousState);
    return (
        <View style={style.container}>
            <View style={style.headerView}>
                <TouchableOpacity
                    onPress={() => { navigation.navigate("SearchScreen") }}>
                    <IconA
                        name="arrowleft"
                        size={24}
                        color={colors.black}
                    />
                </TouchableOpacity>
                <View style={style.headerTextView}>
                    <Text style={style.text}>
                        Keşfetme ayarları
                    </Text>
                    <Text style={style.name}>
                        @Canqgel
                    </Text>
                </View>
            </View>
            <View style={style.contentView}>
                <Text style={style.title}>
                    Konum
                </Text>
                <Text style={style.infoTitle}>
                    Bu konumdaki içeriği göster
                </Text>
                <View style={style.textView}>
                    <Text style={style.info}>
                        Bu özellik etkin olduğunda, şu anda etrafında olup bitenleri görürsün.
                    </Text>
                    <Switch
                        style={style.switch}
                        value={isEnabled}
                        trackColor={{ false: '#cacaca', true: "#abd9fa" }}
                        thumbColor={isEnabled ? colors.twitterLogoColor : "#ececec"}
                        onValueChange={toggleSwitch} />
                </View>
            </View>
            <View style={style.contentView}>
                <Text style={style.title}>
                    Kişiselleştirme
                </Text>
                <Text style={style.infoTitle}>
                    Gündemde ilgini çekebilecekler
                </Text>
                <View style={style.textView}>
                    <Text style={style.info}>
                        Gündemleri konumuna ve kimi takip ettiğine göre kişiselleştirebilirsin.
                    </Text>
                    <Switch
                        style={style.switch}
                        value={isEnabledPersonal}
                        trackColor={{ false: '#cacaca', true: "#abd9fa" }}
                        thumbColor={isEnabledPersonal ? colors.twitterLogoColor : "#ececec"}
                        onValueChange={toggleSwitchPersonal} />
                </View>
            </View>
        </View>
    )
}