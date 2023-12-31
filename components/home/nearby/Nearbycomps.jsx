import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import styles from "./nearbycomps.style";
import { useRouter } from "expo-router";
import { COLORS, SIZES } from "../../../constants";
import NearbyCompCard from "../../common/cards/nearby/NearbyCompCard";
import useFetch from "../../../hook/useFetch";

const Nearbycomps = () => {
  const router = useRouter();
  const { data, isLoading, error } = useFetch({ query: "" });

  // Filters the data to only show few specific jobs, make this dynamic later
  const filteredData = data.filter((item) =>
    item.area.includes("Varsinais-Suomi")
  );

  const handleCardPress = (item) => {
    router.push(`/comp-details/${item.id}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Kisat Lähellä</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Jokin meni pieleen...</Text>
        ) : (
          <FlatList
            data={filteredData}
            renderItem={({ item }) => (
              <NearbyCompCard item={item} handleCardPress={handleCardPress} />
            )}
            keyExtractor={(item) => item?._id}
            horizontal
            contentContainerStyle={{ columnGap: SIZES.medium }}
          />
        )}
      </View>
    </View>
  );
};

export default Nearbycomps;
