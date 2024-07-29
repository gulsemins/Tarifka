import Details from "@/components/details/DetailsPage";
import axios from "axios";
import { Stack, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";

export interface DetailType {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strInstructions: string;
  strMealThumb: string;
  strYoutube: string;
  strArea: string;
}
const DetailsPage = () => {
  const [details, setDetails] = useState<DetailType | null>(null);
  const { id } = useLocalSearchParams();
  console.log(id);
  async function fetchData() {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      setDetails(response.data.meals[0]);
      console.log("GET response:", response.data.details);
    } catch (error) {
      console.error("API çağrısında hata:", error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ScrollView>
      <View>
        <Stack.Screen
          options={{
            headerTitleStyle: {
              color: "#ffa602",
            },
            title: details?.strMeal,
          }}
        />
        {details ? <Details details={details} /> : <Text>Loading...</Text>}
      </View>
    </ScrollView>
  );
};

export default DetailsPage;
