import { StyleSheet } from 'react-native'
import colors from '../../../../assets/colors/colors'

export default StyleSheet.create({
   container: {
      backgroundColor: colors.homeBackGround,
   },
   followView: {
      paddingHorizontal: 30,
      paddingVertical: 30
   },
   followViewText: {
      fontSize: 16
   },
   followTopics: {
      borderTopWidth: 0.8,
      borderBottomWidth: 0.8,
      borderColor: colors.Gainsboro
   },
   recommendedTopicView: {
      paddingHorizontal: 10,
      paddingVertical: 10,
      borderBottomWidth: 0.7,
      borderColor: colors.Gainsboro,
      marginBottom: 15
   },
   recommendedTopicTitle: {
      fontWeight: "bold",
      color: colors.textColor,
      fontSize: 20
   },
   recommendedTopicText: {
      fontSize: 13,
   },
   topicView: {
      marginVertical: 10
   },
   text: {
      alignSelf: "center",
      paddingHorizontal: 40,
      marginBottom: 20
   },
   moreTopicText: {
      marginLeft: 10,
      fontWeight: "bold",
      color: colors.twitterLogoColor,
   },
   innerText: {
      color: colors.twitterLogoColor,
   }
})