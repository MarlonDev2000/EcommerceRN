import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Button(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btnContainer} onPress={props.onclick}>
        <Text style={styles.title}>COMPRAR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  btnContainer: {
    width: "75%",
    height: 50,
    backgroundColor: "#17181a",
    borderRadius: 5,
    marginVertical: "5%",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 17,
    color: "#fff",
  },
});
