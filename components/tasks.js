import { StyleSheet, Text, View } from "react-native";
import Task_card from "./task_card";

export default function tasks() {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}> Ongoing Tasks </Text>
      <Task_card />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 24,
    paddingRight: 24,
    marginTop: 30,
  },
  h1:{
    fontSize: 20,
    fontWeight: '700',
  },
});
