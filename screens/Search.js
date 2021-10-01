
import React from 'react';
import {COLORS,FONTS} from '../constants';
import {
    Text,
} from 'react-native';
const Search = ({ navigation }) => {
      return (
       <Text style={[{ ...FONTS.largeTitle }, {color:COLORS.subtitleGray },{textAlign:'center'}]}>{"Search"}</Text>        
   );
};

export default Search;
