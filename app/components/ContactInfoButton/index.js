import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight
} from 'react-native';

import { getFont } from '../../utils/font';
import themeColors from '../../utils/color';

const styles = StyleSheet.create({
    button: {
        flex: 1,
        backgroundColor: themeColors.darkGray,
        alignItems: 'center',
        justifyContent: 'center'
    },
    contactInfoText: {
        ...getFont('ExtraLight'),
        fontSize: 22,
        color: themeColors.accentColor
    }
});

const ContactInfoButton = (props) => (
    <TouchableHighlight style={[styles.button, props.style]}>
        <View style={[styles.button, props.style]}>
            <Text style={styles.contactInfoText}>{props.text}</Text>
        </View>
    </TouchableHighlight>
)

export default ContactInfoButton;