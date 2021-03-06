import variable from "./../variables/platform";
import {Platform} from "react-native";

export default (variables = variable) => {
    const platformStyle = variables.platformStyle;
    const platform = variables.platform;

    const tabContainerTheme = {
        // elevation: 3,
        height: 50,
        flexDirection: "row",
        // shadowColor: platformStyle === "material" ? "#000" : undefined,
        // shadowOffset: platformStyle === "material"
        //     ? {width: 0, height: 2}
        //     : undefined,
        // shadowOpacity: platformStyle === "material" ? 0.2 : undefined,
        // shadowRadius: platformStyle === "material" ? 1.2 : undefined,
        justifyContent: "space-around",
        borderBottomWidth: 3, //Platform.OS === "ios" ? variables.borderWidth : 0,
        borderColor: "rgba(0, 0,0,0.05)",
        position: "relative",
        zIndex: 1,
        marginLeft: 19,
    };

    return tabContainerTheme;
};
