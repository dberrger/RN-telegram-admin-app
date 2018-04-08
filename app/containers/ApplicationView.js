import React, { Component } from 'react';
import { connect } from 'react-redux';

 
import { createRootNavigator } from "../router";
import { MainNavigator } from "../router";

class ApplicationView extends Component {
    
    render() {
    const Layout = createRootNavigator(this.props.isLogged);
       return <Layout/>
    }
}
 
const mapStateToProps = (state, ownProps) => {
    return {
        isLogged: state.loginReducer.isLogged
    };
}
 
export default connect(mapStateToProps)(ApplicationView);