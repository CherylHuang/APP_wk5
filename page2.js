import React from 'react';
import { View, Text, Image, StatusBar } from 'react-native';
import Header from './src/components/Header';
import Options from './src/components/Options';
import Nav from './src/components/Nav';

const page2 = () => {
    const { container, img, img2, box } = styles;
    return (
        <View style={[container]}>
            <StatusBar barStyle='light-content' />

            <Header headerText={'Hearthstone'} />
            <Options />

                <View style={[box]}>
                    <Image source={require('./src/Asset/img_firebat.png')}
                        style={[img]} />
                    <Image source={require('./src/Asset/img_forsen.png')}
                        style={[img]} />
                    <Image source={require('./src/Asset/img_kolento.png')}
                        style={[img2]} />
                </View>

            <Nav />
        </View>
    );
};

const styles = {
    container: {
        flex: 1,

    },
    box: {
        alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: '#f1f1f1',
    },
    img: {
        height: 200,
        width: 365,
        margin: 2.5,
    },
    img2: {
        height: 144,
        width: 365,
        margin: 2.5,
    },

};

export default page2;