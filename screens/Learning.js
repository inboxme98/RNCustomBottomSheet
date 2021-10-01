
import React from 'react';
import {COLORS,FONTS} from '../constants';
import {
    Text,
} from 'react-native';

const Learning = ({ navigation }) => {
      return (
       <Text style={[{ ...FONTS.largeTitle }, {color:COLORS.subtitleGray}, {textAlign:'center'}]}>{"Learning"}</Text>        
   );
};

export default Learning;
