import { Component } from 'react';
import { View, Text, SafeAreaView, FlatList, Image, StyleSheet, ScrollView } from 'react-native';
import { dataOne } from '../utils/DummyData_ServiceOne';
import { dataTwo } from '../utils/DummyData_ServiceTwo';

export default class Shortcuts extends Component {
    render() {
        return (
            <View style={styles.component}>

                <View>
                    <Text style={styles.serviceTxt}>BUY NEW SERVICE</Text>
                </View>
                <View style={styles.section}>
                    {dataOne.map((item) => {
                        return (
                            <View style={styles.list}>
                                <View style={styles.circleIcons}>
                                    <Image
                                        style={styles.ImgIcons}
                                        source={{ uri: item.img }}
                                    />
                                </View>

                                <View>
                                    <Text style={styles.title}>{item.title}</Text>
                                </View>

                            </View>
                        );
                    })}
                </View>
                <View style={styles.giftView}>
                    <Text style={styles.giftTxt}>
                        <Image
                            style={styles.gift}
                            source={{ uri: "https://cdn-icons-png.flaticon.com/512/548/548427.png" }}
                        />
                        {' '}Free Home Delivery of SIM
                    </Text>
                </View>

                <View style={styles.section}>
                    {dataTwo.map((item,index) => {
                        return (
                            <View style={styles.list}>
                                <View style={styles.circleIcons}>
                                    <Image
                                        style={styles.ImgIcons}
                                        source={{ uri: item.img }}
                                    />
                                </View>
                                
                                {item.category && <Text style={styles.category}> {item.category} </Text>}
                                <View>
                                    <Text style={styles.title}>{item.title}</Text>
                                </View>

                            </View>
                        );
                    })}
                </View>
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
        height: 270,
        marginBottom: 20,
    },
    serviceTxt: {
        margin: 20,
        fontSize: 11,
        color: 'rgb(150,153,189)',
        fontWeight: 'bold',
    },
    section: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    list: {

        alignItems: 'center',
    },
    circleIcons: {
        border: 0,
        borderRadius: 100,
        padding: 15,
        backgroundColor: 'rgb(227,229,252)',
    },
    ImgIcons: {
        height: 20,
        width: 20,
    },
    title: {
        textAlign: 'center',
        fontSize: 10,
        color: 'rgb(133,136,140)',

    },
    giftView: {
        margin: 20,
        border: 0,
        borderRadius: 10,
        width: '90%',
        padding: 10,
        alignItems: 'center',
        backgroundColor: 'rgb(188,38,30)',
    },
    gift: {
        height: 15,
        width: 15,


    },
    giftTxt: {
        color: 'white',

        textAlign: 'center',
    },
    category: {
        backgroundColor: 'red',
        fontSize: 9,
        textAlign: 'center',
        borderWidth: 0,
        overflow: 'hidden',
        borderRadius: 4,
        color: 'white',
        position: 'absolute',
        top: 0,
        
    }

})