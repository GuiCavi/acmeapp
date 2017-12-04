import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import themeColors from '../../utils/color';
import { getFont } from '../../utils/font';

import Icon from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
    text: {
        ...getFont('Light'),
        color: themeColors.lightGray,
        fontSize: 15     
    }
})

const IconWithText = (props) => (
    <View style={{ alignItems: 'center', flex: 1}}>
        <Icon name={`ios-${props.icon || 'cube'}-outline`} color={themeColors.accentColor} size={20}/>
        <Text style={styles.text}>{String(props.text) || 'Acme'}</Text>
    </View>
)

export default IconWithText;