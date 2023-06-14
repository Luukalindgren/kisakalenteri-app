import { View, Text, TouchableOpacity } from "react-native";

import styles from "./allcompcard.style";

const AllCompCard = ({ item, handleNavigate }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <Text style={styles.companyName} numberOfLines={1}>
        {item.time}
      </Text>
      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={3}>
          {item.name}
        </Text>
        <Text style={styles.jobType}>{item.area}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default AllCompCard;
