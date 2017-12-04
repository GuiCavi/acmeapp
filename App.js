import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import {
    HomeScreen,
    DetailsScreen,
    UsersListScreen
} from './app/screens';

import themeColors from './app/utils/color';

const Routes = {
    Users: {
        screen: UsersListScreen,
    },
    Home: {
        screen: HomeScreen,
    },
    Details: {
        screen: DetailsScreen,
    },
};

const RoutesConfig = {
    headerMode: 'none'
}

const RootNavigator = StackNavigator(Routes, RoutesConfig);

export default class App extends React.Component {
    render() {
        return <RootNavigator />;
    }
}