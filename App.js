import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  StatusBar,
} from "react-native";
import Header from "./components/header";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F0E8",
    padding: 50,
    paddingLeft: 24,
    paddingRight: 24,
  },

  
});
