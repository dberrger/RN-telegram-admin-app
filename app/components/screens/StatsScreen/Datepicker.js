import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'

export default class Datepicker extends Component {
  constructor(props){
    super(props)
    this.state = {
     date: ''
    }
  }

  render(){
    return (
      <DatePicker
        style={{width: 200}}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        androidMode = 'spinner'
        format="YYYY-MM-DD"
        customStyles={dateStyle}
		onDateChange={(date) => {
			this.setState({date: date});
			this.props.setDateFilter(this.state.date);
	}}
      />
    )
  }
}

const dateStyle = {
	dateIcon: {
	  position: 'absolute',
	  left: 0,
	  top: 4,
	  marginLeft: 0
	},
	dateInput: {
	  marginLeft: 36
	}
}