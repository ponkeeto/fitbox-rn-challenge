import { Text, View } from "react-native";
import { topbar } from "../lib";

export const TopBar = () => (
  <View style={topbar}>
    <Text style={{ fontSize: 64 }}>USER LIST</Text>
  </View>
);
