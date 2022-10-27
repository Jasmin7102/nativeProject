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
                        <Text>
                        <Image
                            source={{ uri: "https://static.toiimg.com/thumb/msid-94699793,width-400,resizemode-4/94699793.jpg" }}
                            style={style.iconOne}
                        />
                    
                    
            
                        Check if your phone is 5G enabled
                        <Image
                            source={{ uri: "https://cdn-icons-png.flaticon.com/512/664/664866.png" }}
                            style={style.iconOne}
                        />
                    </Text>
                </View>
                <Shortcuts></Shortcuts>
                <View style={style.line} />
                <Service></Service>
                <Ott></Ott>

            </ScrollView>
            </SafeAreaView >
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
        height: 13,
        width: 40,
        margin: 10,
    },
    banner: {
        backgroundColor: 'white',
        marginBottom: 20,
        borderRadius: 8,
    }
})