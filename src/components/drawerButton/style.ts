import { StyleSheet } from 'react-native'
import colors from '../../assets/colors/colors'
export default StyleSheet.create({
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
   }
})