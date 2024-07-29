import MealsCard from "@/components/meals/MealsCard";
import axios from "axios";
import { Stack, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

export interface MealType {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}
const MealsList = () => {
  const [meals, setMeals] = useState<MealType[]>([]);
  const { category } = useLocalSearchParams();
  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
      );
      setMeals(response.data.meals);
      console.log("GET response:", response.data.meals);
    } catch (error) {
      console.error("API çağrısında hata:", error);
    }
  }

  const renderMealList = ({ item }: { item: MealType }) => (
    <MealsCard meals={item} />
  );
  return (
    <View>
      <Stack.Screen
        options={{
          title: `Meals with ${category}`,
        }}
      />

      <FlatList
        data={meals}
        renderItem={renderMealList}
        keyExtractor={(item) => item.idMeal}
      />
    </View>
  );
};
export default MealsList;
