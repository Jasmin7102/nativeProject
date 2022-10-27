import { Component } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Text } from 'react-native';

export default class ServiceMoney extends Component {
    render() {
        return (
            <View style={style.mainColumn}>
                <View style={style.column}>
                    <View style={style.row}>
                        <Text style={style.service}>SERVICE</Text>
                        <Image
                            source={{ uri: "https://cdn-icons-png.flaticon.com/512/758/758911.png" }}
                            style={style.iconOne}
                        />
                    </View>
                    <View style={style.txtView}>
                        <Text style={style.textOne}>5 Services</Text>
                    </View>
                    <View style={style.buttonView}>
                        <TouchableOpacity
                            style={style.button}
                            onPress={this.onPress}
                        >
                            <Text style={style.buttonTxt}>VIEW DETAILS</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={style.column}>
                    <View style={style.row}>
                        <Text style={style.service}>MONEY</Text>
                        <Image
                            source={{ uri: "https://img.icons8.com/ios-glyphs/344/lock.png" }}
                            style={style.iconTwo}
                        />
                    </View>
                    <View style={style.txtView}>
                        <Text style={style.textMoneyOne}>&#x20b9;<Text style={style.bullets}>{'\u2B24'}{'\u2B24'}{'\u2B24'}{'\u2B24'}{'\u2B24'}{'\u2B24'}</Text> </Text>
                        <Text style={style.textMoneyTwo}>in your wallet</Text>
                    </View>
                    <View style={style.buttonView}>
                        <TouchableOpacity
                            style={style.button}
                            onPress={this.onPress}
                        >
                            <Text style={style.buttonTxt}>SHOW BALANCE</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}


const style = StyleSheet.create({

    bullets: {
        fontSize: 5,
    },
    service: {
        margin: 10,
        fontSize: 11,
        color: 'rgb(150,153,189)',
        fontWeight: 'bold',
    },
    iconOne: {
        height: 13,
        width: 13,
        margin: 10,
    },
    iconTwo: {
        height: 18,
        width: 18,
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
        fontSize: 16,
        padding: 4,
        marginBottom: 40,
    },
    textMoneyOne: {
        fontSize: 16,
        padding: 4,
    },
    textMoneyTwo: {
        fontSize: 14,
        color: 'rgb(122,122,122)',
        padding: 4,
        marginBottom: 10,
    },

    mainColumn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
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
    },
    buttonView: {
        padding: 15,
    },
    button: {
        backgroundColor: 'black',
        //color: 'white',
        borderRadius: 5,

    },
    buttonTxt: {
        color: 'white',
        fontSize: 10,
        textAlign: 'center',
        padding: 10,
    }
})