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
          pathname: "/details/[id]",
          params: { id: props.meals.idMeal },
        });
      }}
    >
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: props.meals.strMealThumb }}
        />
        <View style={styles.titleContainer}>
          <View style={styles.background}>
            <Text style={styles.title}>{props.meals.strMeal}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};
const windowWidth = Dimensions.get("window").width;
export default MealCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fea600",
    padding: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "white",
    textAlign: "right",
    marginHorizontal: 10,
  },
  image: {
    flex: 1,
    width: "auto",
    height: 200,
    borderRadius: 10,
  },
  titleContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    padding: 10,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  background: {
    backgroundColor: "rgba(0,0,0,0.5)",
    width: "100%",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});
