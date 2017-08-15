'use strict';

import React, { Component } from 'react';

import {
	StyleSheet,
	View,
	FlatList,
	Text,
	Image,
	TouchableOpacity
} from 'react-native';


class Practice extends Component {

	static navigationOptions = {
		title: 'Practice',
	};

	state = {
		data: []
	}

	componentWillMount() {
		fetch("http://10.1.5.195:8083/")
		.then((res) => {
			 return res.json()
		})
		.then((resJson) => {
			this.setState({ data: resJson })
		})
		.catch((error) => {
			alert(error)
		})
	}

	_renderItem(info) {
		let itemData = info.item
		return <View style={styles.item} key={itemData.key}>
			<Image resizeMode={"contain"} source={{uri: itemData.image}} style={styles.pic}/>
			<View style={styles.middle}>
				<Text style={styles.name}>{ itemData.name }</Text>
				<Text style={styles.text}>评分：{ itemData.appraise }</Text>
				<Text style={styles.text} numberOfLines={1}>导演：{ itemData.director }</Text>
				<Text style={styles.text} numberOfLines={1}>主演：{ itemData.actor }</Text>
			</View>
			<View style={styles.btnWrapper}>
				<TouchableOpacity onPress={() => {
					alert(itemData.link)
				}} style={styles.btn}>
					<Text style={styles.btnText}>购票</Text>
				</TouchableOpacity>
				<Text>特惠购票</Text>
			</View>
		</View>
	}

	render() {
		return (
			<View style={styles.container}>
				<FlatList
					style={styles.flatlist}
					ItemSeparatorComponent={() => <View style={styles.line}></View>}
					data={this.state.data}
					renderItem={this._renderItem}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	line: {
		height: 1,
		backgroundColor: '#AAA'
	},
	item: {
		flexDirection: 'row',
		paddingVertical: 12,
		paddingHorizontal: 15
	},
	pic: {
		width: 80,
		height: 140
	},
	middle: {
		flex: 1,
		justifyContent: 'center'
	},
	text: {
		fontSize: 14,
		color: '#333',
		lineHeight: 30
	},
	name: {
		fontWeight: 'bold',
		fontSize: 16
	},
	btnWrapper: {
		// width: 90
		marginLeft: 20,
		justifyContent: 'center',
		alignItems: 'center'
	},
	btn: {
		borderWidth: 1,
		borderColor: '#66B3FF',
		borderRadius: 5
	},
	btnText: {
		fontSize: 18,
		color: '#66B3FF',
		marginVertical: 10,
		marginHorizontal: 15
	}
});

export default Practice;