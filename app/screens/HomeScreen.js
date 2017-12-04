import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  ScrollView,
  Alert
} from 'react-native';

import {
    CoverImage,
    ThumbPicture,
    Button,
    IconWithText,
    ContactInfoButton
} from '../components';

import { getFont } from '../utils/font';
import themeColors from '../utils/color';
import { getUser } from '../utils/fetch';

const styles = StyleSheet.create({
    myName: {
        ...getFont('ExtraLight'),
        fontSize: 28,
        color: 'white',
        marginBottom: 10
    },
    myInfo: {
        fontSize: 14,
        color: 'white'
    },
    contactInfoText: {
        ...getFont('ExtraLight'),
        fontSize: 22,
        color: themeColors.accentColor
    }
});

class HomeScreen extends Component {
    constructor() {
        super();

        this.state = {
            loading: true,
            user: '',
            friends: [],
            myId: 2
        }
    }

    componentWillMount() {
        this.getUser();
        // this.getFriends();
    }

    async getUser() {
        const response = await getUser(this.props.navigation.state.params.selectedUser);
        const user = await response.json();
        console.log(user);

        this.setState({
            user,
            loading: false
        })
    }

    getFriends() {

    }

    render() {
        if (this.state.loading) {
            return (
                <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: themeColors.darkGray }}>
                    <ActivityIndicator size={30} color={themeColors.accentColor}/>
                </View>
            );
        }

        if (this.state.user.profile == null) {
            Alert.alert(
                'Aviso',
                'Vá terminar de preencher seu perfil',
                [
                    {text: 'Voltar', onPress: () => this.props.navigation.goBack()}
                ]
            )
            return (
                <View></View>
            );
        }

        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <CoverImage style={{ justifyContent: 'space-around', alignItems: 'center' }}>

                        <View style={{ alignItems: 'center' }}>
                            <ThumbPicture style={{ marginBottom: '2%' }} />
                            <Text style={styles.myName}>{this.state.user.username}</Text>

                            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                <Text style={[styles.myInfo, getFont('Medium')]}>{this.state.user.profile.job || ''} </Text>
                                <Text style={[styles.myInfo, getFont('ExtraLight')]}>- {this.state.user.profile.city}</Text>
                            </View>
                        </View>

                        <Button text='Follow' />
                    </CoverImage>
                </View>
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 1, backgroundColor: themeColors.darkGray, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <IconWithText icon={'heart'} text={this.state.user.profile.heart_count}/>
                        <IconWithText icon={'chatbubbles'} text={this.state.user.profile.messages_count}/>
                        <IconWithText icon={'pulse'} text={`${this.state.user.profile.rate_average || 0}%`}/>
                    </View>
 

                    <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <ContactInfoButton text="Message"/>
                        <ContactInfoButton text="Contact" style={{ backgroundColor: themeColors.lightGray }}/>
                    </View>


                    <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
                        {/* <ScrollView horizontal={true}>
                        </ScrollView> */}
                        <Button text='Thanks' />
                    </View>
                </View>                
            </View>
        );
    }
}

export default HomeScreen;