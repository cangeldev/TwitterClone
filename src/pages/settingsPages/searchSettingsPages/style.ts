import { StyleSheet } from 'react-native'
import colors from '../../../assets/colors/colors'
export default StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1
    },
    contentView: {
        borderTopWidth: 0.6,
        borderColor: colors.Gainsboro,
        paddingHorizontal: 20,
        paddingVertical: 8,
        paddingTop: 12
    },
    title: {
        color: colors.black,
        fontWeight: 'bold',
        fontSize: 20
    },
    textView: {
        flexDirection: "row",
    },
    infoTitle: {
        marginTop: 25,
        color: colors.black,
        fontSize: 16
    },
    info: {
        width: 300,
        color: colors.grey
    },
    switch: {
        width: 50,
        marginTop: -15,
    }
})