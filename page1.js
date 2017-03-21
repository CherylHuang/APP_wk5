import React from 'react';
import { View, Text, Image } from 'react-native';

const page1 = () => {
    const { purple, pic } = styles;
    return (
        <View style={[purple]}>

            <Image source={require('./src/Asset/logo_twitch.png')} 
                   style={[pic]} />
        </View>
    );
};

const styles = {
    pic: {
        width: 185.5,
        height: 61.5,
    },
    purple: {
        backgroundColor: '#6441a5',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
};

export default page1;