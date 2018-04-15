import React, { Component } from "react";
import { ScrollView, Linking, View, StyleSheet } from "react-native";
import { Card, Button, Text, Header, Divider} from "react-native-elements";
import { connect } from 'react-redux';
import StatsChart  from "./StatsChart";

const LogsScreen = ({data, getDetailedInfo , currentQuery}) => (
	<ScrollView>
		<Card>
			<Text h4 style={styles.mainHeaderStyle}> The most popular requests: </Text>
			<StatsChart data={data} getDetailedInfo={getDetailedInfo} />
		</Card>
		{currentQuery ? 
		<Card>
				<Text style={styles.textHeaderStyle}> Detailed info: </Text>
				<Divider/>
				<ScrollView>
					<Text style={styles.pStyle}> 
						<Text style={styles.keyWords}> Message: </Text> {currentQuery.value}
						</Text>
				</ScrollView>
					<Text style={styles.pStyle}> 
						<Text style={styles.keyWords}> Times used: </Text> {currentQuery.count}
						</Text>
		</Card>
		: 
		<Card containerStyle={styles.preloadWrapperStyle}>
			<Text style={styles.preloadStyle}> Click on the chart to get into details </Text>
		</Card>
		}
	</ScrollView>
);

export default LogsScreen;

const styles = StyleSheet.create({
	mainHeaderStyle: {
		paddingBottom: 10
	},
	textHeaderStyle: {
		fontSize: 22,
		textAlign: 'center',
		paddingBottom: 10
	},
	pStyle: {
		fontSize: 18,
		paddingTop: 10,
		fontFamily: "Verdana",
		fontStyle: "italic"
	},
	keyWords: {
		fontSize: 18,
		color: "#406299"
	},
	preloadStyle : {
		fontSize: 20,
		textAlign: 'center',
		color: "#203929"
	},
	preloadWrapperStyle: {
		marginTop: 20,
		margin: 0,
        backgroundColor: '#8cd892'
	}
});