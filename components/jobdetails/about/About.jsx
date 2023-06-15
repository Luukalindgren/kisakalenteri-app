import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./about.style";

const About = ({ title, location, time, ID }) => {
  const handleClick = () => {
    //Link to competition page: `https://discgolfmetrix.com/${ID}`
  };

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.headText}>{title}:</Text>
        <View style={styles.contentBox}>
          <Text style={styles.contextText}>Rata: {location}</Text>
          <Text style={styles.contextText}>Päivä ja aika: {time}</Text>
        </View>
      </View>
      <View style={styles.container}>
        <TouchableOpacity style={styles.btn} onPress={handleClick}>
          <Text style={styles.btnText}>Ilmoittaudu</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default About;
