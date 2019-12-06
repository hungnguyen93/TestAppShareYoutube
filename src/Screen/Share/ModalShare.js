import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
export default class ModalShare extends Component {

_goBack=()=>{
    this.props.navigation.goBack();
}
    render() {
        return (
            <View style={stModalShare.container}>
                <View style={{position:'absolute',backgroundColor:'transparenst', width:'100%', height:'100%'}} onTouchEnd={this._goBack}/>
                <View style={{ height: '25%', width: '90%', backgroundColor: 'white',  justifyContent:'center', paddingHorizontal:10}}>
                <Text>Youtube URL:</Text>
                    <View style={{ flexDirection: 'row',}}>
                        <View style={{flex:1}}>
                            <TextInput
                                style={stModalShare.InputStyle}
                                placeholder={'Youtube URL:'}
                                onChangeText={this._onChangeUser}

                            />
                            <TouchableOpacity
                                style={stModalShare.btnStyle}
                                onPress={this._share}>
                                <Text style={{ }}>Share</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>

            </View>
        );
    }
}
const stModalShare = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.4)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    InputStyle: {
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        borderRadius: 4,
    },
    btnStyle: {
        paddingVertical:10,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:10,
        borderWidth: 1,
        borderColor: 'gray',
    }

});
