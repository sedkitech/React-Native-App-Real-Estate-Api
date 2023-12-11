import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./nearbyjobcard.style";

const NearbyJobCard = ({ item, handleNavigate }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{
            uri: item.image
          }}
          resizeMode='contain'
          borderRadius={16}

          style={styles.logoContainer}
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {item?.address}
        </Text>

        <Text style={styles.jobType} numberOfLines={1}>{item?.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NearbyJobCard;