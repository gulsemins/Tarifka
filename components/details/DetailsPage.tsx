import { DetailType } from "@/app/details/[id]";
import { router } from "expo-router";
import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

type Props = {
  details: DetailType;
};

const Details = (props: Props) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: props.details.strMealThumb }}
      />
      <View style={styles.info}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{props.details.strMeal}</Text>
          <Text style={styles.area}>{props.details.strArea}</Text>
        </View>
        <View style={styles.instruction}>
          <Text>{props.details.strInstructions}</Text>
        </View>
      </View>
    </View>
  );
};
export default Details;

const styles = StyleSheet.create({
  container: {},
  image: {
    width: "auto",
    height: 300,
  },
  titleContainer: {
    margin: 5,
    borderBottomWidth: 1,
    borderColor: "#c3c3c3",
  },
  info: {},
  area: {
    color: "#983234",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  title: {
    color: "#983234",
    fontSize: 30,
    fontWeight: "bold",
  },
  instruction: {
    padding: 10,
  },
});
