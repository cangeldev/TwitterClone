import { StyleSheet } from 'react-native'
import colors from '../../../assets/colors/colors'

export default StyleSheet.create({
    headerView: {
        flexDirection: "row",
        paddingRight: 5,
        padding: 10,
        paddingLeft: 12
    },
    profileImage: {
        width: 56,
        height: 56,
        borderRadius: 50
    },
    userInfoView: {
        flexDirection: "row",
        height: 20,
    },
    userView: {
        flex: 1,
        height: 55,
        marginLeft: 7,
        marginRight: 25,
    },
    name: {
        color: colors.textColor,
        fontWeight: 'bold',
        marginRight: 4,
        textAlignVertical: "center",
        fontSize: 15,
    },
    username: {
        fontSize: 13,
        textAlignVertical: "center",
    },
    dot: {
        fontWeight: 'bold',
        marginTop: -5,
        marginHorizontal: 2
    },
    time: {
        fontSize: 13,
        fontWeight: '600',
    },
    timeView: {
        flexDirection: "row",
        position: 'absolute',
        right: 4,
        alignSelf: "center"
    },
    message: {
        fontSize: 15,
        paddingRight: 30
    }
})