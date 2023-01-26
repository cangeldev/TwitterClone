import { StyleSheet } from 'react-native'
import colors from '../../assets/colors/colors'
export default StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: colors.white,
   },
   trendsView: {
      paddingHorizontal: 12,
      paddingTop: 10,
      height: 500,
      borderWidth: 0.6,
      borderColor: colors.textInputBackGround
   },
   title: {
      fontWeight: "bold",
      fontSize: 20,
      color: colors.black,
   },
   moreTrendsText: {
      marginTop: 14,
      color: colors.twitterLogoColor,
   }
})