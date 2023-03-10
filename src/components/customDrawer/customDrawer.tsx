import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import style from './style'
import { ChatIcon, DocumentIcon, Profil, SavedIcon, UserHeartIcon, UserIcon } from '../../assets'
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import IconE from 'react-native-vector-icons/Entypo';
import colors from '../../assets/colors/colors';
import { CustomDrawerCard } from '../cards/customDrawerCard/customDrawerCard';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack/lib/typescript/src/types'
import { RootStackParams } from '../../navigation/stackNavigator'
import { DrawerButton } from '../drawerButton';

interface ICustomDrawer { }
export const CustomDrawer: FC<ICustomDrawer> = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParams>>();
    return (
        <View style={style.container}>
            <View style={style.headerView}>
                <TouchableOpacity onPress={() => { navigation.navigate("Profile") }}>
                    <Image source={Profil} style={style.image} />
                </TouchableOpacity>
                <IconM
                    name="dots-vertical-circle-outline"
                    size={24}
                    color={colors.black}
                />
            </View>
            <Text style={style.name} >
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
                        Takip??i
                    </Text>
                </View>
            </View>
            <View style={style.listView}>
                <DrawerButton text='Profil' image={UserIcon} go="Profile" />
                <DrawerButton text='Konular' image={ChatIcon} go="Topics" />
                <DrawerButton text=' Yer i??aretleri' image={SavedIcon} go="Bookmarks" />
                <DrawerButton text=' Listeler' image={DocumentIcon} go="Lists" />
                <DrawerButton text='  Twitter ??evresi' image={UserHeartIcon} go="Moments" />
            </View>
            <CustomDrawerCard
                title='Profesyonel Ara??lar'
                text='Profesyoneller i??in Twitter'
                text2='Gelire d??n????t??rme'
                iconName='rocket'
                iconName2='money'
            />
            <CustomDrawerCard
                title='Ayarlar & Destek'
                text='Ayarlar ve Gizlilik'
                text2='Yard??m Merkezi'
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