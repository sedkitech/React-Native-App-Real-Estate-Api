import { Stack, useRouter } from "expo-router";
import { SafeAreaView, Text, View, ScrollView } from "react-native";
import { useState } from "react";
import { COLORS, icons, images, SIZES } from '../constants'
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components'

export default function Home() {
  const router = useRouter()
  return (
    <SafeAreaView style={{
      flex: 1, backgroundColor: COLORS.lightWhite
    }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profilePic} dimension="100%" />
          ),
          /* empty string to hide index title */
          headerTitle: ""
          /* headerShadowVisible: false, */
        }}
      />
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={{
          flex: 1,
          padding: SIZES.medium
        }} >
          <Welcome />
          <Popularjobs />
          <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
};
