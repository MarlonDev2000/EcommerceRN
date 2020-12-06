import { Anton_400Regular } from "@expo-google-fonts/anton";
import React from "react";
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Button } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import Products from "../../components/Products";

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../../../assets/banner4.jpg")} style={styles.image} />
        <View style={styles.shipping}>
          <Text style={styles.shippingText}>FRETE GRÁTIS PARA TODO O BRASIL EM COMPRAS ACIMA DE R$250,00</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>JOGOS</Text>
          <TouchableOpacity style={{ position: "absolute", right: 25, alignSelf: "center" }}>
            <MaterialIcons name="filter-list" size={24} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={{ position: "absolute", right: -15, alignSelf: "center" }}>
            <MaterialIcons name="shopping-cart" size={24} color="#000" onPress={() => navigation.navigate("Cart")} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.line} />

      <ScrollView>
        <Text style={styles.text}>LANÇAMENTOS</Text>

        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Products
            img={require("../../../assets/super-mario-odyssey.png")}
            price="R$197,88"
            onclick={() => navigation.navigate("Detail")}
          >
            Super Mario Odyssey
          </Products>
          <Products
            img={require("../../../assets/call-of-duty-infinite-warfare.png")}
            price="R$49,99"
            onclick={() => navigation.navigate("Detail")}
          >
            Call Of Duty Infinite Warfare
          </Products>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Products
            img={require("../../../assets/the-witcher-iii-wild-hunt.png")}
            price="R$119,50"
            onclick={() => navigation.navigate("Detail")}
          >
            The Witcher III Wild Hunt
          </Products>
          <Products
            img={require("../../../assets/call-of-duty-wwii.png")}
            price="R$249,99"
            onclick={() => navigation.navigate("Detail")}
          >
            Call Of Duty WWII
          </Products>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Products
            img={require("../../../assets/mortal-kombat-xl.png")}
            price="R$69,99"
            onclick={() => navigation.navigate("Detail")}
          >
            Mortal Kombat XL
          </Products>
          <Products
            img={require("../../../assets/shards-of-darkness.png")}
            price="R$71,94"
            onclick={() => navigation.navigate("Detail")}
          >
            Shards of Darkness
          </Products>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Products
            img={require("../../../assets/terra-media-sombras-de-mordor.png")}
            price="R$79,99"
            onclick={() => navigation.navigate("Detail")}
          >
            Terra Média: Sombras de Mordor
          </Products>
          <Products
            img={require("../../../assets/fifa-18.png")}
            price="R$195,39"
            onclick={() => navigation.navigate("Detail")}
          >
            FIFA 18
          </Products>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Products
            img={require("../../../assets/horizon-zero-dawn.png")}
            price="R$115,80"
            onclick={() => navigation.navigate("Detail")}
          >
            Horizon Zero Dawn
          </Products>
          <Products
            img={require("../../../assets/resident-evil-7.png")}
            price="Esgotado"
            onclick={() => navigation.navigate("Detail")}
          >
            Resident Evil 7
          </Products>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
  },
  header: {
    marginBottom: 8,
  },
  image: {
    width: "100%",
    height: 130,
  },
  textContainer: {
    flexDirection: "row",
    marginVertical: "2%",
    marginHorizontal: "5%",
  },
  text: {
    fontFamily: "Anton_400Regular",
    fontSize: 26,
    marginHorizontal: "1%",
  },
  line: {
    borderBottomColor: "#D8D8D8",
    borderBottomWidth: 2,
  },
  shipping: {
    backgroundColor: "#F50505",
    alignItems: "center",
    justifyContent: "center",
  },
  shippingText: {
    fontSize: 14,
    color: "white",
    lineHeight: 22,
    fontFamily: "Anton_400Regular",
  },
});
