import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, ScrollView } from "react-native";
 
import { Card,  Header, Input } from "react-native-elements";
import { Icon } from "react-native-vector-icons/FontAwesome";

import Container from '../Container';
import Button from '../Button';
import Label from '../Label';
import { signInStyles } from "../../styles/signInScreen";
import { connect } from 'react-redux';
import { middleware } from "../../actions/middleware";
// import { onSignIn } from "../auth";

class SignInScreen extends Component {

	constructor(props){
		super(props);

		this.state = {
			username: '',
			password: ''
		}
	}

	render() {
		const authenticate = () => {
			const { dispatch } = this.props;

			dispatch(middleware.login(this.state.username, this.state.password));
		}
		
		return (
			<ScrollView style={signInStyles.scroll}>
				<Container>
					<Label text="Username" />
					<TextInput
						value= {this.state.username}
						onChangeText={ (username)=> this.setState({username})}
						style={signInStyles.textInput}
					/>
				</Container>
				<Container>
					<Label text="Password" />
					<TextInput
						value= {this.state.password}
						onChangeText={(password)=> this.setState({password})}
						secureTextEntry={true}
						style={signInStyles.textInput}
					/>
				</Container>
				<View style={signInStyles.footer}>
					<Container>
						<Button 
							label="Sign In"
							styles={{button: signInStyles.primaryButton, label: signInStyles.buttonWhiteText}} 
							onPress={ ()=> authenticate() }
							/>
					</Container>
					<Container>
						<Button 
							label="CANCEL"
							styles={{label: signInStyles.buttonBlackText}} 
							/>
					</Container>
				</View>
			</ScrollView>
			
		);
	}
}

export default connect(null)(SignInScreen);