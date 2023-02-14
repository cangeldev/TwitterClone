import { StyleSheet, Dimensions } from 'react-native'
import colors from '../../../assets/colors/colors'
const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
    container: {
        width: windowWidth / 2.5,
        height: 250,
        marginTop: 20,
        borderRadius: 15,
        marginRight: 10,
        alignItems: "center",
        paddingVertical: 10,
        borderWidth: 0.9,
        borderColor: colors.textInputBackGround,
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 50,
        marginTop: 10
    },
    name: {
        fontWeight: 'bold',
        color: colors.black,
        marginTop: 5
    },
    username: {
        color: colors.grey,
        fontSize: 13,
    },
    button: {
        backgroundColor: colors.black,
        width: 130,
        height: 30,
        textAlign: "center",
        textAlignVertical: 'center',
        borderRadius: 20,
        marginTop: 20,
        fontSize: 16,
        fontWeight: "bold",
        color: colors.homeBackGround
    },
    mutualFriend: {
        paddingHorizontal: 20,
        fontSize: 13,
        marginTop: 5,
    },
    icon: {
        position: "absolute",
        top: 9,
        left: 5,
        fontSize: 10
    },
    iconClose: {
        position: 'absolute',
        right: 10,
        top: 10,
        fontSize: 15,
        color: colors.Gainsboro
    }
})