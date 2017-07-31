'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  ListView,
  ScrollView,
  Image,
  Dimensions,
  Animated,
  TouchableOpacity
} from 'react-native';

const imgUrl = `data:image/png;base64,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`;
// const imgUrl = 'https://avatars0.githubusercontent.com/u/19317286?v=4&s=460';

class Ad extends Component {

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            transY: new Animated.Value(0),
            adHasShowed: false,
            dataSource: ds.cloneWithRows([
                'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin',
                'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin',
                'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin',
                'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin',
                'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin',
                'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin',
                'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin',
                'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin',
                'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin',
                'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin',
            ])
        };
    }

    handleShowAd() {
        if (!this.state.adHasShowed) {
            Animated.spring(
                this.state.transY,
                { toValue: -233.5 }
            ).start();
            this.setState({adHasShowed: true})
        }
    }

    handleHideAd() {
        if (this.state.adHasShowed) {
            Animated.spring(
                this.state.transY,
                { toValue: 0 }
            ).start();
            this.setState({adHasShowed: false})
        }
    }

    render() {
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        return (
            <View style={{flex: 1}}>
                <View style={styles.listView}>
                    <ListView
                        dataSource={this.state.dataSource}
                        onEndReached={this.handleShowAd.bind(this)}
                        onEndReachedThreshold={-80}
                        onScrollBeginDrag={this.handleHideAd.bind(this)}
                        renderRow={(rowData) => <Text>{rowData}</Text>}
                    />
                </View>
                <Animated.View style={[styles.adView, {height: 60, transform:[{translateY: this.state.transY}]}]}>
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={this.handleShowAd.bind(this)}
                        style={styles.adWrapper}>
                        <View style={styles.topWrapper}>
                            <Image style={styles.icon} source={{uri: imgUrl}} />
                            <Text numberOfLines={1} style={styles.title}> KasdfKFJKJKasdfKFJKJKasdfKFJKJKasdfKFJKJ</Text>
                            <TouchableOpacity activeOpacity={0.7}>
                                <View style={styles.btn}>
                                    <Text style={styles.btnText}>Instaill Now</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <Image resizeMode="contain" style={styles.detailPic} source={{uri: 'https://github.com/wix/react-native-navigation/raw/master/logo.png'}} />
                        <Text numberOfLines={2} style={styles.desc}>KoMaKDIO KasdfKFJKJKoMaKDIO KasdfKFJKJKoMaKDIO KasdfKFJKJKoMaKDIO KasdfKFJKJ</Text>
                    </TouchableOpacity>
                </Animated.View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    listView: {
        flex: 1,
    },
    adView: {
        position: 'relative',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#FFF',
    },
    adWrapper: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: '#FFF'
    },
    topWrapper: {
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#FFF'
    },
    icon: {
        width: 45,
        height: 45,
        borderRadius: 8,
    },
    title: {
        flex: 1,
        fontSize: 16,
        marginHorizontal: 5
    },
    btn: {
        paddingHorizontal: 13,
        paddingVertical: 8,
        borderRadius: 3,
        backgroundColor: '#ff5565'
    },
    btnText: {
        fontSize: 14,
        color: '#FFF'
    },
    detailPic: {
        width: Dimensions.get("window").width - 30,
        height: 180,
        marginVertical: 10,
    },
    desc: {

    },
});


export default Ad;