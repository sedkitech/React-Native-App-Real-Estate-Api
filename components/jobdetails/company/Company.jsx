import React from "react";
import { View, Text, TouchableOpacity, Image, ImageBackground } from "react-native";

import styles from "./company.style";
import { icons } from "../../../constants";
import Specifics from "../specifics/Specifics";

const Company = ({ data, companyLogo, jobTitle, companyName, location }) => {
  return (
    <View style={styles.propertyImgContainer}>
      <ImageBackground
        style={styles.propertyImg}
        source={{ uri: companyLogo }}
        borderRadius={16}
      >
        <TouchableOpacity style={styles.logoOne}>
          <Image
            style={styles.logoTwo}
          />
        </TouchableOpacity>
      </ImageBackground>


      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle}>{jobTitle}</Text>
      </View>

      <View>
        <Text style={styles.companyName}>{companyName}</Text>
      </View>
      <View style={styles.locationBox}>
        <Image
          source={icons.location}
          resizeMode='contain'
          style={styles.locationImage}
        />
        <Text style={styles.locationName}>{location}</Text>
      </View>

      <Specifics
        data={data}
      />
    </View>
  );
};

export default Company;