import { Component } from 'react';
import { View, Text, SafeAreaView, FlatList, Image, StyleSheet } from 'react-native';
import {DATA} from '../utils/DummyData_Shortcuts';

export default class Shortcuts extends Component {
    render() {
        return (
            
                <View style={styles.component}>
                    <View>
                        <Text style={styles.shortcutTxt}>SHORTCUTS</Text>
                    </View>
                    <FlatList
                        horizontal={false}
                        data={DATA}
                        numColumns={4}
                        keyExtriactor={(index) => index.toString()}
                        renderItem={({ item }) => {
                            return (
                                <View style={styles.flatView}>

                                    {item.img && (
                                        <View style={styles.flatCircleIcon}>
                                            <Image
                                                source={{ uri: item.img }}
                                                style={styles.flatImgIcons}
                                            />
                                        </View>
                                    )}

                                    {!!item.title && (
                                        <View style={styles.flatTxtView}>
                                            <Text
                                                style={styles.flatTxt}>
                                                {item.title}
                                            </Text>
                                        </View>
                                    )}

                                </View>
                            );
                        }}
                    />
                </View>
            
        );
    }
}

const styles = StyleSheet.create({
    
    component: {
        backgroundColor: 'white',
        border: 0,
        borderRadius: 15,
        width: 360,
        height: 250,
    },
    shortcutTxt: {
        margin: 20,
        fontSize: 11,
        color: 'rgb(150,153,189)',
        fontWeight: 'bold',
    },
    flatView: {
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    flatCircleIcon: {
        border: 0,
        borderRadius: 100,
        padding: 12,
        backgroundColor: 'rgb(227,229,252)',
    },
    flatImgIcons: {
        height: 24,
        width: 24,
    },
    flatTxtView: {
        width: 90,
        paddingTop: 5,
        paddingBottom: 20,
    },
    flatTxt: {
        textAlign: 'center',        
        fontSize: 10,
        color: 'rgb(133,136,140)',

    }

})