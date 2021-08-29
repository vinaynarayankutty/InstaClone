import React from 'react';
import {Image} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/HomeScreen';
import logo from '../assets/images/logo.png';

const HomeStack = createNativeStackNavigator();

const HomeRoutes = () => {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: true}}>
      <HomeStack.Screen
        name="Homescreen"
        component={HomeScreen}
        options={{
          title: 'Instagram',
          headerTitle: () => (
            <Image
              source={logo}
              resizeMode="contain"
              style={{
                width: 140,
                height: 40,
              }}
            />
          ),
          headerLeft: () => (
            <Feather name={'camera'} size={25} color={'#000'} />
          ),
          headerRight: () => (
            <Ionicons name="paper-plane-outline" size={25} color={'#000'} />
          ),
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeRoutes;
