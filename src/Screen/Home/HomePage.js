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
export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.username = '';
        this.pass = '';
        this.username = this.props.navigation.getParam('user', '');
        this.state = {
            register: false
        };
    };
    _goBack = () => {
            this.props.navigation.navigate('stackAuthen');
    };

    _share=()=>{
        this.props.navigation.navigate('modal_share');
    }

    _renderItem = ({ item }) => {
        return <Fragment>
            <View style={{ height: 200, backgroundColor: 'rgba(0,0,0,0.4)', marginTop: 10 }}></View>
            <View style={{ flexDirection: 'row', alignItems:'center' }}>
                <View>
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
                </View>

                <TouchableOpacity
                    style={[stlogin.btnStyle, { backgroundColor: 'blue', paddingVertical: 10, marginLeft: 10 }]}
                    onPress={this._share}>
                    <Text style={{ color: 'white' }}>Share</Text>
                </TouchableOpacity>
            </View>
            <Text style={{}}>Description</Text>
            <Text style={{ fontWeight: '600', marginTop: 5 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
        </Fragment>



    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>

                <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10 }}>
                    <Image source={Images.icHomePage} style={{ height: 50, width: 50, tintColor: 'black' }} resizeMode='contain' />
                    <Text style={{ fontSize: 30, marginLeft: 10 }}>Funny movies</Text>
                    <TouchableOpacity
                        style={[stlogin.btnStyle, { backgroundColor: 'blue', paddingVertical: 10, marginLeft: 10 }]}
                        onPress={this._goBack}>
                        <Text style={{ color: 'white' }}>Logout</Text>

                    </TouchableOpacity>
                </View>
                <Text style={{ marginLeft: 10 }}>Welcome: {this.username}</Text>

                <View style={{ flex: 1, paddingHorizontal: 10, paddingTop: 10 }}>
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
