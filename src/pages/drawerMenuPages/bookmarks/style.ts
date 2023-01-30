import { StyleSheet } from 'react-native'
import colors from '../../../assets/colors/colors'
export default StyleSheet.create({
   container: {
      backgroundColor: colors.homeBackGround,
      flex: 1,
   },
   image: {
      resizeMode: 'cover',
      height: 150,
      width: "100%",
      marginTop: 150
   },
   title: {
      fontSize: 33,
      fontWeight: "bold",
      color: colors.black,
      marginTop: 25
   },
   text: {
      fontSize: 16,
      marginTop: 7,
      color: colors.darkGrey
   },
   linkText: {
      fontSize: 16,
      position: 'absolute',
      bottom: 0,
      right: 68,
      color: colors.twitterLogoColor
   }

})