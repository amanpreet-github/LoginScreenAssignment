import variable from "./../variables/platform";

export default (variables = variable) => {
    const platform = variables.platform;

    const tabHeadingTheme = {
        flexDirection: "row",
        backgroundColor: variables.tabDefaultBg,
        flex: 1,
        alignItems: "center",
        // justifyContent: "center",
        ".scrollable": {
            paddingHorizontal: 20,
            flex: platform === "android" ? 0 : 1,
            minWidth: platform === "android" ? undefined : 60
        },
        "NativeBase.Text": {
            color: variables.topTabBarTextColor,
            marginHorizontal: 0,
            paddingRight: 5,
            fontFamily: 'rubik-medium',
        },
        "NativeBase.Icon": {
            color: variables.topTabBarTextColor,
            fontSize: platform === "ios" ? 26 : undefined
        },
        ".active": {
            "NativeBase.Text": {
                color: variables.topTabBarActiveTextColor,
                fontWeight: "600",
                fontFamily: 'rubik-medium',
            },
            "NativeBase.Icon": {
                color: variables.topTabBarActiveTextColor
            }
        }
    };

    return tabHeadingTheme;
};
