import { StyleSheet } from 'react-native'
import colors from '../../../assets/colors/colors'
export default StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1
    },
    info: {
        paddingHorizontal: 20,
        marginTop: 15,
        color: colors.grey
    },
    button: {
        flexDirection: "row",
        paddingHorizontal: 20,
        alignItems: "center",
        marginTop: 25
    },
    title: {
        marginLeft: 20,
        fontSize: 16,
        color: colors.black
    },
    text: {
        paddingHorizontal: 20,
        color: colors.grey
    }
})