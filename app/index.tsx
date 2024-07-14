import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet, Button, TextInput, Alert } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <StatusBar style="auto" />
      <Button title="something" onPress={() => Alert.alert("hello there")} color="#841584"/>
    </View>
  );
}
