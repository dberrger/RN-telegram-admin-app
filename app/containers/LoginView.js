import React, { Component } from "react";

 
import { connect } from 'react-redux';
import { middleware } from "../actions/middleware";
import LoginScreen from "../components/screens/LoginScreen";
import { View, Text, StyleSheet, TextInput, ScrollView } from "react-native";

class LoginView extends Component {

	authenticate = (username, password) => {
		console.log("CHITI IHJSOH "+ username);
		const { dispatch } = this.props;
		dispatch(middleware.login(username, password));
	}

	render() {
		return (
			<LoginScreen authenticate={this.authenticate}/>		
		);
	}
}

export default connect(null)(LoginView);