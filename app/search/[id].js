import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";
import { Stack, useRouter, useSearchParams } from "expo-router";
import { Text, SafeAreaView } from "react-native";
import axios from "axios";

import { ScreenHeaderBtn, AllCompCard } from "../../components";
import { COLORS, icons, SIZES } from "../../constants";
import styles from "../../styles/search";

const JobSearch = () => {
  const params = useSearchParams();
  const router = useRouter();

  const [searchResult, setSearchResult] = useState([]);
  const [searchLoader, setSearchLoader] = useState(false);
  const [searchError, setSearchError] = useState(null);

  const handleSearch = async () => {
    setSearchLoader(true);
    setSearchResult([]);

    try {
      const options = {
        method: "GET",
        url: "https://competition-calendar-server.onrender.com/competitions",
      };

      const response = await axios.request(options);
      const filtered = response.data.filter((item) =>
        item.area.toLowerCase().includes(params.id.toLowerCase())
      );
      console.log(filtered);
      setSearchResult(filtered);
    } catch (error) {
      setSearchError(error);
      console.log(error);
    } finally {
      setSearchLoader(false);
    }
  };

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension="60%"
              handlePress={() => router.back()}
            />
          ),
          headerTitle: "",
        }}
      />

      <FlatList
        data={searchResult}
        renderItem={({ item }) => (
          <AllCompCard
            item={item}
            handleNavigate={() => router.push(`/comp-details/${item.id}`)}
          />
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: SIZES.medium, rowGap: SIZES.medium }}
        ListHeaderComponent={() => (
          <>
            <View style={styles.container}>
              <Text style={styles.searchTitle}>"{params.id}"</Text>
            </View>
            <View style={styles.loaderContainer}>
              {searchLoader ? (
                <ActivityIndicator size="large" color={COLORS.primary} />
              ) : (
                searchError && <Text>Jotain meni pieleen</Text>
              )}
            </View>
          </>
        )}
      />
    </SafeAreaView>
  );
};

export default JobSearch;
