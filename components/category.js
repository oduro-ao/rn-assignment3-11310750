import { StyleSheet, View, Image, Text } from "react-native";
import Card from "./card";

export default function category() {
  return (
    <View style={styles.containers}>
      <Text style={styles.h1}>Categories</Text>
      <Card />
    </View>
  );
}

const styles = StyleSheet.create({
  containers: {
    marginTop: 30,
  },
  h1: {
    fontSize: 20,
    lineHeight: 24,
    fontWeight: "700",
    paddingLeft: 24,
    paddingRight: 24,
  },
});
