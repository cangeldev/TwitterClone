import { StyleSheet } from 'react-native'
import colors from '../../assets/colors/colors'
export default StyleSheet.create({
    container: {
        backgroundColor: colors.homeBackGround,
        flex: 1,
        paddingTop: 25,
        paddingHorizontal: 30,

    },
    image: {
        width: 45,
        height: 45,
        borderRadius: 25
    },
    headerView: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    name: {
        marginTop: 10,
        fontWeight: "bold",
        fontSize: 18,
        color: colors.black
    },
    username: {
        marginTop: -3
    },
    followView: {
        flexDirection: "row",
        marginTop: 3
    },
    following: {
        color: colors.black
    },
    followers: {
        marginRight: 10,
        marginLeft: 2
    },
    listView: {
        paddingVertical: 20,
        marginVertical: 30,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: colors.Gainsboro,
        marginBottom: 15
    },
    customButton: {
        flexDirection: "row",
        height: 50,
        alignItems: "center"
    },
    customButtonIcon: {
        width: 20,
        height: 20
    },
    customButtonText: {
        fontSize: 22,
        fontWeight: "bold",
        color: colors.black,
        marginLeft: 25
    },
    lightIcon: {
        left: 30,
        position: "absolute",
        bottom: 20
    }
})