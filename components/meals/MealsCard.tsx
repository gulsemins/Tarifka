import { MealType } from "@/app/meals/[category]";
import { router } from "expo-router";
import React from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  Pressable,
  Dimensions,
} from "react-native";
type Props = {
  meals: MealType;
};
const MealCard = (props: Props) => {
  return (
    <Pressable
      onPress={() => {
        router.push({
          pathname: "/meals/mealsList",
          params: { id: props.meals.idMeal },
        });
      }}
    >
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: props.meals.strMealThumb }}
        />
        <Text style={styles.title}>{props.meals.strMeal}</Text>
      </View>
    </Pressable>
  );
};

export default MealCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fea600",
    padding: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: "400",
  },
  image: {
    flex: 1,
    width: "auto",
    height: 200,
    borderRadius: 10,
  },
});
