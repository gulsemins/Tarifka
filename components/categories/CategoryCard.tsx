import { CategoryType } from "@/app";
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
  category: CategoryType;
};
const CategoryCard = (props: Props) => {
  return (
    <Pressable
      onPress={() => {
        router.push({
          pathname: "/meals/[category]",
          params: { category: props.category.strCategory },
        });
      }}
    >
      <View style={styles.container}>
        <View style={styles.info}>
          <Image
            style={styles.image}
            source={{ uri: props.category.strCategoryThumb }}
          />
          <Text style={styles.title}>{props.category.strCategory}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default CategoryCard;
const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fea600",
    padding: 10,
  },
  title: {
    margin: 10,
    fontSize: 26,
    fontWeight: "400",
  },
  image: {
    width: windowWidth / 3,
    minHeight: 85,
    resizeMode: "contain",
    borderTopLeftRadius: 60,
    borderBottomLeftRadius: 60,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
    borderTopLeftRadius: 70,
    borderBottomLeftRadius: 70,
    backgroundColor: "#ebeff2",
    height: 100,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
  },
});
