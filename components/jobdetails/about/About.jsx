import React from "react";
import { View, Text } from "react-native";

import styles from "./about.style";

const About = ({ title, location, time }) => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.headText}>{title}:</Text>
        <View style={styles.contentBox}>
          <Text style={styles.contextText}>Rata: {location}</Text>
          <Text style={styles.contextText}>Päivä ja aika: {time}</Text>
        </View>
      </View>
    </View>
  );
};

export default About;
