import React from 'react';
import { View, Text, Image } from 'react-native';

const nav = () => {
    const { line, white, nav, nav_img1, nav_img2, nav_img3, nav_img4,
            nav_word1, nav_word2, nav_word3, nav_word4, container } = styles;
    return (
        <View style={[container]}>
           <View style={[line]}></View>
           <View style={[white]}>
                <View style={[nav]}>
                    <Image source={require('../Asset/btn_games_selected.png')}
                       style={[nav_img1]} />
                    <Text style={[nav_word1]}>Games</Text>
                </View>
                <View style={[nav]}>
                    <Image source={require('../Asset/btn_channels.png')}
                        style={[nav_img2]} />
                    <Text style={[nav_word2]}>Channels</Text>
                </View>
                <View style={[nav]}>
                    <Image source={require('../Asset/btn_following.png')}
                       style={[nav_img3]} />
                    <Text style={[nav_word3]}>Following</Text>
                </View>
                <View style={[nav]}>
                    <Image source={require('../Asset/btn_me.png')}
                       style={[nav_img4]} />
                    <Text style={[nav_word4]}>Me</Text>
                </View>
           </View>
        </View>
    );
};

const styles = {
    container: {
        flex: 1,
        position: 'absolute',
        top: 617.5,
    },
    line: {
        backgroundColor: 'rgba(0,0,0,0.2)',
        height:0.5,
        width: 375,
    },
    white: {
        backgroundColor: 'white',
        height: 49,
        width: 375,
        flexDirection: 'row',
    },
    nav: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    nav_img1: {
        width: 20.5,
        height: 20.5,
    },
    nav_img2: {
        width: 27,
        height: 17.5,
    },
    nav_img3: {
        width: 24,
        height: 21.5,
    },
    nav_img4: {
        width: 22.5,
        height: 22.5,
    },
    nav_word1: {
        fontSize: 10,
        color: '#6441a5',
        top:7,
    },
    nav_word2: {
        fontSize: 10,
        color: '#bbbbbb',
        top:7.5,
    },
    nav_word3: {
        fontSize: 10,
        color: '#bbbbbb',
        top:6.5,
    },
    nav_word4: {
        fontSize: 10,
        color: '#bbbbbb',
        top:6,
    },

};

export default nav;