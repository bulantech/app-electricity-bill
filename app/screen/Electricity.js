import React, { Component, useState, useEffect } from 'react';
import {StyleSheet, Text, TextInput, View, TouchableOpacity} from 'react-native';

// export default class Calculate extends React.Component {
export default function Electricity({navigation, route}) {
    // constructor(porps) {
    //     super(props)
    //     this.state = { count1: 0 , count2: 0 , count3: 0 , result: ''}
    // }

    const [count1, setCount1] = useState('');
    const [count2, setCount2] = useState('');
    const [count3, setCount3] = useState('');
    const [result, setResult] = useState('');

    const onPress = () => {
        // let resultCount = (this.state.count2-this.state.count1)* this.state.count3;
        // await this.setState({ result: resultCount })        
        
        const resultCount = (parseInt(count2)-parseInt(count1))* parseInt(count3);
        setResult(resultCount+'')
        // console.log('count1, count2, count3, resultCount =>', count1, count2, count3, resultCount)        
    }

    // render() {
        return (
            <View style= {[{alignItems:'center'}]}>
                <View style = {styles.BG}>
                    <Text style={styles.textset}> คำนวณค่าไฟ </Text>
                </View>
                <View>
                    <TextInput
                        style={styles.textIn1}
                        placeholder="กรอกเลขมิเตอร์ไฟฟ้า (เดือนที่แล้ว)" 
                        onChangeText={(count1) => setCount1(count1)}
                    />
                    <TextInput
                        style={styles.textIn2}
                        placeholder="กรอกเลขมิเตอร์ไฟฟ้า (เดือนนี้)"
                        onChangeText={(count2) => setCount2(count2)}
                    />
                    <TextInput
                        style={styles.textIn3}
                        placeholder="กรอกราคาต่อหนึ่งหน่วย"
                        onChangeText={(count3) => setCount3(count3)}
                    />
                </View>
                <View>
                    <TouchableOpacity onPress={onPress}>
                        <Text style={[{fontSize: 20, backgroundColor: '#ffe57e', margin: 20}]}>
                            คำนวณ
                        </Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={[{fontSize: 20, margin: 20}]}>
                    รวมทั้งสิ้น : {result}
                    </Text>
                </View>
            </View>

        );
    // }
}

const styles = StyleSheet.create({
    BG:{
        paddingTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#c4c4fb',
        width: '100%'
    },
    textset: {
        fontSize: 30,
        color: '#000000',
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: 'center',
        height: '35%'
    },
    textIn1:{
        marginTop: 40,
        height: 30,
        borderColor: '#fbc4dc',
        borderWidth: 1,
        textAlign: 'center',
        textAlignVertical: 'center',
        width: 210
    },
    textIn2:{
        marginTop: 5,
        height: 30,
        borderColor: '#fbc4dc',
        borderWidth: 1,
        textAlign: 'center',
        textAlignVertical: 'center',
        width: 210
    },
    textIn3:{
        marginTop: 5,
        height: 30,
        borderColor: '#fbc4dc',
        borderWidth: 1,
        textAlign: 'center',
        // get textAlign() {
        //     return this._textAlign;
        // },
        // set textAlign(value) {
        //     this._textAlign = value;
        // },
        // get textAlign() {
        //     return this._textAlign;
        // },
        // set textAlign(value) {
        //     this._textAlign = value;
        // },
        textAlignVertical: 'center',
        width: 210
    },
 });