import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

export default function Products(props) {
  function filterdesc(desc) {
    if (desc.length < 27) {
      return desc;
    }
    return `${desc.substring(0, 23)}...`;
  }

  return (
    <TouchableOpacity style={styles.container} onPress={props.onclick}>
      <Image source={props.img} style={styles.gamesImg} />
      <Text style={styles.gamesText}>{filterdesc(props.children)}</Text>
      <View opacity={0.4}>
        <Text style={styles.gamesText}>{props.price}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: "2%",
    alignItems: "center",
    justifyContent: "center",
  },
  gamesImg: {
    width: 175,
    height: 175,
  },
  gamesText: {
    fontSize: 16,
  },
});
