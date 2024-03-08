import { FlatList, Text, View } from "react-native";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Recipe } from "@/src/components/Recipe";
// import { Ingredients } from "@/src/components/Ingredients";

export default function Recipes() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons
          name="arrow-back"
          size={32}
          onPress={() => router.back()}
        />

        <Text style={styles.title}>Ingredientes</Text>
      </View>

      {/* <Ingredients ingredients={[]} /> */}

      <FlatList
        data={["1"]}
        keyExtractor={(item) => item}
        renderItem={() => (
          <Recipe
            recipe={{
              name: "Omelete",
              image:
                "https://th.bing.com/th/id/OIP.nq_bQTn3cdbzCYWpnK0hFAHaEr?w=312&h=197&c=7&r=0&o=5&pid=1.7",
              minutes: 10,
            }}
          />
        )}
      />
    </View>
  );
}
