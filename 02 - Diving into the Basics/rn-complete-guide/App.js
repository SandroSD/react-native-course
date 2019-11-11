import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
	<View style={styles.screen}>
		<View style={styles.inputContainer}>
			<TextInput	placeholder="text"
						style={styles.input}
			/>
			<Button title="ADD" />
		</View>
		<View>

		</View>
	</View>
  );
}

const styles = StyleSheet.create({
	screen: {
		padding: 30
	},
	inputContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	input: {
		width: '80%',
		borderBottomColor: 'black',
		borderWidth: 1,
		padding: 10
	}
});
