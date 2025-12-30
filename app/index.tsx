import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";


export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.boxheader}>
        <Text style={styles.text}>Saldo total</Text>
      </View>

      <View style={styles.boxmain}>
        <Text style={styles.text}>Novo app de finanças</Text>
        <Link href={"/form"} style={styles.button}>
          Cadastrar movimentação
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#25292e",
  },

  section: {
    flexDirection: "row",
  },

  boxheader: {
    flex: 0.1,
    justifyContent: "center",
  },

  text: {
    color: "#fff"
  },

  button: {
    fontSize: 20,
    color: "#fff",
    textDecorationLine: "none",
    fontWeight: "bold",
    backgroundColor: "#f00",
    flexDirection: "row",
  },



  boxmain: {
    backgroundColor: "#fff",
    flexDirection: "row",
    flex: 1
  },
})
