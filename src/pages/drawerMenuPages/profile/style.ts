import { StyleSheet } from 'react-native'
import colors from '../../../assets/colors/colors'
export default StyleSheet.create({
   container: {
      backgroundColor: colors.homeBackGround,
   },
   backGroundImage: {
      width: "100%",
      height: 130,
      backgroundColor: colors.twitterLogoColor,
      flexDirection: "row"
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
   iconView: {
      flexDirection: "row",
      position: 'absolute',
      right: 10,
   },
   profilImage: {
      width: 75,
      height: 75,
      borderRadius: 50,
      marginTop: -30,
      marginLeft: 10,
      borderWidth: 3,
      borderColor: colors.white
   },
   profilEditButton: {
      height: 35,
      alignSelf: "flex-end",
      marginRight: 15,
      paddingHorizontal: 10,
      marginTop: -35,
      borderRadius: 20,
      justifyContent: "center",
      borderWidth: 1,
      borderColor: colors.Gainsboro
   },
   profilEditButtonText: {
      fontWeight: "bold",
      color: colors.black,
      fontSize: 16
   },
   userView: {
      marginHorizontal: 15,
      marginVertical: 5
   },
   userViewName: {
      color: colors.black,
      fontSize: 25,
      fontWeight: "bold"
   },
   userViewUsername: {
      color: colors.grey,
      marginTop: -5
   },
   userFollowView: {
      marginHorizontal: 15,
      marginVertical: 15,
      flexDirection: "row",
      alignItems: "center"
   },
   date: {
      marginRight: 6,
      color: colors.darkGrey
   },
   followView: {
      flexDirection: "row",
      marginTop: -3,
      marginLeft: 8
   },
   following: {
      color: colors.black,
      fontWeight: "bold"
   },
   followers: {
      marginRight: 10,
      marginLeft: 2,
      color: colors.grey
   },
})