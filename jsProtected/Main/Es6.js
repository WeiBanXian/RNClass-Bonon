'use strict';

import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Dimensions,
    Text,
    Image,
    ScrollView
} from 'react-native';

class Spread extends Component {
    render() {
        return <View>
            <Text style={styles.content}>
                { this.props.paramA }
            </Text>
        </View>
    }
}

class Es6 extends Component {

    static navigationOptions = {
        title: 'ES6',
    };

    state = {
        x: 1,
        y: 2
    }

    componentWillMount() {
        var s1 = 'foo';
        var s2 = 'foo';

        // var s1 = Symbol('foo')
        // var s2 = Symbol('foo')
        // alert(s1 === s2)
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
        // 变量声明 let
        var isOk = true;
        if (isOk) {
            var 测试let = 'OK or not OK';
            // let 测试let = 'OK or not OK';
        }
        // alert(测试let)
        for (let i=0;i<5;i++) {}
        // alert(i)

        // 对象的操作
        let baseObj = { a: '1' }
        let newObj = baseObj
        // let newObj = Object.assign({}, baseObj)
        newObj.a = '2'
        // alert(baseObj === newObj)

        let baseArray = [12, 21]
        let newArray = baseArray
        // let newArray = Object.assign([], baseArray)
        newArray[0] = 13

        let x = 'x', y = 'y';
        // [x, y] = [y, x]

        let spread = {
            paramA: "paramA",
            paramB: "paramB"
        }

        // func1()
        // func2()
        var func1 = function () {alert('func1')}
        // var func1 = () => {alert('func1')}

        function func2() {alert('func2')}

        return (
            <ScrollView style={styles.container}>
                <Text style={styles.title}>let/const</Text>
                <View style={styles.view}>
                    <Text style={styles.content}>{ '测试let: ' + 测试let }</Text>
                </View>

                <Text style={styles.title}>Object.assign()</Text>
                <View style={styles.view}>
                    <Text style={styles.content}>{ `baseObj: ${JSON.stringify(baseObj)}` }</Text>
                    <Text style={styles.content}>{ `newObj: ${JSON.stringify(newObj)}` }</Text>
                    <Text style={styles.content}>{ `baseArray: ${JSON.stringify(baseArray)}` }</Text>
                    <Text style={styles.content}>{ `newArray: ${JSON.stringify(newArray)}` }</Text>
                </View>

                <Text style={styles.title}>array.map()</Text>
                <View style={styles.view}>
                {
                    newArray.map((item, index) => {
                        return <Text key={item} style={styles.content}>{ `我是${item}， 我是第${index}个元素` }</Text>
                    })
                }
                </View>
                <Text style={styles.title}>Object.keys(obj).map()</Text>
                <View style={styles.view}>
                {
                    Object.keys(newObj).map((key, index) => {
                        return <Text key={key} style={styles.content}>{ `我是${key}， 我是第${index}个元素` }</Text>
                    })
                }
                </View>

                <Text style={styles.title}>解构赋值</Text>
                <View style={styles.view}>
                    <Text style={styles.content}>
                    { `x: ${x}, y: ${y}` }
                    </Text>
                </View>

                <Text style={styles.title}>Spread</Text>
                <View style={styles.view}>
                    <Spread
                        spread={spread}
                        {...spread}/>
                </View>
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
});


export { Es6 };