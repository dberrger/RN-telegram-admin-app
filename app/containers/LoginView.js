import React, { Component } from "react";
import { connect } from 'react-redux';
import { middleware } from "../actions/middleware";
import LoginScreen from "../components/screens/LoginScreen";

class LoginView extends Component {

	authenticate = (username, password) => {
		const { dispatch } = this.props;
		if (username && password)
			dispatch(middleware.login(username, password));
	}

	render() {
		return (
			<LoginScreen authenticate={this.authenticate} result={this.props.result} />		
		);
	} 
}

export default connect((state) => ({
	result: state.loginReducer.result
}))(LoginView);