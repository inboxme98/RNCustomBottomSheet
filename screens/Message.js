
import React from 'react';
import {COLORS,FONTS} from '../constants';
import {
    Text,
} from 'react-native';
const Message = ({ navigation }) => {
      return (
       <Text style={[{ ...FONTS.largeTitle }, {color:COLORS.subtitleGray },{textAlign:'center'}]}>{"Message"}</Text>        
   );
};

export default Message;
