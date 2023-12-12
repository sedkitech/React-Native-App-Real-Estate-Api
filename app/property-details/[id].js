import React from 'react'
import { Stack, useRouter, useSearchParams } from "expo-router";
import { ActivityIndicator, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { COLORS, icons, SIZES } from "../../constants";
import useFetch from './../../hook/useFetch';

import {
  Company,
  JobAbout,
  JobFooter,
  JobTabs,
  ScreenHeaderBtn,
  Specifics,
} from "../../components";


const JobDetails = () => {
  const params = useSearchParams()
  const router = useRouter()

  const { data, isLoading, error, refetch } = useFetch(`properties/${params.id}`)

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerBackVisible: false,
          headerTitle: "Property Details",
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension="60%"
              handlePress={() => router.back()}
            />
          ),

        }}
      />
      <>
        <ScrollView showsVerticalScrollIndicator={false}>

          {isLoading ?
            (<ActivityIndicator size='large' color={COLORS.primary} />)
            : error ?
              (<Text>Something went wrong</Text>)
              : data?.length === 0 ?
                (<Text>No data found.</Text>)
                :
                (
                  <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
                    <Company
                      companyLogo={data.images[0]}
                      jobTitle={data.name}
                      companyName={data.agentName}
                      location={data.address}
                      data={data}
                    />



                    {/* <JobTabs
                      tabs={tabs}
                      activeTab={activeTab}
                      setActiveTab={setActiveTab}
                    /> */}

                    {/*   {displayTabContent()} */}
                  </View>
                )
          }

        </ScrollView>
      </>

    </SafeAreaView>
  )
}

export default JobDetails