import { StyleSheet } from 'react-native'
import colors from '../../assets/colors/colors'
export default StyleSheet.create({
    container: {
        backgroundColor: "#0d507b",
        width: 35,
        height: 35,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        marginLeft: 10
    },
    image: {
        width: 25,
        height: 25,
        tintColor: colors.white,
    }
})