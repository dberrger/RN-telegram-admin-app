import React, { Component } from "react";
import { ScrollView, Text, Linking, View } from "react-native";
import { Card, Button, SocialIcon } from "react-native-elements";
import { connect } from 'react-redux';
import { middleware } from "../../actions/middleware";
 
class HomeScreen extends Component {
  
  
  render() {

	const fetchLogs = () => {
		const { navigation, dispatch} = this.props;
		navigation.navigate('Logs');
		dispatch(middleware.getLogs());
	}
    return (
      <View>
		  <Text> HOME </Text>
		  <Button
		  title="Go to Logs"
          onPress={() => fetchLogs()}
		  />
		  <Button
		  title="Go to Stats"
          onPress={() => this.props.navigation.navigate('Statistics')}
		  />
      </View>
    );
  }
}

export default connect(null)(HomeScreen);