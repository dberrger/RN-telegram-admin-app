import React, { Component } from 'react';
 
import {
  StyleSheet,
  Text,
  ActivityIndicator,
  View
} from 'react-native';
 
const Loading = (props) => {
    return (
        <View> 
            <Text style={styles.textLabel}> Loading.. </Text>
            <ActivityIndicator size="large" color="#0000ff" />
        </View> 
    );
}
 
const styles = StyleSheet.create({
    textLabel: {
        fontSize: 20,
        fontFamily: 'Verdana',
        marginTop: 100,
        color: '#595856',
        textAlign: "center"
    }
});
 
export default Loading;