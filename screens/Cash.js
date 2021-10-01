
import React from 'react';
import {COLORS,FONTS} from '../constants';
import {
    Text,
} from 'react-native';
const Cash = ({ navigation }) => {
      return (
       <Text style={[{ ...FONTS.largeTitle }, {color:COLORS.subtitleGray },{textAlign:'center'}]}>{"Cash"}</Text>        
   );
};

export default Cash;
