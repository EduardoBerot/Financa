import { Text, View, StyleSheet } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { DrawerActions } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import { globalStyles } from "../styles/global";


export default function Header() {
    const navigation = useNavigation();
    const openDrawer = () => {
        navigation.dispatch(DrawerActions.openDrawer());
    };

    return (
        <View style={[styles.header, globalStyles.row, globalStyles.itemscenter]}>
            <MaterialIcons name="person" size={30} color="#fff" />
            <Text style={{ textAlign: "center", color: "#fff", fontSize: 24 }}>
                Janeiro
                <MaterialIcons name="arrow-drop-down" size={25} />
            </Text>
            <Text style={{ textAlign: "center" }}>
                <MaterialIcons onPress={openDrawer} name="menu" size={30} color="#fff" />
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 130,
        backgroundColor: "rgba(37, 97, 236, 1)",
        justifyContent: "space-between",
        padding: 20,
    }
})