import { Text ,StyleSheet,Dimensions,Image,View} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
const {width,height} = Dimensions.get("screen");
import React from "react";
import {COLORS,FONTS} from '../../constants';

const Card =  ({title,description,icon,onPress}) =>  (

    <TouchableOpacity onPress={onPress}>
        <View
            style={[{
                flexDirection: 'row',
                paddingLeft: 15,
                paddingTop:15,
                height: 65,
            }]}
        >
            <View
                style={{
                    width: 50,
                     alignItems: 'center',
                     justifyContent: 'center',
                }}
            >
                <Image
                    source={icon}
                    resizeMode="contain"
                    style={{
                        width: '100%',
                        height: '100%'
                    }}
                />
            </View>

            <View style={{ flex: 1, marginLeft: 12, justifyContent: 'center' }}>
                <Text style={[{ ...FONTS.h2 }, {color:COLORS.black }]}>{title}</Text>
                <Text style={[{ ...FONTS.h3 }, {color:COLORS.subtitleGray }]}>{description}</Text>
            </View>
        </View>
        <View style={styles.separator}/>
    </TouchableOpacity>

   )

const styles = StyleSheet.create({
separator: {
    marginVertical: 1,
    borderBottomColor: COLORS.white,
    borderBottomWidth: 1, //StyleSheet.hairlineWidth,
    height: 10,
  },
})
export default Card;