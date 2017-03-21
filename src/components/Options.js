import React from 'react';
import { View, Text } from 'react-native';

const options = () => {
    const { options, box, box_L, box_R, line } = styles;
    return (
            <View style={[options]}>
                <View style={[box]}>
                    <Text style={[box_L]}>LIVE</Text>
                    <View style={[line]}></View>
                </View>
                <Text style={[box_R]}>RECENT</Text>
            </View>
    );
};

const styles = {
    container: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    options: {
        flexDirection: 'row',
        height: 44,
        alignItems: 'center',
    },
    box: {
        flex: 1
    },
    box_L: {
        textAlign: 'center',
        fontSize: 13,
        color: '#6441a5',
    },
    line: {
        top: 8.5,
        height: 5,
        backgroundColor: '#6441a5',
    },
    box_R: {
        flex: 1,
        textAlign: 'center',
        fontSize: 13,
        color: '#bbbbbb',
    },
};

export default options;