import { View, FlatList, Text, Button } from "react-native";
import axios from "axios";
import { useState } from "react";
import CategoryCard from "@/components/categories/CategoryCard";

export interface CategoryType {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

const Categories = () => {
  const [categories, setCategories] = useState<CategoryType[]>([]);

  async function fetchData() {
    try {
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      setCategories(response.data.categories);
      console.log("GET response:", response.data.categories);
    } catch (error) {
      console.error("API çağrısında hata:", error);
    }
  }

  const renderCategoryList = ({ item }: { item: CategoryType }) => (
    <CategoryCard category={item} />
  );

  return (
    <View>
      <Text>hello </Text>
      <Button onPress={fetchData} title="fetch" />
      <FlatList
        data={categories}
        renderItem={renderCategoryList}
        keyExtractor={(item) => item.idCategory}
      />
    </View>
  );
};

export default Categories;
