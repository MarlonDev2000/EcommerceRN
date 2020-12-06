import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from "react-native";

import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import Footer from "../../components/Footer";

export default function Detail() {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <Image source={require("../../../assets/supermario1.jpg")} style={styles.image} resizeMode="cover" />
      <View>
        <View>
          <Text style={[styles.title, { fontSize: 30 }]}>Super Mario Odyssey</Text>
        </View>
        <View opacity={0.4}>
          <Text style={[styles.title, { fontSize: 24 }]}>R$197.88</Text>
        </View>

        <View style={styles.textContent}>
          <Text style={styles.textTitle}>Super Mario Odyssey</Text>
          <Text style={styles.textContent}>
            Super Mario Odyssey é um jogo de plataforma desenvolvido pela Nintendo Entertainment e publicado pela
            Nintendo. Foi lançado mundialmente em 27 de outubro de 2017 exclusivamente para o Nintendo Switch.
          </Text>
          <Text style={styles.textGenre}>
            <Text style={styles.textGenreTitle}>Gêneros:</Text> Jogo eletrônico de plataforma, Jogo eletrônico de ação e
            aventura
          </Text>
        </View>

        <Button onclick={() => navigation.navigate("Cart")} />

        <View style={styles.line} />

        <Footer />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#FFF",
  },
  image: {
    width: "100%",
    height: 400,
  },
  title: {
    fontFamily: "Anton_400Regular",
    paddingHorizontal: "2%",
  },
  textContent: {
    fontSize: 16,
    lineHeight: 25,
    marginVertical: "2%",
    paddingHorizontal: "2%",
  },
  textTitle: {
    fontSize: 22,
    marginVertical: "2%",
  },
  textGenre: {
    fontSize: 16,
    lineHeight: 25,
    paddingHorizontal: "2%",
  },
  textGenreTitle: {
    fontSize: 14,
    fontFamily: "Anton_400Regular",
    lineHeight: 25,
  },
  line: {
    borderWidth: 1,
    borderBottomColor: "#ddd",
    marginVertical: "2%",
  },
});
