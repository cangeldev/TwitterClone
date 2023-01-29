import { StyleSheet } from 'react-native'
import colors from '../../../assets/colors/colors'
export default StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1
    },
    contentView: {
        paddingHorizontal: 20,
        marginTop: 20,
    },
    title: {
        color: colors.black,
        fontSize: 16,
        fontWeight: "500"
    },
    text: {
        width: 300
    },
    switch: {
        width: 50,
        marginTop: -15,
    },
    view: {
        flexDirection: "row"
    },
    linkText: {
        color: colors.twitterLogoColor
    }
})