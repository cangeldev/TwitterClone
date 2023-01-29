import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import style from './style'
import { ChatIcon, DocumentIcon, Profil, SavedIcon, UserHeartIcon, UserIcon } from '../../assets'
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import IconE from 'react-native-vector-icons/Entypo';
import colors from '../../assets/colors/colors';
import { CustomDrawerCard } from '../cards/customDrawerCard/customDrawerCard';

interface ICustomDrawer { }
export const CustomDrawer: FC<ICustomDrawer> = () => {
    return (
        <View style={style.container}>
            <View style={style.headerView}>
                <Image source={Profil} style={style.image} />
                <IconM
                    name="dots-vertical-circle-outline"
                    size={24}
                    color={colors.black}
                />
            </View>
            <Text style={style.name}>
                Can
            </Text>
            <Text style={style.username}>
                @Canqgel
            </Text>
            <View style={style.followView}>
                <View style={style.followView}>
                    <Text style={style.following}>
                        8
                    </Text>
                    <Text style={style.followers}>
                        Takip edilen
                    </Text>
                </View>
                <View style={style.followView}>
                    <Text style={style.following}>
                        8
                    </Text>
                    <Text style={style.followers}>
                        Takipçi
                    </Text>
                </View>
            </View>
            <View style={style.listView}>
                <TouchableOpacity style={style.customButton}>
                    <Image
                        source={UserIcon}
                        style={style.customButtonIcon}
                    />
                    <Text style={style.customButtonText} >
                        Profil
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.customButton}>
                    <Image
                        source={ChatIcon}
                        style={style.customButtonIcon}
                    />
                    <Text style={style.customButtonText} >
                        Konular
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.customButton}>
                    <Image
                        source={SavedIcon}
                        style={style.customButtonIcon}
                    />
                    <Text style={style.customButtonText} >
                        Yer işaretleri
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.customButton}>
                    <Image
                        source={DocumentIcon}
                        style={style.customButtonIcon}
                    />
                    <Text style={style.customButtonText} >
                        Listeler
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.customButton}>
                    <Image
                        source={UserHeartIcon}
                        style={style.customButtonIcon}
                    />
                    <Text style={style.customButtonText} >
                        Twitter Çevresi
                    </Text>
                </TouchableOpacity>
            </View>
            <CustomDrawerCard
                title='Profesyonel Araçlar'
                text='Profesyoneller için Twitter'
                text2='Gelire dönüştürme'
                iconName='rocket'
                iconName2='money'
            />
            <CustomDrawerCard
                title='Ayarlar & Destek'
                text='Ayarlar ve Gizlilik'
                text2='Yardım Merkezi'
                iconName='gear'
                iconName2='question-circle-o'
            />
            <TouchableOpacity style={style.lightIcon}>
                <IconE
                    name="light-up"
                    size={24}
                    color={colors.black}
                />
            </TouchableOpacity>
        </View>
    )
}