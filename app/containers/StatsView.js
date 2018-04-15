import React, { Component } from "react";
import { connect } from 'react-redux';
import StatsScreen from "../components/screens/StatsScreen/StatsScreen";
import { View, Text } from "react-native";
import { setFilter } from "../actions/utilActions";
import {middleware} from "../actions/middleware";
import Loading from "../components/Loading";

class StatsView extends Component {
  constructor(props){
	  super(props);

	  this.state = {
			selectedDate: '',
			searchInput: ''
	  }
  }

static navigationOptions = {
    headerTitle: 'Stats',
  };

	findUser = (username) => {
		this.setState({searchInput: username});
		this.props.onFindUser(username);
  }

	setDateFilter = (date) => {
		this.setState({selectedDate: date});
	}

	getMessagesByDate = () => {
		if(this.state.selectedDate)
			this.props.getLogs(this.state.selectedDate);
	}


	render() {
		const { fetching } = this.props;
		return (
		fetching ? 
		<Loading/> :
		<StatsScreen
			data={this.props.data}
			findUser={this.findUser}
			setDateFilter={this.setDateFilter}
			date={this.state.selectedDate}
			searchInput={this.state.searchInput}
			getMessagesByDate={this.getMessagesByDate}
			/>
    );
  }
}

export default connect((state)=>({
  data: state.statisticsReducer.statistics.filter(user => user.text.includes(state.searchUserReducer.searchValue)),
  fetching: state.statisticsReducer.fetching
}),
(dispatch) => ({
  onFindUser: (username) => {
    dispatch(setFilter(username));
  },
  getLogs: (date) => {
	dispatch(middleware.getStatistics(date));
  }
})
)(StatsView);
