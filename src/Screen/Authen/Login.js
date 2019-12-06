import React, { Component, Fragment } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    Image,
    TextInput,
    FlatList
} from 'react-native';
import { Images } from '../../images';
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.username = '';
        this.pass = '';
        this.state = {
            register: false
        };
    };
    _goScreen = () => {
        if (this.username.trim() && this.pass.trim())
            this.props.navigation.navigate('sc_homepage',{user:this.username});
    };

    _onChangeUser = (text) => {
        this.username = text;
    }

    _onChangePass = (text) => {
        this.pass = text;
    }

    _renderItem = ({ item }) => {
        return <Fragment>
            <View style={{ height: 200, backgroundColor: 'rgba(0,0,0,0.4)', marginTop: 10 }}></View>
            <Text style={{ color: 'red', fontWeight: '500', fontSize: 16, marginTop: 5 }}>Movie tilte {item}</Text>
            <Text style={{}}>Share by: abc@gmail.com</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text>89</Text>
                    <Image source={Images.icLike} style={{ height: 17, width: 17, marginLeft: 5 }} resizeMode='contain' />
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10 }}>
                    <Text>89</Text>
                    <Image source={Images.icLike} style={{ height: 17, width: 17, marginLeft: 5, transform: [{ rotate: '180deg' }] }} resizeMode='contain' />
                </View>
            </View>
            <Text style={{}}>Description</Text>
            <Text style={{ fontWeight: '600', marginTop: 5 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
        </Fragment>

    }

    _toggleLogin = (key) => () => {
        switch (key) {
            case 0:
                if (this.state.register) this.setState({ register: false });
                else this._goScreen();
                break;
            case 1:
                this.setState({ register: true });
                break;

        };
    }



    render() {
        const { register } = this.state
        return (
            <SafeAreaView style={{ flex: 1 }}>

                <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center' }}>
                    <Image source={Images.icHomePage} style={{ height: 50, width: 50, tintColor: 'black' }} resizeMode='contain' />
                    <Text style={{ fontSize: 30, marginLeft: 10 }}>Funny movies</Text>
                </View>
                <View style={{ flex: 1, paddingHorizontal: 10, paddingTop: 20 }}>
                    <View style={{ paddingHorizontal: 30 }}>
                        <TextInput
                            style={stlogin.InputStyle}
                            placeholder={'Username'}
                            onChangeText={this._onChangeUser}

                        />
                        <TextInput
                            style={stlogin.InputStyle}
                            placeholder={'password'}
                            secureTextEntry
                            onChangeText={this._onChangePass}
                        />

                        {
                            register ? <TextInput
                                style={stlogin.InputStyle}
                                placeholder={'Confirm password'}
                                secureTextEntry
                                onChangeText={this._onPass}
                            />
                                : null
                        }

                        <View style={{ height: 40, marginTop: 10, flexDirection: 'row' }}>
                            <TouchableOpacity
                                style={[stlogin.btnStyle, { backgroundColor: register ? 'gray' : 'blue' }]}
                                onPress={this._toggleLogin(0)}>
                                <Text style={{ color: 'white' }}>Login</Text>

                            </TouchableOpacity>
                            <View style={{ width: 20 }} />
                            <TouchableOpacity
                                onPress={this._toggleLogin(1)}
                                style={[stlogin.btnStyle,{ backgroundColor: register ? 'blue' : 'gray' }]}
                            >
                                <Text style={{ color: 'white' }}>Register</Text>
                            </TouchableOpacity>
                        </View>
                    </View>


                    <View style={{ flex: 1, paddingTop: 10 }}>
                        <FlatList
                            data={[1, 2, 3, 4]}
                            renderItem={this._renderItem}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </View>
                </View>




            </SafeAreaView>

        );
    }
    componentDidMount() {

    }
}
const stlogin = StyleSheet.create({
    container: {
        flex: 1
    },
    InputStyle: {
        borderWidth: 0.5,
        borderColor: 'gray',
        padding: 10,
        borderRadius: 4,
        marginTop: 10
    },
    btnStyle: {
        flex: 1,
        backgroundColor: 'gray',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center'
    }

});
