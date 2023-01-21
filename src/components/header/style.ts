import { StyleSheet } from 'react-native'
import colors from '../../assets/colors/colors'
export default StyleSheet.create({
    container: {
        height: 55,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 15,
        borderBottomWidth: 0.5,
        borderBottomColor: "#DCDCDC"
    },
    profilImage: {
        width: 25,
        height: 25,
        borderRadius: 25,
    },
    icon: {
        width: 25,
        height: 25,
    },
    txtInput: {
        backgroundColor: colors.textInputBackGround,
        borderRadius: 25,
        width: "72%",
        height: 36,
        paddingHorizontal: 15,
        fontSize: 15,
        paddingBottom: 8,
        borderWidth: 0.1,
        borderColor: "grey"
    },
    text: {
        color: colors.black,
        width: "72%",
        fontSize: 22,
        fontWeight: '700'
    }
})