import { StyleSheet } from 'react-native'
import colors from '../../assets/colors/colors'
export default StyleSheet.create({
    headerView: {
        flexDirection: "row",
        height: 55,
        borderBottomWidth: 0.5,
        borderBottomColor: colors.Gainsboro,
        alignItems: "center",
        paddingHorizontal: 20,
        backgroundColor: colors.white,
    },
    headerTextView: {
        marginLeft: 25,
    },
    text: {
        fontSize: 20,
        color: colors.black,
        fontWeight: "600",
    },
    name: {
        color: colors.grey,
    },
})