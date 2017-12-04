import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class Home extends Component {
    constructor() {
        super();

        this.state = {
            value: 0
        }
    }

    _handleClick() {
        this.setState({
            value: this.state.value+1
        })
    }

    render() {
        return(
            <View>
                <Text>{this.state.value}</Text>
                
                <MyButton onClick={this._handleClick}/>
            </View>
        );
    }
}

class MyButton extends Component {
    render() {
        return(
            <Button onClick={this.props.onClick}/>
        );
    }
}