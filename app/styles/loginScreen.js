import { StyleSheet } from "react-native";

export const loginScreen = StyleSheet.create({
    scroll: {
      backgroundColor: '#E1D7D8',
      padding: 30,
      flexDirection: 'column'
    },
    label: {
      color: '#0d8898',
      fontSize: 20
    },
    alignRight: {
      alignSelf: 'flex-end'
    },
    textInput: {
      height: 60,
      fontSize: 25,
      backgroundColor: '#FFF'
    },
    buttonWhiteText: {
      fontSize: 20,
      color: '#FFF',
    },
    buttonBlackText: {
      fontSize: 20,
      color: '#595856'
    },
    primaryButton: {
      backgroundColor: '#488D9D'
    },
    footer: {
    marginTop: 100
    },
    statusText: {
      textAlign: "center",
      fontSize: 22,
      paddingBottom: 20,
      color: "#940700",
      fontFamily: "Arial",
      fontStyle: "normal",
    }
  });