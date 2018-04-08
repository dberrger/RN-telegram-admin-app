import React, { Component } from "react";
import { ScrollView, Linking, View, StyleSheet } from "react-native";
import { Card, Button, Text, Header, Divider} from "react-native-elements";
import { connect } from 'react-redux';
import { middleware } from "../actions/middleware";
// import LogoTitle  from "../LogoTitle";
import HomeScreen from "../components/screens/HomeScreen";

let _this;
class HomeView extends Component {
	constructor(props){
		super(props);

		this.logout = this.logout.bind(this);
	}
	static navigationOptions = {
    headerTitle: 'Home',
    headerRight: (
      <Button
        	onPress={() => {_this.logout()}}
			title="Logout"
			buttonStyle={{
				backgroundColor: "red",
				borderColor: "transparent",
				borderWidth: 0,
				borderRadius: 5,
				marginRight: 10
			}}
      />
    )};

	logout() {
		this.props.dispatch(middleware.logout());
	}

	fetchLogs = () => {
		const { navigation, dispatch} = this.props;
		navigation.navigate('Logs');
		dispatch(middleware.getLogs());
	}

	fetchStats = () => {
		const { navigation, dispatch} = this.props;
		this.props.navigation.navigate('Statistics');
		// dispatch(middleware.getStatistics(1));
	}
  
  render() {
	_this = this;
    return (
      <HomeScreen fetchLogs={this.fetchLogs} fetchStats={this.fetchStats}/>
    );
  }
}

export default connect(null)(HomeView);