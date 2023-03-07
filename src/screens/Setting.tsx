import { FlatList, StyleSheet, View } from "react-native";
import colors from '../constants/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        padding: 10,
    },
    backgroundContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export const SettingScreen = () => {
    return (
        <View style={styles.container}></View>
    );
};