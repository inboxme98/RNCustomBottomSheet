import React from "react";
import { View, Image } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


import Home from "../Home";
import Search from "../Search";
import Message from "../Message";
import Cash from "../Cash";
import Learning from "../Learning";

import { COLORS } from "../../constants";

const Tab = createBottomTabNavigator();

const Tabs = () => {

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    const tintColor = focused ? COLORS.primary : COLORS.gray;

                    switch (route.name) {
                        case "Home":
                            return (
                                <Image
                                    source={require('../../assets/icons/home.png')}
                                    //resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25
                                    }}
                                />
                            );
                        case "Message":
                            return (
                                <Image
                                    source={require('../../assets/icons/message.png')}
                                    //resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25
                                    }}
                                />
                            );
                        case "Cash":
                            return (
                                <Image
                                source={require('../../assets/icons/cash.png')}
                                //resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25
                                }}
                            />
                            );
                        case "Search":
                            return (
                                <Image
                                    source={require('../../assets/icons/search.png')}
                                    //resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25
                                    }}
                                />
                            );
                        case "Learning":
                            return (
                                <Image
                                    source={require('../../assets/icons/learning.png')}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25
                                    }}
                                />
                            );
                    }
                }
            })}
        >
            <Tab.Screen
                name="Home"
                component={Home}
            />
            <Tab.Screen
                name="Search"
                component={Search}
            />
            <Tab.Screen
                name="Cash"
                component={Cash}
            />
            <Tab.Screen
                name="Message"
                component={Message}
            />
            <Tab.Screen
                name="Learning"
                component={Learning}
            />
        </Tab.Navigator>
    );
};

export default Tabs;
