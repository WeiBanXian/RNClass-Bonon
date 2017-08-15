'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';

class ReactStyle extends Component {

    static navigationOptions = {
        title: 'React Style',
    };

    componentDidMount() {
        this._scrollView.scrollTo({x: 0, y: 0, animated: true})
    }

    render() {
        return (
            <ScrollView style={styles.container} ref={(scrollView) => { this._scrollView = scrollView; }}>
                <TouchableOpacity style={styles.scrollBtn}
                    onPress={() => {
                        this._scrollView.scrollTo({x: 0, y: 0, animated: true})
                    }}>
                    <Text>跳转</Text>
                </TouchableOpacity>
                <Text style={[styles.title, {textAlign: 'center', fontSize: 30}]}>容器</Text>
                <Text style={styles.title}>flexDirection（主轴方向）</Text>
                <View style={styles.view}>
                    <View style={[styles.boxWrapper, {
                        // flexDirection: 'row'
                    }]}>
                        <View style={styles.flexbox}></View>
                        <View style={styles.flexbox}></View>
                        <View style={styles.flexbox}></View>
                        <View style={styles.flexbox}></View>
                        <View style={styles.flexbox}></View>
                    </View>
                </View>

                <Text style={styles.title}>justifyContent（主轴方向的控制）</Text>
                <View style={styles.view}>
                    <View style={[styles.boxWrapper, {
                        height: 200,
                        // flexDirection: 'row',
                        // justifyContent: 'flex-start',
                        // justifyContent: 'flex-end',
                        // justifyContent: 'center',
                        // justifyContent: 'space-around',
                        // justifyContent: 'space-between',
                    }]}>
                        {
                            [1,2,3].map((index, item) => {
                                return <View key={index} style={styles.flexbox}></View>
                            })
                        }
                    </View>
                </View>

                <Text style={styles.title}>alignItems（主轴垂直方向的控制）</Text>
                <View style={styles.view}>
                    <View style={[styles.boxWrapper, {
                        // flexDirection: 'row',
                        // height: 300,
                        // alignItems: 'flex-start'
                        // alignItems: 'center'
                        alignItems: 'stretch'
                    }]}>
                        {
                            [1,2,3].map((index) => {
                                return <View key={index} style={styles.flexbox}></View>
                            })
                        }
                    </View>
                </View>

                <Text style={styles.subTitle}>flexWrap（换行）</Text>
                <View style={styles.view}>
                    <View style={[styles.boxWrapper, {
                        height: 200,
                        // flexDirection: 'row',
                        // flexWrap: 'nowrap'
                        flexWrap: 'wrap'
                    }]}>
                        {
                            [1,2,3,4,5,6,7,8,9].map((index) => {
                                return <View key={index} style={styles.flexbox}></View>
                            })
                        }
                    </View>
                </View>

                <Text style={styles.title}>alignContent（主轴垂直方向的控制）</Text>
                <View style={styles.view}>
                    <View style={[styles.boxWrapper, {
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        // alignContent: 'flex-start',
                        alignContent: 'center',
                        height: 300,
                        }]}>
                        {
                            [1,2,3,4,5,6,7,8,9].map((index) => {
                                return <View key={index} style={styles.flexbox}></View>
                            })
                        }
                    </View>
                </View>

                <Text style={[styles.title, {textAlign: 'center', fontSize: 30}]}>项目</Text>
                <Text style={styles.title}>alignSelf</Text>
                <View style={styles.view}>
                    <View style={[styles.boxWrapper, {alignItems: 'flex-start'}]}>
                        <View style={[styles.flexbox, {
                            // alignSelf: 'flex-start'
                        }]}></View>
                        <View style={[styles.flexbox, {
                            // alignSelf: 'center'
                        }]}></View>
                        <View style={[styles.flexbox, {
                            // alignSelf: 'flex-end'
                        }]}></View>
                    </View>
                </View>

                <Text style={[styles.title, {textAlign: 'center', fontSize: 30}]}>flex</Text>
                <Text style={styles.title}>flexShrink</Text>
                <View style={styles.view}>
                    <View style={[styles.boxWrapper, {
                            // flexDirection: 'row',
                            width: 200, height: 110
                        }]}>
                        <View style={{flexShrink: 0, width: 60, height: 20, margin: 10, backgroundColor: '#000'}}></View>
                        <View style={{flexShrink: 0, width: 60, height: 20, margin: 10, backgroundColor: '#000'}}></View>
                        <View style={{flexShrink: 1, width: 60, height: 20, margin: 10, backgroundColor: '#000'}}></View>
                    </View>
                </View>

                <Text style={styles.title}>flexGrow（缩小不会小于设置的height/width）</Text>
                <View style={styles.view}>
                    <View style={[styles.boxWrapper, { width: 320, height: 160}]}>
                        <View style={{flexGrow: 2, width: 60, height: 10, margin: 10, backgroundColor: '#000'}}></View>
                        <View style={{flexGrow: 100, width: 60, height: 10, margin: 10, backgroundColor: '#000'}}></View>
                        <View style={{flexGrow: 2, width: 60, height: 10, margin: 10, backgroundColor: '#000'}}></View>
                    </View>
                </View>

                <Text style={styles.title}>flexBasis</Text>
                <View style={styles.view}>
                    <View style={[styles.boxWrapper, { width: 320, height: 160}]}>
                        <View style={{flexBasis: 10, height: 40, margin: 10, backgroundColor: '#000'}}></View>
                        <View style={{flexBasis: 20, width: 60, height: 40, margin: 10, backgroundColor: '#000'}}></View>
                        <View style={{flexBasis: 30, width: 60, height: 40, margin: 10, backgroundColor: '#000'}}></View>
                    </View>
                </View>

                <Text style={styles.title}>position</Text>
                <View style={styles.view}>
                    <View style={[styles.boxWrapper, { padding: 0, width: 320, height: 320}]}>
                        <View style={{
                            position: 'absolute',
                            // position: 'relative',
                            top: 40,
                            left: 40,
                            right: 40,
                            bottom: 40,
                            // marginLeft: 10,
                            width: 40,
                            height: 40,
                            backgroundColor: '#000',
                            // zIndex: 1
                        }}></View>
                        <View style={{
                            // position: 'absolute',
                            position: 'relative',
                            // top: 40,
                            // left: 40,
                            right: 40,
                            // bottom: 40,
                            // marginLeft: 10,
                            width: 40,
                            height: 40,
                            backgroundColor: '#F00',
                            // zIndex: 1
                        }}></View>
                    </View>
                </View>

                <Text style={styles.title}>Min & Max dimensions</Text>
                <View style={styles.view}>
                    <View style={[styles.boxWrapperColumn, { width: 320}]}>
                        <View style={{
                            flex: 1,
                            height: 40,
                            maxWidth: 10,
                            margin: 10,
                            backgroundColor: '#000'
                        }}></View>
                        <View style={{
                            flex: 1,
                            height: 40,
                            minWidth: 330,
                            margin: 10,
                            backgroundColor: '#000'
                        }}></View>
                    </View>
                </View>

                <Text style={styles.title}>盒子模型</Text>
                <Text style={styles.subTitle}>margin, padding, border</Text>
                <View style={[styles.view, {backgroundColor: '#FFF'}]}>
                    <View style={{
                        width: '100%',
                        height: 40,
                        margin: 20,
                        borderWidth: 30,
                        borderColor: '#999',
                        padding: 40,
                        backgroundColor: '#000'
                    }}></View>
                    <View style={{
                        width: 0,
                        height: 0,
                        margin: 20,
                        borderWidth: 60,
                        borderColor: '#999',
                        borderLeftColor: '#333',
                        borderRightColor: '#666',
                        borderTopColor: '#999',
                        borderBottomColor: '#AAA',
                        // borderRightColor: 'rgba(0,0,0,0)',
                        // borderTopColor: 'rgba(0,0,0,0)',
                        // borderBottomColor: 'rgba(0,0,0,0)',
                        padding: 40,
                    }}></View>
                </View>





                <View style={styles.blank}></View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#F5FCFF'
    },
    scrollBtn: {
        width: 40,
        height: 40,
    },
    blank: {
        height: 30,
    },
    title: {
        marginTop: 20,
        fontSize: 22,
        color: '#333',
    },
    subTitle: {
        marginTop: 20,
        fontSize: 18,
        color: '#666',
    },
    content: {
        marginHorizontal: 24,
        lineHeight: 20,
        fontSize: 15,
        color: '#666',
    },
    code: {
        marginHorizontal: 24,
        lineHeight: 20,
        fontSize: 15,
        color: '#EEE',
        fontWeight: 'bold',
        backgroundColor: '#000'
    },
    image: {
        width: Dimensions.get("window").width,
        height: 200,
        resizeMode: Image.resizeMode.contain
    },
    view: {
        margin: 20
    },
    boxWrapperColumn: {
        marginVertical: 20,
        borderWidth: 1,
        borderColor: '#EEE',
        backgroundColor: '#FFF'
    },
    boxWrapperRow: {
        marginVertical: 20,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#EEE',
        backgroundColor: '#FFF',
    },
    boxWrapper: {
        marginVertical: 20,
        borderWidth: 1,
        borderColor: '#EEE',
        backgroundColor: '#FFF',
    },
    flexbox: {
        margin: 10,
        width: 30,
        height: 30,
        backgroundColor: '#000'
    }
});


export { ReactStyle };