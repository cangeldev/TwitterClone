import { StyleSheet } from 'react-native'
import colors from '../../assets/colors/colors'
export default StyleSheet.create({
   container: {
      backgroundColor: colors.homeBackGround,
      height: 613,
      paddingHorizontal: 27,
      justifyContent: "center"
   },
   image: {
      resizeMode: 'cover',
      height: 150,
      width: "100%",
      marginTop:-10
   },
   title: {
      fontSize: 33,
      fontWeight: "bold",
      color: colors.black,
      marginTop: 25
   },
   text: {
      fontSize: 16,
      marginTop: 7
   },
   linkText: {
      fontSize: 16,
      position: 'absolute',
      bottom: 0,
      right: 72,
      color: colors.twitterLogoColor
   }

})