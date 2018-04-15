import React, { Component } from "react";
import { ScrollView, Linking, View, StyleSheet } from "react-native";
import { Card, Button, Text, Header, Divider} from "react-native-elements";
import { connect } from 'react-redux';
import { middleware } from "../../actions/middleware";
// import LogoTitle  from "../LogoTitle";

const HomeScreen = ({fetchLogs, fetchStats}) => {
 
    return (
		<Card containerStyle={styles.wrapper}>
			<Text h4 style={styles.textHeaderStyle}> Menu </Text>
			<Divider/>
			<Button
				title="Go to Logs"
				titleStyle={{ fontWeight: "700" }}
				buttonStyle={logsButtonStyle}
				containerStyle={{ marginTop: 20 }}
				onPress={() => {fetchLogs()}}
			/>
			<Button	
				title="Go to Stats"
				onPress={() =>fetchStats()}
				titleStyle={{ fontWeight: "700" }}
				buttonStyle={statsButtonStyle}
				containerStyle={{ marginTop: 20 }}
			/>
		</Card>
    );
}

const styles = StyleSheet.create({
	buttonStyle: {
		color: 'red',
		marginTop: 20,
		padding: 20,
		backgroundColor: 'green'
	},
	textHeaderStyle: {
		fontSize: 20,
		textAlign: 'center',
		paddingBottom: 10
	},
	wrapper: {
		flex: 1,
		marginBottom: 10,
	}
});

const statsButtonStyle = {
    backgroundColor: "rgba(92, 99,216, 1)",
    width: 350,
    height: 45,
    borderColor: "transparent",
    borderWidth: 0.2,
    borderRadius: 5
};

const logsButtonStyle = {
    backgroundColor: "teal",
    width: 350,
    height: 45,
    borderColor: "transparent",
    borderWidth: 0.2,
    borderRadius: 5
};

export default HomeScreen;