import React from 'react'
import { View, Text } from 'react-native'

import styles from './specifics.style'

const Specifics = ({ data }) => {
  return (
    <View style={styles.container}>

      <View style={styles.pointWrapper}>
        <Text style={styles.title}>Ref:</Text>
        <Text style={styles.pointText}>{data.id}</Text>
      </View>

      <View style={styles.pointWrapper}>
        <Text style={styles.title}>Price:</Text>
        <Text style={styles.pointText}>{data.price} £</Text>
      </View>

      <View style={styles.pointWrapper}>
        <Text style={styles.title}>Category:</Text>
        <Text style={styles.pointText}>{data.category}</Text>
      </View>

      <View style={styles.pointWrapper}>
        <Text style={styles.title}>Property Type:</Text>
        <Text style={styles.pointText}>{data.propertyType}</Text>
      </View>


      <View style={styles.pointWrapper}>
        <Text style={styles.title}>Living Rooms:</Text>
        <Text style={styles.pointText}>{data.livingRooms}</Text>
      </View>

      <View style={styles.pointWrapper}>
        <Text style={styles.title}>Baths:</Text>
        <Text style={styles.pointText}>{data.baths}</Text>
      </View>

      <View style={styles.pointWrapper}>
        <Text style={styles.title}>Beds:</Text>
        <Text style={styles.pointText}>{data.beds}</Text>
      </View>

      <View style={styles.pointWrapper}>
        <Text style={styles.title}>Agent Name:</Text>
        <Text style={styles.pointText}>{data.agentName}</Text>
      </View>

      <View style={styles.pointWrapper}>
        <Text style={styles.title}>Agent Phone:</Text>
        <Text style={styles.pointText}>{data.agentPhone}</Text>
      </View>


      <View style={styles.pointWrapper}>
        <Text style={styles.pointText}>Published On {data.publishedOn}</Text>
      </View>
    </View>
  )
}

export default Specifics