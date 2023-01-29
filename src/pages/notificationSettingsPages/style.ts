import { StyleSheet } from 'react-native'
import colors from '../../assets/colors/colors'
export default StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1
    },
    headerView: {
        flexDirection: "row",
        height: 55,
        borderBottomWidth: 0.5,
        borderBottomColor: colors.Gainsboro,
        alignItems: "center",
        paddingHorizontal: 20
    },
    headerTextView: {
        marginLeft: 25,
    },
    text: {
        fontSize: 20,
        color: colors.black,
        fontWeight: "600",
    },
    name: {
        color: colors.grey,
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
        marginTop:25
    },
    title:{
    marginLeft:20,
    fontSize:16,
    color:colors.black
    },
    text2:{
        paddingHorizontal:20,
        color:colors.grey
    }

})