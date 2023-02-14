import { StyleSheet } from 'react-native'
import colors from '../../../assets/colors/colors'

export default StyleSheet.create({
    button: {
        flexDirection: "row",
        alignItems: "center",
        height: 40,
        borderRadius: 25,
        alignSelf: "flex-start",
        paddingHorizontal: 15,
        borderWidth:1,
        borderColor:colors.textInputBackGround
    },
    buttonText: {
        fontSize:17,
        color:colors.textColor,
        fontWeight:"bold",
        marginRight: 8,
    },
    divider: {
        marginHorizontal: 10,
       fontWeight:'100',
        fontSize:20
    }

})