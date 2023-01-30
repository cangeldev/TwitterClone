import { StyleSheet } from 'react-native'
import colors from '../../../assets/colors/colors'
export default StyleSheet.create({
   container: {
      backgroundColor: colors.homeBackGround,
      flex: 1
   },
   contentView: {
      paddingHorizontal: 15,
      marginTop: 10,
      height: 180,
      borderBottomWidth: 0.6,
      borderBottomColor: colors.Gainsboro
   },
   title: {
      fontWeight: "bold",
      color: colors.black,
      fontSize: 19
   },
   text: {
      paddingHorizontal: 25,
      color: colors.darkGrey,
      marginTop: 25,
   },
   dotStyle: {
      alignSelf: "center",
      fontSize: 20,
      color: colors.grey
   }
})