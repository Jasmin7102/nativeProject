import { Component } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

export default class Ott extends Component {
    render() {
        return (
            <View style={style.mainColumn}>
                <View style={style.column}>
                    <View style={style.row}>
                        <Image
                            source={{ uri: "https://img.freepik.com/premium-vector/phone-international-roaming-call-voip-telephony-vector-stock-illustration_100456-7987.jpg?w=2000" }}
                            style={style.iconOne}
                        />
                        <Image
                            source={{ uri: "https://img.icons8.com/fluency-systems-filled/344/long-arrow-right.png" }}
                            style={style.iconTwo}
                        />
                    </View>
                    <View style={style.txtView}>
                        <Text style={style.textOne}>travel the world with airtel</Text>
                        <Text style={style.textTwo}>explore international roaming packs</Text>
                    </View>
                </View>
                <View style={style.column}>
                    <View style={style.row}>
                        <Image
                            source={{ uri: "https://play-lh.googleusercontent.com/kP8v0Isxn2NN1iRwmQCgDNXJXmMZ3vjd3fZ7lB_Z-Nuk5gnWacvgMjcZByhCufL5EQ" }}
                            style={style.iconRowOne}
                        />
                        <Image
                            source={{ uri: "https://img.icons8.com/fluency-systems-filled/344/long-arrow-right.png" }}
                            style={style.iconTwo}
                        />
                    </View>
                    <View style={style.txtView}>
                        <Text style={style.textOne}>15 OTTs in 1 app</Text>
                        <Text style={style.textTwo}>get Xstream Premium plan at &#x20b9;<Text style={style.price}>1100</Text> {'\n'}&#x20b9;149/month</Text>
                    </View>
                </View>
            </View>
        );
    }
}


const style = StyleSheet.create({

    iconOne: {
        height:70,
        width: 70,
    },
    iconTwo: {
        height: 30,
        width: 30,
        margin: 10,
    },
    iconRowOne: {
        height: 90,
        width: 90,
    },
    txtView: {
        margin: 10,
    },
    textOne: {
        fontSize: 18,
        padding: 4,
    },
    textTwo: {
        fontSize: 14,
        color: 'rgb(122,122,122)',
        padding: 4,
    },

    mainColumn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    column: {
        backgroundColor: 'white',
        width: "48%",
        borderRadius: 8,
        //padding: 2,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },
    price: {
        textDecorationLine: 'line-through', 
        textDecorationStyle: 'solid',
    }
})