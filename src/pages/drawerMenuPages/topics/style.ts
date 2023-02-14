import { StyleSheet } from 'react-native'
import colors from '../../../assets/colors/colors'
export default StyleSheet.create({
   container: {
      backgroundColor: colors.white,
   },
   borderActive: {
      borderColor: colors.twitterLogoColor,
      borderWidth: 1
   },
   pillLabel: {
      color: 'grey',
      fontWeight: 'bold',
      fontSize: 16,

   },
   activeLabel: {
      color: colors.black,
      fontWeight: 'bold',
   },
})