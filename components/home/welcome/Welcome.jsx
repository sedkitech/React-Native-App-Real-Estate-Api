import React, { useState } from 'react'
import { View, Text, TextInput, Image, FlatList } from 'react-native'

import styles from './welcome.style'
import { TouchableOpacity } from 'react-native'
import { SIZES, icons } from '../../../constants'
import { useRouter } from 'expo-router';

const Welcome = () => {
  const router = useRouter()

  const rentTypes = ["recent", "highest", "lowest"]
  const [activeRentType, setActiveRentType] = useState("Houses");

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName} >Properties to rent</Text>
        <Text style={styles.welcomeMessage}>Find your next home in the UK.</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=''
            onChange={() => { }}
            placeholder='Enter a location'
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={() => { }}>
          <Image
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={rentTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeRentType, item)}
              onPress={() => {
                setActiveRentType(item)
                router.push(`/search/${item}`)
              }}
            >
              <Text style={styles.tabText(activeRentType, item)}>{item.charAt(0).toUpperCase()}{item.slice(1)}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />

      </View>


    </View>
  )
}

export default Welcome