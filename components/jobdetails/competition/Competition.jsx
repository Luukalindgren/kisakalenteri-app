import React from "react";
import { View, Text } from "react-native";

import styles from "./competition.style";
import { icons } from "../../../constants";

const Competition = ({
  compName,
  compArea,
  compTime,
  compID,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle}>{compName}</Text>
      </View>
      <View style={styles.companyInfoBox}>
        <Text style={styles.companyName}>{compArea}</Text>
      </View>
      <View style={styles.companyInfoBox}>
        <Text style={styles.companyName}>{compTime}</Text>
      </View>
    </View>
  );
};

export default Competition;
