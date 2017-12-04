import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';

const styles = StyleSheet.create({
    contentStyle:{
        zIndex: 10,
        backgroundColor: 'rgba(0,0,0,0.5)',
        flex: 1
    },
    image: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
    }
});

class CoverImage extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Image
                    source={require('../../../assets/images/cover.jpg')}
                    resizeMode="cover"
                    style={styles.image}
                />

                <View style={[styles.contentStyle, this.props.style]}>
                    {this.props.children}
                </View>
            </View>
        );
    }
}

export default CoverImage;