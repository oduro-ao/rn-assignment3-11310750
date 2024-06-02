import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";

export default function task_card() {
  const task_array = [
    "Mobile App Developement",
    "Web Developement",
    "Push Ups",
    "Piano Lessons",
    "Football ",
  ];
  return (
    <ScrollView style={styles.main}>
      {task_array.map((task_array) => (
        <View style={styles.container}>
          <Text style={styles.h1}>{task_array}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginTop: 12,
    height: 128,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#E8D1BA',
    padding: 20,
  },
  h1: {
    fontSize: 16,
    fontWeight: '700',
    width: '100%',
    margin: 'auto',
  },
});
