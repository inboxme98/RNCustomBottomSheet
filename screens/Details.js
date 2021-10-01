import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';


import { TouchableOpacity } from 'react-native-gesture-handler';
import {icons, COLORS, FONTS} from '../constants';

const Details = ({ navigation }) => {
    // Render
    function renderHeader() {
        return (
            <View
                style={{
                    position: 'absolute',
                    top: 50,
                    left: 24,
                    right: 24
                }}
            >
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity
                            style={{ width: 40, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 20, backgroundColor: 'rgba(255,255,255,0.5)' }}
                            onPress={() => { navigation.navigate("Home") }}
                        >
                            <Image
                                source={icons.back}
                                resizeMode="contain"
                                style={{
                                    width: 20,
                                    height: 20
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', marginTop: "10%" }}>
                    <View style={{ flex: 1 }}>
                        <Text style={{ color: COLORS.secondary, ...FONTS.h1 }}>Detail Page</Text>
                    </View>
                    <View style={{ flex: 1 }}></View>
                </View>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            {renderHeader()}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default Details;