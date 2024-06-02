import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import user_icon from "../assets/person.png";

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container_1}>
        <Text style={styles.hello_1}>Hello , Devs</Text>
        <Text style={styles.hello_2}>14 tasks today</Text>
      </View>
      <Pressable
        style={({ pressed }) => [
          {
            opacity: pressed ? 0.5 : 1,
            transform: [{ scale: pressed ? 0.95 : 1 }],
          },
        ]}
        onPress={() => console.log('hello user')}
      >
        <Image style={styles.user_icon} source={user_icon} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingLeft: 24,
    paddingRight: 24,
  },
  container_1: {
    width: 190,
  },
  hello_1: {
    fontSize: 32,
    fontWeight: "700",
    width: 190,
  },
  hello_2: {
    fontSize: 12,
    fontWeight: "500",
    width: 190,
  },
  user_icon: {
    backgroundColor: "white",
    borderRadius: "50%",
  },
});
export default Header;
