import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import styles from "./popularcomps.style";
import { useRouter } from "expo-router";
import { COLORS, SIZES } from "../../../constants";
import PopularCompCard from "../../common/cards/popular/PopularCompCard";
import useFetch from "../../../hook/useFetch";

const Popularcomps = () => {
  const router = useRouter();
  const { data, isLoading, error } = useFetch({ query: "" });

  // Filters the data to only show few specific jobs, make this dynamic later
  const filteredData = data.filter((item) =>
    item.area.includes("Varsinais-Suomi")
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Competitions</Text>
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
            renderItem={({ item }) => <PopularCompCard item={item} />}
            keyExtractor={(item) => item?._id}
            horizontal
            contentContainerStyle={{ columnGap: SIZES.medium }}
          />
        )}
      </View>
    </View>
  );
};

export default Popularcomps;
