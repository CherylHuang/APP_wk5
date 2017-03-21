import React from 'react';
import { View, Text, Image } from 'react-native';

const search = (props) => {
    const { box, header, btn, add, icon_search, word } = styles;
    return (
        <View>
            <View style={[add]}></View>

                <View style={[header]}>
                    <View style={[box]}>
                        <Image source={require('../Asset/icon_search.png')} 
                            style={[icon_search]} />
                        <Text style={[word]}>Search</Text>
                    </View>
                    <Image source={require('../Asset/btn_cast.png')} 
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
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon_search: {
        width: 12.8,
        height: 12.8,
        margin: 8.7,
    },
    btn: {
      width: 25,
      height: 20,
      margin: 4.5,
    },
    box: {
        flexDirection: 'row',
        backgroundColor: '#311f53',
        width: 320,
        height: 30,
        borderRadius: 5,
        alignItems: 'center',
        margin: 5,
        padding: 2.3,
    },
    word: {
        color: '#b9a3e3',
        textAlign: 'center',
        fontSize: 15,
    },
};

export default search;