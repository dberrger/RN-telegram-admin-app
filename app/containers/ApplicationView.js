import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignIn from '../components/screens/SignInScreen';
import Home from '../components/screens/HomeScreen';
import { createRootNavigator } from "../router";
import { MainNavigator } from "../router";

class ApplicationView extends React.Component {
    
    render() {
        const Layout = createRootNavigator(this.props.isLogged);
        // if (!this.props.isLogged) {
        //     return <Home />;
        // } else {
        //     return <SignIn />;
        // }
       return <Layout/>
    }
}
 
const mapStateToProps = (state, ownProps) => {
    return {
        isLogged: state.loginReducer.isLogged
    };
}
 
export default connect(mapStateToProps)(ApplicationView);