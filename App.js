import { StyleSheet, View } from "react-native";
import Header from "./components/header";
import Search from "./components/search";
import Category from "./components/category";
import Tasks from "./components/tasks";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Search />
      <Category />
      <Tasks />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F0E8",
    paddingTop: 52,
    paddingBottom: 20,
  },
});
