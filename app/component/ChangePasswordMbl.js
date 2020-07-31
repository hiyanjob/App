import React, { Component } from 'react';
import {
	AppRegistry,
	Button, Text, StatusBar, View, Image,
	ImageBackground, StyleSheet, TextInput, TouchableOpacity, Alert, AsyncStorage, ScrollView
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class ChangePasswordMbl extends Component {

	static navigationOptions = {
		header: null
	}

	constructor(props) {
		super(props);
		this.state = {
			radioSelected: 1,
			otp: '',
			id: '',
			mobile_no: ''
		}
	}

	otp = (text) => {
		this.setState({ otp: text })
	}
	mobile_no = (text) => {
		this.setState({ mobile_no: text })
	}

	componentWillMount() {
		this.onLoad();

	}

	onLoad = async () => {
		try {
			this.setState({
				// otp: await AsyncStorage.getItem('otp'),
				mobile_no: await AsyncStorage.getItem('mobile_no')

			});
		}
		catch (error) {
			Alert.alert('Error', 'There was an error.')
		}
	}


	otpApi() {

		var data = {
			otp: this.state.otp,
			email: this.state.mobile_no,
		}

		console.log(data);

		fetch('http://18.204.139.44:3005/otpVerify', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		}).then((response) => response.json())
			.then((responseJson) => {

				console.log(responseJson);
				this.props.navigation.navigate('UpdatePassowrd');


			})
			.catch((error) => {
				console.error(error);
			});

	}




	render() {
		return (

			<View style={styles.container}>
				<ImageBackground source={require('./images/Splash_bg1.png')}
					style={{ width: '100%', height: '100%' }}>
					<ScrollView>

						<Image source={require('./images/Aalap-Final-logo.png')} style={{
							marginLeft: 130,
							width: 120,
							height: 120, marginTop: 120, marginBottom: 15,
						}} />

						<Text style={styles.Emailtxt}> Enter OTP Number </Text>

						<TextInput
							style={{
								borderBottomWidth: 1,
								borderColor: '#333a3d',
								width: '75%',
								padding: 10,
								height: 50,
								marginLeft: 50, color: 'grey',
							}}
							onChangeText={this.otp}
							value={this.state.otp}
							editable={true}

						/>

						<TouchableOpacity activeOpacity={1.5}
							onPress={() => this.otpApi()}>
							<LinearGradient style={styles.loginButton} colors={['#69b3f6', '#25d0de']} >
								<Text style={styles.LoginButtontxt}> Submit </Text>
							</LinearGradient>
						</TouchableOpacity>
					</ScrollView>
				</ImageBackground>

			</View>


		);
	}
}

const styles = StyleSheet.create({

	backgroundImage: {
		flex: 1,
	},

	Emailtxt: {
		textAlign: 'center',
		fontSize: 14,
		marginVertical: 20,
		color: 'white',
		marginTop: 50,
		marginLeft: -30,
	},


	loginButton: {
		justifyContent: 'center',
		alignItems: 'stretch',
		margin: 5,
		height: 40,
		width: 260,
		padding: 10,
		borderColor: 'grey',
		marginBottom: 30,
		marginVertical: 30,
		marginLeft: "16%",
		marginTop: 90,
		borderRadius: 18,
	},

	LoginButtontxt: {
		color: 'white',
		padding: 3,
		justifyContent: "center",
		textAlign: "center",
		alignItems: "center",

	},

});
