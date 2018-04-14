import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, ScrollView } from "react-native";
 
import { Card,  Header, Input } from "react-native-elements";
import { Icon } from "react-native-vector-icons/FontAwesome";

import Container from '../Container';
import Button from '../Button';
import Label from '../Label';
import { loginScreen } from "../../styles/loginScreen";
import { connect } from 'react-redux';
import { middleware } from "../../actions/middleware";
// import { onSignIn } from "../auth";

class LoginScreen extends Component {
    constructor(props){
		super(props);

		this.state = {
			username: 'dberrger',
			password: 'testpwd'
		}
	}
    
    render() {
        return (
            <ScrollView style={loginScreen.scroll}>
                    <Container>
                        <Label text="Username" />
                        <TextInput
                            value= {this.state.username}
                            onChangeText={ (username)=> this.setState({username})}
                            style={loginScreen.textInput}
                        />
                    </Container>
                    <Container>
                        <Label text="Password" />
                        <TextInput
                            value= {this.state.password}
                            onChangeText={(password)=> this.setState({password})}
                            secureTextEntry={true}
                            style={loginScreen.textInput}
                        />
                    </Container>
                    <View style={loginScreen.footer}>
                        <Container>
                            <Button 
                                label="Sign In"
                                styles={{button: loginScreen.primaryButton, label: loginScreen.buttonWhiteText}} 
                                onPress={ ()=> this.props.authenticate(this.state.username, this.state.password) }
                                />
                        </Container>
                    </View>
                </ScrollView>
            
        );
    }
};

export default LoginScreen;