import { StyleSheet } from 'react-native'
import colors from '../../../assets/colors/colors'
export default StyleSheet.create({
    container: {
        padding: 10,
        borderBottomWidth: 0.3,
        borderBottomColor: colors.grey
    },
    headerView: {
        flexDirection: "row",
        paddingRight: 5
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 50
    },
    userInfoView: {
        flexDirection: "row",
        height: 20,
        flex: 1,
        marginLeft: 10,
        marginRight: 20,
    },
    name: {
        color: colors.black,
        fontWeight: 'bold',
        marginRight: 4,
        textAlignVertical: "center"
    },
    username: {
        fontSize: 12,
        textAlignVertical: "center"
    },
    dot: {
        fontWeight: 'bold',
        marginTop: -3,
        marginHorizontal: 2
    },
    time: {
        fontSize: 12,
        textAlignVertical: "center"
    },
    post: {
        marginLeft: 62,
        marginTop: -30,
        marginRight: 20,
        color: colors.black
    },
    footer: {
        marginTop: 5,
        flexDirection: "row",
        marginLeft: 60,
        alignItems: "center"
    },
    info: {
        marginRight: 20,
        marginLeft: 2,
    },
    icon: {
        fontSize: 16,
        color: colors.grey
    }
})