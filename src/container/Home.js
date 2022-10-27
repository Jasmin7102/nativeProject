import { Component } from 'react';
import { SafeAreaView, View, Image, StyleSheet, Text, ScrollView } from 'react-native';
import Shortcuts from '../components/Shortcuts';
import Service from '../components/Service';
import Ott from '../components/Ott';
import ServiceMoney from '../components/ServiceMoney';

export default class Home extends Component {
    render() {
        return (
            <SafeAreaView style={style.container}>
                <ScrollView>
                    <ServiceMoney></ServiceMoney>
                    <View style={style.banner}>

                        <View style={style.bannerImg}>
                            <Image
                                source={{ uri: "https://static.toiimg.com/thumb/msid-94699793,width-400,resizemode-4/94699793.jpg" }}
                                style={style.iconOne}
                            />
                        </View>
                        
                        <View>
                        <Text style={style.bannerTxt}>
                            Check if your phone is 5G enabled
                        </Text>
                        </View>
                        
                        <View style={style.bannerImg}>
                            <Image
                                source={{ uri: "https://cdn-icons-png.flaticon.com/512/664/664866.png" }}
                                style={style.iconTwo}
                            />
                        </View>


                    </View>
                    <Shortcuts ></Shortcuts>
                    <View style={style.line} />
                    <Service></Service>
                    <Ott></Ott>

                </ScrollView>
            </SafeAreaView>
        );
    }
}


const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 10,
        marginTop: 6,
        backgroundColor: 'rgb(239,241,253)',

    },
    line: {
        marginTop: 20,
        borderBottomColor: 'rgb(232,234,249)',
        borderBottomWidth: 10,
        marginBottom: 20,
    },
    iconOne: {
        height: 25,
        width: 60,
    },
    iconTwo: {
        height: 20,
        width: 20,
    },

    banner: {
        backgroundColor: 'white',
        marginBottom: 20,
        borderRadius: 8,
        padding: 2,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    bannerTxt: {
        textAlign: 'center',
        fontSize: 12,
        padding: 10,
    },
    bannerImg: {
        
        justifyContent: 'space-around',
    }
})