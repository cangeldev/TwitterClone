import { StyleSheet } from 'react-native'
import colors from '../../../assets/colors/colors'

export default StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        paddingVertical: 15,
        alignItems: "center",

    },
    followButton: {
        borderWidth: 0.5,
        borderColor: colors.grey,
        padding: 6,
        borderRadius: 20,
        fontWeight: "bold",
        fontSize: 16,
        paddingHorizontal: 15,
        color: colors.textColor,
        width: 130,
        textAlign: "center"

    },
    icon: {
        backgroundColor: colors.twitterLogoColor,
        alignSelf: "center",
        color: colors.white,
        padding: 4,
        borderRadius: 25,
        marginRight: 10
    },
    title: {
        fontWeight: "bold",
        color: colors.textColor,
        fontSize: 15
    },
    text: {
        fontSize: 13,
        marginTop: -3
    },
    innerContainer: {
        flexDirection: "row"
    }
})