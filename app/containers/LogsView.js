import React, { Component } from "react";
import { ScrollView, Linking, View, StyleSheet } from "react-native";
import { Card, Button, Text, Header, Divider} from "react-native-elements";
import { connect } from 'react-redux';
import LogsScreen from "../components/screens/LogsScreen/LogsScreen";

class LogsView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentQuery: ''
		}
	}
	static navigationOptions = {
	headerTitle: 'Logs',
	};

	render() {
		const fill = 'rgb(134, 65, 244)';
		// const data1 = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]
		getDetailedInfo = (query) => {
			this.setState({currentQuery: query})
		}
		const { fetching, data } = this.props;
		return (
			fetching ? 
			<View> 
				<Text> Loading.. </Text>
			</View> :
			<LogsScreen data={data}  getDetailedInfo={getDetailedInfo} currentQuery={this.state.currentQuery}/>
		);
	}
}

export default connect((state)=>({
  data: state.logsReducer.logs,
  fetching: state.logsReducer.fetching
}))(LogsView);

