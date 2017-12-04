import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  ScrollView,
  RefreshControl,
  TouchableHighlight
} from 'react-native';

import {
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

class UsersListScreen extends Component {
    constructor() {
        super();

        this.state = {
            loading: true,
            refreshing: false,
            users: '',
        }

        this.onRefresh = this.onRefresh.bind(this);
    }

    componentWillMount() {
        this.getUser();
        // this.getFriends();
    }

    async getUser() {
        const response = await getUser();
        const users = await response.json();

        this.setState({
            users,
            loading: false,
            refreshing: false
        })
    }

    getFriends() {

    }

    onRefresh() {
        this.setState({ refreshing: true, users: [] });
        this.getUser();
    }

    render() {
        if (this.state.loading) {
            return (
                <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: themeColors.darkGray }}>
                    <ActivityIndicator size={30} color={themeColors.accentColor}/>
                </View>
            );
        }

        return (
            <View style={{ flex: 1, backgroundColor: themeColors.darkGray }}>
                <FlatList
                    data={this.state.users}
                    renderItem={({ item }) => <UserListItem user={item} navigation={this.props.navigation}/>}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={{ paddingHorizontal: 10, paddingVertical: 20 }}
                    refreshControl={
                        <RefreshControl
                            colors={[ themeColors.accentColor, themeColors.darkGray ]}
                            refreshing={this.state.refreshing}
                            onRefresh={this.onRefresh}
                        />
                    }
                    //style={{ backgroundColor: 'red' }}
                />       
            </View>
        );
    }
}

class UserListItem extends Component {
    render() {
        return(
            <View style={{
                paddingHorizontal: 10,
                paddingVertical: 10,
                borderColor: themeColors.accentColor,
                borderWidth: 1,
                marginBottom: 10,
                borderRadius: 5
            }}>
                <TouchableHighlight
                    onPress={() => this.props.navigation.navigate('Home', {selectedUser: this.props.user.id})}
                >
                    <Text style={{ color: 'white' }}>{this.props.user.username}</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

export default UsersListScreen;