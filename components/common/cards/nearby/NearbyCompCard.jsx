import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./nearbycompcard.style";

const NearbyCompCard = ({ item, selectedJob, handleCardPress }) => {
  return (
    <TouchableOpacity
      style={styles.container(selectedJob, item)}
      onPress={() => handleCardPress(item)}
    >
      <Text style={styles.companyName} numberOfLines={1}>
        {item.area}
      </Text>
      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedJob, item)} numberOfLines={3}>
          {item.name}
        </Text>
        <Text style={styles.location}>{item.time}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NearbyCompCard;
