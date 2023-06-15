import { Stack, useRouter, useSearchParams } from "expo-router";
import { useCallback, useState } from "react";
import {
  ActivityIndicator,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";

import {
  JobAbout,
  JobFooter,
  JobTabs,
  ScreenHeaderBtn,
  Specifics,
  Competition,
} from "../../components";
import { COLORS, icons, SIZES } from "../../constants";
import useFetch from "../../hook/useFetch";

const CompDetails = () => {
  const params = useSearchParams();
  const router = useRouter();

  const { data, isLoading, error, refetch } = useFetch("comp-details", {
    comp_id: params.id,
  });

  const filteredData = data.filter((item) => item.id.includes(params.id));
  console.log(filteredData);

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {};

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension="60%"
              handlePress={() => router.back()}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={icons.share} dimension="60%" />
          ),
          headerTitle: "",
        }}
      />
      <>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {isLoading ? (
            <ActivityIndicator size="large" color={COLORS.primary} />
          ) : error ? (
            <Text>Jokin meni pieleen</Text>
          ) : data.length === 0 ? (
            <Text>Ei tuloksia</Text>
          ) : (
            <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
              <Competition
                compName={filteredData.name}
                compLocation={filteredData.location}
                compArea={filteredData.area}
                compTime={filteredData.time}
                compID={filteredData.id}
              />
              <JobTabs />
            </View>
          )}
        </ScrollView>
      </>
    </SafeAreaView>
  );
};

export default CompDetails;
