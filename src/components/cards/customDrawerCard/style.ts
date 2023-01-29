import { StyleSheet } from 'react-native'
import colors from '../../../assets/colors/colors'

export default StyleSheet.create({
    wrapDropDownHeader: {
        paddingVertical: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
    },
    button: {
        flexDirection: "row",
    },
    title: {
        color: colors.black,
        fontSize: 18,
        fontWeight: "bold"
    },
    text: {
        marginTop: -12,
        marginBottom: 5,
        marginLeft: 20,
        color: colors.textColor,
        height: 40,
        textAlignVertical: "center",
        fontWeight: '600'
    },
})