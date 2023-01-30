import { StyleSheet } from 'react-native'
import colors from '../../assets/colors/colors'
export default StyleSheet.create({
    container: {
        backgroundColor: colors.homeBackGround,
        flexDirection: "row",
        height: 55,
        borderBottomWidth: 0.5,
        borderBottomColor: colors.Gainsboro,
        alignItems: "center",
        paddingHorizontal: 15,
    },
    title: {
        fontWeight: '600',
        fontSize: 20,
        color: colors.black,
        marginLeft:30

    }
})