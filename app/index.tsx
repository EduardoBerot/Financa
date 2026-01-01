import { Text, View, StyleSheet, ScrollView } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';


type HeaderProps = {
  month: string;
};

type InfoBoxProps = {
  label: string;
  value: string;
  color?: string;
};



const Header = ({ month }: HeaderProps) => (
  <View style={[styles.header, styles.row, styles.itemscenter]}>
    <Text style={{ textAlign: "center" }}>
      <MaterialIcons name="person" size={30} color="#fff" />
    </Text>
    <Text style={{ textAlign: "center", color: "#fff", fontSize: 24 }}>
      {month}
      <MaterialIcons name="arrow-drop-down" size={25} />
    </Text>
    <Text style={{ textAlign: "center" }}>
      <MaterialIcons name="menu" size={30} color="#fff" />
    </Text>
  </View>
);


const InfoBox = ({ label, value, color }: InfoBoxProps) => (
  <View style={[styles.contentboxinfo, styles.itemscenter]}>
    <Text style={styles.mintext}>{label}</Text>
    <Text style={[styles.mintitle, { color }]}>{value}</Text>
  </View>
);

const ProgressItem = () => (
  <View>
    <Text style={styles.mintext}>teste</Text>
    <Text style={[styles.mintitle]}>teste</Text>
  </View>
);



export default function Index() {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <Header month="Janeiro" />
        <View style={styles.content}>
          <View style={[styles.contentbox, styles.itemscenter]}>
            <Text style={styles.text}>Saldo total</Text>
            <Text style={styles.title}>R$ 8.900,87</Text>
            <View style={styles.row}>
              <InfoBox label="Receitas" value="R$ 4.500" color="green" />
              <InfoBox label="Despesas" value="R$ -4.500" color="red" />
            </View>
          </View>
        </View>
        <View style={styles.content}>
          <View style={styles.contentbox}>
            <Text style={[styles.text, { textAlign: "center" }]}>Orçamento</Text>
            <ProgressItem />
            <ProgressItem />
            <ProgressItem />
            <ProgressItem />
            <ProgressItem />
            <ProgressItem />
            <ProgressItem />
            <ProgressItem />
          </View>
        </View>
      </ScrollView>
      <View style={[styles.itemscenter, styles.addbutton]}>
        <MaterialIcons name="add" size={50} color={"#fff"} />
      </View>
    </View>

  );
}


const styles = StyleSheet.create({
  row: {
    flexDirection: "row"
  },

  itemscenter: {
    alignItems: "center"
  },

  container: {
    flex: 1,
    backgroundColor: "#efefefff",
  },

  header: {
    height: 130,
    backgroundColor: "rgba(37, 97, 236, 1)",
    justifyContent: "space-between",
    padding: 20,
  },

  content: {
    justifyContent: "center",
    top: -30,
    flexDirection: "row"
  },

  text: {
    fontSize: 16,
    color: "#787878ff"
  },

  mintext: {
    fontSize: 12,
    color: "#787878ff"
  },

  mintitle: {
    fontSize: 20,
    color: "#000"
  },

  title: {
    fontSize: 28,
    color: "#000"
  },

  contentbox: {
    width: "85%",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 10,
    marginBottom: 20
  },

  contentboxinfo: {
    flex: 1
  },

  addbutton: {
    backgroundColor: "rgba(37, 97, 236, 1)",
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    bottom: "7%",
    alignSelf: "center",
    position: "absolute",
    borderRadius: 70,
    elevation: 4
  }
})
