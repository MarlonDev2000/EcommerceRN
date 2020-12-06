import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Cart() {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.titleCar}>
        <Text style={(styles.title, { fontSize: 45, fontFamily: "Anton_400Regular" })}>Carrinho</Text>
        <TouchableOpacity style={{ position: "absolute", right: 25, alignSelf: "center" }}>
          <MaterialIcons
            name="check"
            size={45}
            color="#000"
            onPress={() => {
              alert("Compra realizada com sucesso");
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{ position: "absolute", left: 25, alignSelf: "center" }}>
          <MaterialIcons name="home" size={45} color="#000" onPress={() => navigation.navigate("Home")} />
        </TouchableOpacity>
      </View>
      <View style={styles.line} />
      <View style={styles.titleCar}>
        <Text style={[styles.title, { fontSize: 22 }]}>Super Mario Odyssey</Text>
      </View>
      <View style={styles.cartRemove}>
        <Image source={require("../../../assets/supermario1.jpg")} style={styles.image} resizeMode="cover" />
        <Text style={styles.qtText}>Quantidade: 1 </Text>
        <TouchableOpacity>
          <Text style={styles.cartText}>Remover</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.line} />
      <View style={styles.titleCar}>
        <Text style={[styles.title, { fontSize: 22 }]}>Call Of Duty WWII</Text>
      </View>
      <View style={styles.cartRemove}>
        <Image source={require("../../../assets/call-of-duty-wwii.png")} style={styles.image} resizeMode="cover" />
        <Text style={styles.qtText}>Quantidade: 1</Text>
        <TouchableOpacity>
          <Text style={styles.cartText}>Remover</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.line} />
      <View style={styles.titleCar}>
        <Text style={[styles.title, { fontSize: 22 }]}>The Witcher III Wild Hunt</Text>
      </View>
      <View style={styles.cartRemove}>
        <Image
          source={require("../../../assets/the-witcher-iii-wild-hunt.png")}
          style={styles.image}
          resizeMode="cover"
        />
        <Text style={styles.qtText}>Quantidade: 1</Text>
        <TouchableOpacity>
          <Text style={styles.cartText}>Remover</Text>
        </TouchableOpacity>
      </View>
      <View>
        <View style={styles.line} />
        <View style={styles.textContent}>
          <Text style={styles.textLigth}>
            <Text style={styles.textBold}>SubTotal: </Text>R$567,37
          </Text>
          <Text style={styles.textLigth}>
            <Text style={styles.textBold}>Frete: </Text>Gratis
          </Text>
          <Text style={styles.textLigth}>
            <Text style={styles.textBold}>Total: </Text>R$597,37
          </Text>
        </View>
        <View style={styles.btn}>
          <TouchableOpacity
            style={styles.btnContainer}
            onPress={() => {
              alert("Compra realizada com sucesso");
            }}
          >
            <Text style={styles.titleCheck}>Finalizar Compra</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titleCar: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: "2%",
  },
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#FFF",
  },
  image: {
    width: "50%",
    height: 200,
  },
  title: {
    paddingHorizontal: "2%",
    marginVertical: "2%",
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
  textLigth: {
    fontSize: 20,
    lineHeight: 25,
    paddingHorizontal: "2%",
  },
  textBold: {
    fontSize: 20,
    fontFamily: "Anton_400Regular",
    lineHeight: 25,
  },
  btn: {
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
  titleCheck: {
    fontSize: 17,
    color: "#fff",
  },
  line: {
    borderBottomColor: "#a1a1a1",
    borderBottomWidth: 2,
    marginVertical: "2%",
  },
  cartRemove: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  cartText: {
    fontSize: 20,
    fontFamily: "Anton_400Regular",
  },
  qtText: {
    fontSize: 20,
  },
});
