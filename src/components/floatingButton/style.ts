import { StyleSheet } from 'react-native'
import colors from '../../assets/colors/colors'
export default StyleSheet.create({
   container: {
      backgroundColor: colors.twitterLogoColor,
      alignSelf: "flex-start",
      borderRadius: 30,
      position: "absolute",
      bottom: 13,
      right: 13,
      width: 60,
      height: 60,
      justifyContent: "center"
   },
   text: {
      fontSize: 34,
      color: colors.white,
      width: 60,
      height: 60,
      borderRadius: 30,
      textAlign: "center",
      textAlignVertical: "center"

   },
   icon: {
      fontSize: 24,
      color: colors.white,
      alignSelf: "center",



   }
})