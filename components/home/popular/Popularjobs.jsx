import { useState } from 'react'
import { useRouter } from 'expo-router';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList
} from 'react-native'

import styles from './popularjobs.style'
import { COLORS, SIZES } from '../../../constants';
import PopularJobCard from './../../common/cards/popular/PopularJobCard';
import useFetch from '../../../hook/useFetch'
const Popularjobs = () => {
  const router = useRouter()
  const [selectedHome, setSelectedHome] = useState();

  const handleCardPress = (item) => {
    router.push(`/property-details/${item.id}`);
    setSelectedHome(item.id);
  };
  const { data, isLoading, error } = useFetch("properties/rent",
    {
      locationKey: 'london',
      sort: 'recent'
    },)

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}> Popular Homes</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}></Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ?
          (<ActivityIndicator size='large' colors={COLORS.primary} />)
          : error ?
            (<Text>Something went wrong</Text>)
            : (<FlatList
              data={data}
              renderItem={({ item }) => (
                <PopularJobCard
                  item={item}
                  selectedJob={selectedHome}
                  handleCardPress={handleCardPress}

                /*    key={`${item.id}`}
                   handleNavigate={() => router.push(`/property-details/${item.id}`)} */
                />
              )}
              keyExtractor={item => item?.id}
              contentContainerStyle={{ columnGap: SIZES.medium }}
              horizontal
            />
            )}
      </View>

    </View>
  )
}

export default Popularjobs