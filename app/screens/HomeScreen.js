import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
  TextInput,
} from "react-native";

export default function HomeScreen() {
  const [search, setSearch] = useState("");

  const openWhatsApp = (product) => {
    const message = `Olá, gostaria de comprar este produto: ${product}`;
    const url = `https://wa.me/37998457511?text=${encodeURIComponent(message)}`;
    Linking.openURL(url);
  };

  const handleSearch = () => {
    if (search.toLowerCase().includes("vestido")) {
      alert("Redirecionaria para página de vestidos.");
    } else {
      alert("Nenhum resultado encontrado.");
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Topo */}
      <View style={styles.topBar}>
        <Image source={require("../assets/logo.jpg")} style={styles.logo} />
        <View style={styles.contact}>
          <Text style={styles.phone}>📞 37 99845-7511</Text>
          <View style={styles.social}>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL("https://www.instagram.com/vestuarioanaflor/")
              }
            >
              <Image
                source={require("../assets/logotipo-do-instagram.png")}
                style={styles.icon}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Linking.openURL("https://wa.me/37998457511")}
            >
              <Image
                source={require("../assets/bolha-de-bate-papo(1).png")}
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Barra de busca */}
      <View style={styles.searchBox}>
        <TextInput
          style={styles.input}
          placeholder="Buscar..."
          value={search}
          onChangeText={setSearch}
        />
        <TouchableOpacity onPress={handleSearch}>
          <Image source={require("../assets/procurar.png")} style={styles.icon} />
        </TouchableOpacity>
      </View>

      {/* Banner */}
      <Image source={require("../assets/vestidos.png")} style={styles.banner} />

      {/* Mais vendidos */}
      <Text style={styles.title}>Mais Vendidos</Text>
      <View style={styles.productGrid}>
        <View style={styles.product}>
          <Image
            source={require("../assets/WhatsApp Image 2024-07-29 at 18.17.22.jpeg")}
            style={styles.productImg}
          />
          <Text style={styles.productText}>CROPED</Text>
        </View>
        <View style={styles.product}>
          <Image
            source={require("../assets/short.jpeg")}
            style={styles.productImg}
          />
          <Text style={styles.productText}>SHORTS</Text>
        </View>
        <View style={styles.product}>
          <Image
            source={require("../assets/tshirt.jpeg")}
            style={styles.productImg}
          />
          <Text style={styles.productText}>T-SHIRT</Text>
        </View>
        <View style={styles.product}>
          <Image
            source={require("../assets/longa.jpeg")}
            style={styles.productImg}
          />
          <Text style={styles.productText}>MANGA-LONGA</Text>
        </View>
      </View>

      {/* Novidades */}
      <Text style={styles.title}>Novidades</Text>
      <View style={styles.productGrid}>
        <View style={styles.product}>
          <Image
            source={require("../assets/WhatsApp Image 2024-07-29 at 07.44.12.jpeg")}
            style={styles.productImg}
          />
          <Text>Vestido Roxo - R$ 99,90</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => openWhatsApp("Vestido Roxo")}
          >
            <Text style={styles.buttonText}>Comprar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.product}>
          <Image
            source={require("../assets/WhatsApp Image 2024-07-29 at 07.44.27.jpeg")}
            style={styles.productImg}
          />
          <Text>Vestido Preto - R$ 99,90</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => openWhatsApp("Vestido Preto")}
          >
            <Text style={styles.buttonText}>Comprar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.product}>
          <Image
            source={require("../assets/WhatsApp Image 2024-07-29 at 07.44.39.jpeg")}
            style={styles.productImg}
          />
          <Text>Vestido Floral - R$ 149,90</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => openWhatsApp("Vestido Floral")}
          >
            <Text style={styles.buttonText}>Comprar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.product}>
          <Image
            source={require("../assets/azul.jpeg")}
            style={styles.productImg}
          />
          <Text>Vestido Floral-Azul - R$ 109,90</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => openWhatsApp("Vestido Floral-Azul")}
          >
            <Text style={styles.buttonText}>Comprar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.product}>
          <Image
            source={require("../assets/WhatsApp Image 2024-07-29 at 07.45.23.jpeg")}
            style={styles.productImg}
          />
          <Text>Vestido Onça - R$ 119,90</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => openWhatsApp("Vestido Onça")}
          >
            <Text style={styles.buttonText}>Comprar</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Sobre */}
      <View style={styles.about}>
        <Text style={styles.title}>Sobre a Ana Flor</Text>
        <Text style={styles.aboutText}>
          Bem-vindo à Ana Flor, sua loja de roupas femininas favorita! Nós
          acreditamos que a moda deve ser acessível a todas as mulheres,
          independentemente da ocasião. Nossa missão é oferecer peças elegantes,
          confortáveis e de alta qualidade que façam você se sentir confiante e
          bonita.
        </Text>
      </View>

      {/* Rodapé */}
      <Text style={styles.footer}>
        © 2025 Ana Flor. Todos os direitos reservados.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#f8f8f8",
  },
  logo: { width: 60, height: 60, resizeMode: "contain" },
  contact: { alignItems: "flex-end" },
  phone: { fontWeight: "bold", marginBottom: 5 },
  social: { flexDirection: "row" },
  icon: { width: 25, height: 25, marginHorizontal: 5 },
  searchBox: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    marginRight: 10,
    borderRadius: 5,
  },
  banner: { width: "100%", height: 180, resizeMode: "cover" },
  title: { fontSize: 18, fontWeight: "bold", margin: 10 },
  productGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  product: { width: "45%", marginBottom: 20, alignItems: "center" },
  productImg: { width: "100%", height: 150, borderRadius: 10, marginBottom: 5 },
  productText: { fontWeight: "bold", textAlign: "center" },
  button: {
    backgroundColor: "#e91e63",
    padding: 8,
    borderRadius: 5,
    marginTop: 5,
  },
  buttonText: { color: "#fff", fontWeight: "bold" },
  about: { padding: 15, backgroundColor: "#fafafa" },
  aboutText: { marginTop: 5, color: "#555" },
  footer: { textAlign: "center", padding: 15, color: "#777" },
});
