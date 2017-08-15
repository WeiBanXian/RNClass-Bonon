'use strict';

import React, { Component } from 'react';

import {
	StyleSheet,
	View,
	Dimensions,
	Text,
	Image,
	TouchableOpacity,
	Alert,
} from 'react-native';

class Fetch extends Component {

    static navigationOptions = {
        title: 'Fetch',
	};

	state = {
		data: ''
	}

	componentDidMount() {
	}

	xhrReq(url, successCb, ErrorCb) {
		var xhr = new XMLHttpRequest()
		xhr.open("GET", url)
		xhr.onreadystatechange = function () {
			if (this.readyState !== 4) {
				return
			}
			if (this.status === 200) {
				successCb && successCb(this.response)
			} else {
				ErrorCb && ErrorCb(this.statusText)
			}
		}
		xhr.send()
	}

	fetch(url) {
		var xhrPromise = new Promise((resolve, reject) => {
			var xhr = new XMLHttpRequest()
			xhr.open("GET", url)
			xhr.onreadystatechange = function () {
				if (this.readyState !== 4) {
					return
				}
				if (this.status === 200) {
					resolve(this.response)
				} else {
					reject(new Error("请求错误"))
				}
			}
			xhr.send()
		})
		return xhrPromise
	}

	handleFetch() {
		// this.xhrReq("http://10.1.5.195:8082/", (res) => {
		// 	alert(res)
		// }, (error) => {
		// 	alert(error)
		// })
		this.fetch("http://10.1.5.195:8082/")
		.then((res) => {
			return JSON.parse(res)
		})
		.then((resJson) => {
			Alert.alert('', JSON.stringify(resJson, null, 1),
			[
				{
					text: '点我有彩蛋',
					onPress: () => {
						this.setState({ data: resJson })
					}
				}
			])
		})
		.catch((error) => {
			alert(error)
		})
	}
	
	render() {
		let data = this.state.data;
		return (
			<View style={styles.container}>
				{
					data ?
					<View style={styles.content}>
						<Text style={styles.text}>{`${data.name} is ${data.age} years old.`}</Text>
						<Text style={styles.text}>{`He weighs ${data.weight} pounds.`}</Text>
						<Text style={styles.text}>{`He is ${data.feet} feet, ${data.inch} inches tall.`}</Text>
						<Text style={styles.text}>{`He has ${data.hair} hair.`}</Text>
						<Text style={styles.text}>{``}</Text>
						<Text style={styles.text}>{``}</Text>
						<Text style={styles.text}>{`His love is real.`}</Text>
						<Text style={styles.text}>{`But he is not.`}</Text>
					</View>:
					<TouchableOpacity onPress={this.handleFetch.bind(this)} activeOpacity={0.7} style={styles.fetchBtn}>
						<Text style={styles.fetchText}>fetch</Text>
					</TouchableOpacity>
				}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F5FCFF',
	},
	fetchBtn: {
		marginTop: 90,
		alignSelf: 'center',
		paddingHorizontal: 60,
		paddingVertical: 10,
		borderRadius: 8,
		backgroundColor: '#613030'
	},
	fetchText: {
		fontSize: 20,
		color: '#FFF'
	},
	content: {
		flex: 1,
		backgroundColor: '#613030',
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		fontSize: 28,
		color: '#FFF',
		lineHeight: 45
	},
});


export default Fetch;