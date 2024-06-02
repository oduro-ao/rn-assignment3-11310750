import { StyleSheet, View, Image, TextInput, Pressable } from "react-native";
import filter_button from "../assets/Filter_button.png";

export default function Search() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.search} placeholder="Search" />
      <Pressable
        onPress={() => console.log('Searched')}
        style={({ pressed }) => [
          {
            opacity: pressed ? 0.5 : 1,
            transform: [{ scale: pressed ? 0.95 : 1 }],
          },
        ]}
      >
        <Image style={styles.filter_button} source={filter_button} />
      </Pressable>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 24,
    paddingRight: 24,
  },
  search: {
    backgroundColor: "#FBF9F7",
    width: 280,
    height: 48,
    padding: 10,
    borderRadius: 14,
    fontSize: 16,
    fontWeight: '700',
  },
});
