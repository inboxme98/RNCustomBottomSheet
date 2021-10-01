
import React, { useRef } from 'react';
import {
    StyleSheet,
    View,
    Dimensions,
    Button,
    TouchableOpacity,
    Text
} from 'react-native';
import {COLORS,icons,FONTS} from '../constants';
import ActionSheet from './components/actionSheet';
const {width,height} = Dimensions.get("screen");


const Home = ({ navigation }) => {
    const childRef = useRef();

    const buttons = [
        {
            title : "Transfer Cash",
            description : "Add and Withdraw cash",
            icon : icons.transfer,
            key:1,
            onPress:() => openDetail(navigation) 
        },
        {
            title : "Save for something new",
            description : "Save & invest towards something in future",
            icon : icons.save,
            key:2,
            onPress:() => openDetail(navigation) 
        },
        {
            title : "Invite Cameron",
            description : "Give Cameron access to login to their account",
            icon : icons.invite,
            key:3,
            onPress:() => openDetail(navigation) 
        },
        {
            title : "Share profile link",
            description : "Others can signup and contibute to this account",
            icon : icons.settings,
            key:4,
            onPress:() => openDetail(navigation) 
        },
        {
            title : "Delete Account ",
            description : "Remove an account that is not in use",
            icon : icons.deleteicon,
            key:6,
            onPress:() => openDetail(navigation) 
        }
    
    ];

    
    return (

    <View style = {{width,height,backgroundColor: COLORS.white}}>
        <TouchableOpacity
         style={styles.button}
         onPress={() => { childRef.current.showActionSheet() }}
         >
        <Text style={[{ ...FONTS.h1 }, {color:COLORS.secondary },{textAlign:'center'}]}>{"open sheet"}</Text>        
       </TouchableOpacity>
     <View style = {styles.container}>
    </View>
    <ActionSheet actionSheetButtons={buttons} ref={childRef}/>
    </View>           
   );

  

};

function openDetail(navigation)
    {   
        navigation.navigate("Details")
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        justifyContent: 'center',
        alignItems: 'center' 
    },
      button: {
        alignItems: 'center',
        backgroundColor: COLORS.white,
        padding: 10
      },
});

export default Home;
