import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import Products from "../Products";

export default function Footer() {
  return (
    <View>
      <Text style={styles.title}>VOCÊ TAMBÉM PODE GOSTAR</Text>
      <View style={{ flexDirection: "row" }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{ marginHorizontal: 10 }}>
            <Products img={require("../../../assets/the-witcher-iii-wild-hunt.png")} price="119,50">
              The Witcher III Wild Hunt
            </Products>
          </View>
          <View style={{ marginHorizontal: 10 }}>
            <Products img={require("../../../assets/shards-of-darkness.png")} price="71,94">
              Shards of Darkness
            </Products>
          </View>
          <View style={{ marginHorizontal: 10 }}>
            <Products img={require("../../../assets/terra-media-sombras-de-mordor.png")} price="79,99">
              Terra Média: Sombras de Mordor
            </Products>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: "Anton_400Regular",
    marginVertical: "2%",
    paddingHorizontal: "2%",
  },
});
