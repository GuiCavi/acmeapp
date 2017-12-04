import React, { Component } from 'react';
import {
    View,
    Image,
    StyleSheet,
    Platform
} from 'react-native';

const imageSize = 100;

const styles = StyleSheet.create({
    imageSize: {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize/2
    },
    imageSizeSmall: {
        width: imageSize/2,
        height: imageSize/2,
        borderRadius: imageSize/4
    },
    shadow: {
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.33,
                shadowRadius: 4,
            },
            android: {
                elevation: 6
            }
        })
    }
})

const ThumbPicture = (props) => (
    <View style={[props.small ? styles.imageSizeSmall : styles.imageSize, styles.shadow, props.style]}>
        <Image
            source={require('../../../assets/images/image-1.png')}
            //resizeMode='cover'
            style={[props.small ? styles.imageSizeSmall : styles.imageSize]}
        />
    </View>
)

export default ThumbPicture