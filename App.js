import * as React from 'react';
import { View, Image, StyleSheet, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/container/Home';

function Pay() {
  return(
    Alert.alert("You pressesd Pay")
  );
}

function Shop() {
  return(
    Alert.alert("You pressesd Shop")
  );
}

function Discover() {
  return(
    Alert.alert("You pressesd Discover")
  );
}

function Help() {
  return(
    Alert.alert("You pressesd Help")
  )
}
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} options={{
          headerTitle: "manage",
          headerTitleAlign: "center",
          headerLeft: () => (
            <View style={style.circle}>
              <Image style={style.accountIcon} source={{ uri: "https://cdn-icons-png.flaticon.com/512/5253/5253539.png" }} />
            </View>
          ),
          headerRight: () => (
            <View style={style.circle}>
              <Image style={style.bellIcon} source={{ uri: "https://cdn-icons-png.flaticon.com/512/246/246688.png" }} />
            </View>
          ),
          tabBarLabel: 'manage',
          tabBarIcon: ({ }) => (
            <Image style={style.home} source={{ uri: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/30455c9384889.57ee562a4fba0.jpg" }} />
          )
        }} />
        <Tab.Screen name="pay" component={Pay} options={{
          tabBarLabel: 'pay',
          tabBarIcon: ({ }) => (
            <Image style={style.home} source={{ uri: "https://cdn-icons-png.flaticon.com/512/2342/2342096.png" }} />
          )}}/>
        <Tab.Screen name="shop" component={Shop} options={{
          tabBarLabel: 'shop',
          tabBarIcon: ({ }) => (
            <Image style={style.home} source={{ uri: "https://cdn-icons-png.flaticon.com/128/2956/2956395.png" }} />
          )}} />
        <Tab.Screen name="discover" component={Discover} options={{
          tabBarLabel: 'discover',
          tabBarIcon: ({ }) => (
            <Image style={style.home} source={{ uri: "https://cdn-icons-png.flaticon.com/512/5665/5665222.png" }} />
          )}} />
        <Tab.Screen name="help" component={Help} options={{
          tabBarLabel: 'help',
          tabBarIcon: ({ }) => (
            <Image style={style.home} source={{ uri: "https://cdn-icons-png.flaticon.com/512/1246/1246332.png" }} />
          )}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default App;

const style = StyleSheet.create({

  circle: {
    borderWidth: 1,
    borderRadius: 100,
    borderColor: 'rgb(192,193,203)',
    marginHorizontal: 20,
    padding: 8,
  },
  accountIcon: {
    height: 15,
    width: 15,
    padding: 10,
  },
  bellIcon: {
    height: 8,
    width: 8,
    padding: 10,
  },
  home: {
    width: 20,
    height: 20,
    fontSize: 10
},
});