import React, { Component } from 'react';
import {
    TouchableHighlight,
    Text,
    View,
    StyleSheet
} from 'react-native';

import themeColors from '../../utils/color';
import { getFont } from '../../utils/font';

const styles = StyleSheet.create({
    outlined: {
        borderColor: themeColors.accentColor,
        borderWidth: 1,
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 40,
    },
    outlinedText: {
        ...getFont('Light'),
        color: themeColors.accentColor
    }
})

const Button = (props) => (
    <TouchableHighlight>
        <View
            style={styles.outlined}
        >
            <Text style={styles.outlinedText}>{props.text}</Text>
        </View>
    </TouchableHighlight>
)

export default Button;