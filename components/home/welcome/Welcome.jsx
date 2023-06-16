import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";

import styles from "./welcome.style";
import { useRouter } from "expo-router";
import { icons, SIZES } from "../../../constants";

const areas = [
  "Varsinais-Suomi",
  "Ahvenanmaa",
  "Uusimaa",
  "Kanta-Häme",
  "Satakunta",
  "Pirkanmaa",
  "Päijät-Häme",
  "Kymenlaakso",
  "Etelä-Karjala",
  "Etelä-Savo",
  "Keski-Suomi",
  "Pohjois-Savo",
  "Pohjois-Karjala",
  "Kainuu",
  "Pohjois-Pohjanmaa",
  "Keski-Pohjanmaa",
  "Lappi",
  "Etelä-Pohjanmaa",
  "Pohjanmaa",
];

const Welcome = ({ searchTerm, setSearchTerm, handleClick }) => {
  const router = useRouter();
  const [activeArea, setActiveArea] = useState(areas[0]);

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Huomenta Luuka!</Text>
        <Text style={styles.welcomeMessage}>Löydä päivän kisasi!</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            placeholder="Millaista kisaa etsit?"
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image
            source={icons.search}
            style={styles.searchBtnImage}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList
          data={areas}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeArea, item)}
              onPress={() => {
                setActiveArea(item);
                router.push(`/search/${item}`);
              }}
            >
              <Text style={styles.tabText(activeArea, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => `${item}`}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View>
    </View>
  );
};

export default Welcome;
