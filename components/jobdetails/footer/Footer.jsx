import React from "react";
import { View, Text, TouchableOpacity, Linking, Image } from "react-native";

import styles from "./footer.style";
import { images } from "../../../constants";

const Footer = ({ comp }) => {
  return (
    <View style={styles.container}>
      <View style={styles.likeBtn}>
        <Image
          source={images.metrix}
          resizeMode="contain"
          style={styles.likeBtnImage}
        />
      </View>
      <TouchableOpacity
        style={styles.applyBtn}
        onPress={() => Linking.openURL(`https://discgolfmetrix.com/${comp.id}`)}
      >
        <Text style={styles.applyBtnText}>Ilmoittaudu kisaan</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
