import React from 'react';
import { View, Text, Image } from 'react-native';

const header = (props) => {
    const { box, header, btn, add } = styles;
    return (
        <View>
            <View style={[add]}></View>

                <View style={[header]}>
                    <Image source={require('../Asset/btn_back.png')} 
                           style={[btn]} />
                    <Text style={[box]}>{props.headerText}</Text>
                    <Image source={require('../Asset/btn_like.png')} 
                            style={[btn]} />
                </View>        
            
        </View>
    );
};

const styles = {
    add: {
        height: 20,
        backgroundColor: '#6441a5',
    },
    header: {
        backgroundColor: '#6441a5',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn: {
      width: 33,
      height: 33,
      padding: 12,
    },
    box: {
        backgroundColor: '#6441a5',
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 12,
        width: 292,
    },
};

export default header;