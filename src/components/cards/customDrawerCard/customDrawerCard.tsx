import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState, FC } from 'react'
import Accordion from 'react-native-collapsible-accordion';
import IconO from 'react-native-vector-icons/Octicons';
import IconF from 'react-native-vector-icons/FontAwesome';
import style from './style';
import colors from '../../../assets/colors/colors';
interface ICustomDrawer {
    title: string,
    text: string
    text2: string
    iconName: string
    iconName2: string
}
export const CustomDrawerCard: FC<ICustomDrawer> = ({ title, text, text2, iconName, iconName2 }) => {
    const [showMoreInfo, setShowMoreInfo] = useState(false);
    return (
        <View>
            <Accordion
                onChangeVisibility={(value: any) => {
                    setShowMoreInfo(value)
                }}
                renderHeader={() => (
                    <View
                        style={style.wrapDropDownHeader}>
                        <Text
                            style={style.title}>
                            {title}
                        </Text>
                        <IconF
                            size={26}
                            color={!showMoreInfo ? colors.textColor : colors.twitterLogoColor}
                            name={!showMoreInfo ? 'angle-down' : 'angle-up'}
                        />
                    </View>
                )}
                renderContent={() => (
                    <View>
                        <TouchableOpacity style={style.button}>
                            <IconO
                                size={18}
                                color={colors.textColor}
                                name={iconName}
                            />
                            <Text style={style.text}>
                                {text}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.button}>
                            <IconF
                                size={19}
                                color={colors.textColor}
                                name={iconName2}
                            />
                            <Text style={style.text}>
                                {text2}
                            </Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    )
}