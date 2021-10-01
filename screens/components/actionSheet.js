
import {View,Text,StyleSheet,Dimensions,Animated, SafeAreaView,PanResponder} from 'react-native';
const {width,height} = Dimensions.get("screen");
import {COLORS} from '../../constants';
import Card from "./card";
import React, { forwardRef, useRef,useImperativeHandle, useState } from 'react';
import { ANIMATED } from './constants'
import { animatedPosition, panGesture, bringupActionSheet,openSheetWithSpring } from './pan-responder'


const ActionSheet = forwardRef((props, ref) => {
const [alignment] = useState(new Animated.Value(0));
    
useImperativeHandle(
        ref,
        () => ({
            showActionSheet() {
              //console.log("bringupActionSheet");
              bringupActionSheet(ANIMATED.FULL_OPEN)
            }
        }),
    )

    return (
      <Animated.View style={[styles.container, { bottom: animatedPosition }]}>
              <View style={styles.gestureArea} {...panGesture.panHandlers}>
                <View style={styles.pullButton} />
              </View>
     <SafeAreaView style={styles.content}>
              {props.actionSheetButtons ? props.actionSheetButtons.map(button => (
	        <Card 
            title = {button.title} 
            description = {button.description}
            icon = {button.icon}
            onPress = {button.onPress}
            />
            )) 
            : null }
              </SafeAreaView>
            </Animated.View>
          )
});


const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        left: 0,
        width: width,
        height: Math.abs(ANIMATED.HIDDEN),
        marginBottom: ANIMATED.HIDDEN - ANIMATED.VISIBLE,
        paddingBottom: Math.abs(ANIMATED.FULL_OPEN),
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: COLORS.lightGray,
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6
      },
    
      gestureArea: {
        width: width,
        height: 40,
        marginTop: -10,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
      },

      pullButton: {
        width: 100,
        height: 10,
        borderRadius: 20,
        backgroundColor: COLORS.white
      },
      content: {
        marginVertical: 30,
        paddingHorizontal: 10,
        height: '100%',
      }
});

export default ActionSheet;