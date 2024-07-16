import { Text, View, Image, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import styles from "./styles";

export default function Details() {
  const { name, image, description } = useLocalSearchParams<{ name: string; image: string; description: string }>();

  if (!image || typeof image !== 'string') {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Invalid image URL</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.captionText}>{name}</Text>
      <Text style={styles.text}>{description}</Text>
    </View>
  );
}
