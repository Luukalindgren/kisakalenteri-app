import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import styles from "./allcomps.style";
import { useRouter } from "expo-router";
import { COLORS } from "../../../constants";
import AllCompCard from "../../common/cards/all/AllCompCard";
import useFetch from "../../../hook/useFetch";

const Allcomps = () => {
  const router = useRouter();
  const { data, isLoading, error } = useFetch({ query: "" });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Kaikki Kisat</Text>
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
          data?.map((item) => (
            <AllCompCard
              item={item}
              key={`all-comp-${item?._id}`}
              handleNavigate={() => router.push(`/comp-details/${item.id}`)}
            />
          ))
        )}
      </View>
    </View>
  );
};

export default Allcomps;
