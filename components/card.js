import {
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
} from "react-native";



export default function card() {
  

  const cat_array = [
    {
      topic: "Exercise",
      task_num: "12 Task",
      picture_dir: require('../assets/pic1.png'),
    },
    {
      topic: "Study",
      task_num: "12 Task",
      picture_dir: require('../assets/pic2.png'),
    },
    
  ];

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        {cat_array.map((cat_array) => (
          <View style={styles.container_1}>
            <Text style={styles.h1}>{cat_array.topic}</Text>
            <Text style={styles.h2}>{cat_array.task_num}</Text>
            <Image style={styles.img} source={cat_array.picture_dir}/>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    height: 192,
  },
  container_1: {
    width: 186,
    height: 192,
    borderRadius: 15,
    backgroundColor: "white",
    marginLeft: 24,
    padding: 16,
  },
  h1: {
    fontSize: 16,
    lineHeight: 19.2,
    fontWeight: '700',
  },
  h2: {
    fontSize: 12,
    lineHeight: 14.4,
    fontWeight: '400',
  },
  img: {
    width: 151,
    height: 132,
  },
});
