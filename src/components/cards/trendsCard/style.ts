import { StyleSheet } from 'react-native'
import colors from '../../../assets/colors/colors'
export default StyleSheet.create({
    container: {
        paddingTop: 20,
      
    },
    tag: {
        fontSize: 16,
        fontWeight: "700",
        color: colors.textColor
    },
    title: {
        fontSize: 16,
        fontWeight: "600",
        color: colors.black,
        paddingVertical: 2
    },
    tweet: {
        fontSize: 12,
        color: colors.grey
    },
    icon: {
        position: 'absolute',
        right:8,
        top:"45%"     
    }

})