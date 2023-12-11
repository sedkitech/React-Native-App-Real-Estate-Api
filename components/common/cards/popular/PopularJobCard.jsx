import React from 'react'
import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native'

import styles from './popularjobcard.style'

const PopularJobCard = ({ item, selectedHome, handleCardPress }) => {
  return (
    <TouchableOpacity

      onPress={() => handleCardPress(item)}
    >
      <ImageBackground
        style={styles.imgCardBackground}
        source={{ uri: item.image }}
        borderRadius={16}
      >
        <TouchableOpacity style={styles.logoOne}>
          <Image
            style={styles.logoTwo}
          />
        </TouchableOpacity>

        <Text style={styles.companyName} numberOfLines={1}></Text>
        <View style={styles.infoContainer}>
          <Text style={styles.jobName(selectedHome, item)} numberOfLines={1} ></Text>
          <Text style={styles.location} numberOfLines={1}></Text>
          <Text style={styles.location} numberOfLines={1}>{item.address}</Text>

        </View>
      </ImageBackground>
    </TouchableOpacity>
  )
}

export default PopularJobCard