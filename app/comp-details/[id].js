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
  Tabs,
  ScreenHeaderBtn,
  Competition,
  About,
} from "../../components";
import { COLORS, icons, SIZES } from "../../constants";
import useFetch from "../../hook/useFetch";

const tabs = [
  "Lisätiedot",
  "Sääennuste",
  "Kisakartta",
  "Ajo-ohjeet",
];

const CompDetails = () => {
  const params = useSearchParams();
  const router = useRouter();

  const { data, isLoading, error, refetch } = useFetch("comp-details", {
    comp_id: params.id,
  });

  const filteredData = data.filter((item) => item.id.includes(params.id));
  console.log(filteredData);

  const [refreshing, setRefreshing] = useState(false);
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const onRefresh = () => {};

  const displayTabContent = () => {
    switch (activeTab) {
      case "Lisätiedot":
        return (
          <About title="Lisätiedot" location={filteredData[0].location} time={filteredData[0].time} ID={filteredData[0].id}/>
        );
      case "Sääennuste":
        break;
      case "Kisakartta":
        break;
      case "Ajo-ohjeet":
        break;
      default:
        break;
    }
  };

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
                compName={filteredData[0].name}
                compArea={filteredData[0].area}
                compTime={filteredData[0].time}
                compID={filteredData[0].id}
              />
              <Tabs
                tabs={tabs}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />

              {displayTabContent()}
            </View>
          )}
        </ScrollView>
      </>
    </SafeAreaView>
  );
};

export default CompDetails;
