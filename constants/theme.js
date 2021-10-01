import { Dimensions } from "react-native";
export const COLORS = {
    // base colors
    primary: "#FFD700", // golden
    secondary: "#606d87",   // Gray

    // colors
    black: "#1E1F20",
    white: "#FFFFFF",
    lightGray: "#eff2f5",
    gray: "#BEC1D2",
    subtitleGray: "#8e8e94"


};
export const SIZES = {   
    h1: 20,
    h2: 17,
    h3: 13,
    h4: 10,
    largeTitle:30
};

export const FONTS = {  
    h1: { fontFamily: "Manrope-Regular", fontSize: SIZES.h1, lineHeight: 24 },
    h2: { fontFamily: "Manrope-Regular", fontSize: SIZES.h2, lineHeight: 18 },
    h3: { fontFamily: "Manrope-Regular", fontSize: SIZES.h3, lineHeight: 16 },
    h4: { fontFamily: "Manrope-Regular", fontSize: SIZES.h4, lineHeight: 14 },
    largeTitle: { fontFamily: "Manrope-Regular", fontSize: SIZES.largeTitle, lineHeight: 40 },

};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
