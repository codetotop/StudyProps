import React, {Component} from 'react';
import PropTypes from 'prop-types';
/*import Importing from './util/Importing';*/

import {View, Platform, StyleSheet, TextInput, Text, Dimensions} from 'react-native';
import {TextInputLayout} from 'rn-textinputlayout'
import Button from 'react-native-button';
/* props: là đối tượng không thay đổi giá trị được(Imumutable Object)
*         là đối tượng chỉ cho phép đọc giá trị ra.
*         Trong react, dự liệu đi theo 1 chiều, nghĩa là từ component cha => các component con.
*
*  Lợi ích của việc sử dụng props trong component là giúp các component này được trừu tượng hoá,
*  để có thể sử dụng ở nhiều nơi khác nhau trong project.
*/
export default class Home extends Component {
    render() {
        return (
            <View style={StyleHomes.container}>
                <LoginForm ID={1} name={'DungNB'} hintUserName={'Email:'}></LoginForm>
            </View>
        )
    }
}
const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|((«[a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const screen = Dimensions.get("window");
const loginText = 'login';

class LoginForm extends Component {
    render() {
        return (
            <View style={StyleLoginForms.container}>
                <TextInputLayout style={StyleLoginForms.textInputLayout}
                                 checkValid={t => EMAIL_REGEX.test(t)}
                                 hintColor={this.props.hintColor}>
                    <TextInput style={StyleLoginForms.textInput} placeholder={this.props.hintUserName}/>
                </TextInputLayout>
                <TextInputLayout style={StyleLoginForms.textInputLayout}
                                 hintColor={this.props.hintColor}>
                    <TextInput style={StyleLoginForms.textInput}
                               placeholder={this.props.hintPassWord}
                               secureTextEntry={true}
                    />
                </TextInputLayout>
                <Button
                    style={StyleLoginForms.buttonLogin}
                    containerStyle={{
                        borderRadius: 4,
                        marginTop: 40,
                        backgroundColor: 'red',
                    }}>
                    {this.props.loginButton}
                </Button>
                <Text style={StyleLoginForms.createAccount}>{this.props.createAccount}</Text>
            </View>
        )
    }
}

const StyleHomes = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'stretch'
    }

})

const StyleLoginForms = StyleSheet.create({
    container: {
        marginHorizontal: 36
    },
    textInputLayout: {
        marginTop: 16,
    },
    textInput: {
        fontSize: 16,
        height: 40,
    },
    buttonLogin: {
        color: 'white',
        fontSize: 20,
        padding: 6,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    createAccount: {
        color: 'blue',
        fontWeight:'bold',
        alignSelf:'flex-end',
        fontSize: 16,
        marginTop: 40,
    }
})

LoginForm.propTypes = {
    ID: PropTypes.number,
    name: PropTypes.string,
    hintPassWord: PropTypes.string,
    hintUserName: PropTypes.string,
    loginButton: PropTypes.string,
}

LoginForm.defaultProps = {
    ID: 200,
    name: 'DuanVH',
    hintUserName: 'User name:',
    hintPassWord: 'Pass Word:',
    hintColor: 'gray',
    loginButton: 'Login',
    createAccount: 'Create New Account'
}