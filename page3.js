import React from 'react';
import { View, Text, Image, StatusBar } from 'react-native';
import Search from './src/components/Search';
import Options from './src/components/Options';
import Nav from './src/components/Nav';

const page2 = () => {
    const { container, img, box, row, row2 } = styles;
    return (
        <View style={[container]}>
            <StatusBar barStyle='light-content' />

            <Search />

            <View style={[box]}>
                <View style={[row2]}>
                    <Image source={require('./src/Asset/img_leagueoflegends.png')}
                            style={[img]} />
                    <Image source={require('./src/Asset/img_counterstrike.png')}
                            style={[img]} />
                </View>
                <View style={[row]}>
                    <Image source={require('./src/Asset/img_hearthstone.png')}
                            style={[img]} />
                    <Image source={require('./src/Asset/img_dota2.png')}
                            style={[img]} />
                </View>
                <View style={[row]}>
                    <Image source={require('./src/Asset/img_h1z1.png')}
                            style={[img]} />
                    <Image source={require('./src/Asset/img_destiny.png')}
                            style={[img]} />
                </View>
            </View>

        <Nav />
        </View>
    );
};

const styles = {
    container: {
        flex: 1,
        position: 'relative',

    },
    box: {
        alignItems: 'center',
        backgroundColor: '#f1f1f1',
    },
    row: {
        flexDirection: 'row',
    },
    row2: {
        flexDirection: 'row',
        marginTop: 2.5,
    },
    img: {
        height: 180,
        width: 180,
        margin: 2.5,
    },
    img2: {
        height: 144,
        width: 365,
        margin: 2.5,
    },

};

export default page2;