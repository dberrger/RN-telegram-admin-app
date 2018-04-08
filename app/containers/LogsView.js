import React, { Component } from "react";
import { ScrollView, Linking, View, StyleSheet } from "react-native";
import { Card, Button, Text, Header, Divider} from "react-native-elements";
import { connect } from 'react-redux';
import LogsScreen from "../components/screens/LogsScreen/LogsScreen";

class LogsView extends Component {
  static navigationOptions = {
    headerTitle: 'Logs',
	};
   
  render() {
    const fill = 'rgb(134, 65, 244)';
    const data    = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ];

    return (
      <LogsScreen data={data} fill={fill}/>
    );
  }
}

export default connect((state)=>({
  data: state.logsReducer.logs
}))(LogsView);

