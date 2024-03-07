import { View, Text, ScrollView } from "react-native";
import { styles } from "./styles";
import { Ingredient } from "@/src/components/Ingredient";
import { useState } from "react";

export default function Index() {
  const [selected, setSelected] = useState<String[]>([]);

  function handleToggleSelected(value: string) {
    if (selected.includes(value)) {
      return setSelected((state) => state.filter((item) => item !== value));
    }

    setSelected((state) => [...state, value]);
    console.log(selected);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Escolha {"\n"}
        <Text style={styles.subtitles}>os produtos</Text>
      </Text>
      <Text style={styles.message}>
        Descubra receitas baseadas nos produtos {"\n"} que você escolheu.
      </Text>

      <ScrollView horizontal contentContainerStyle={styles.ingredients}>
        {Array.from({ length: 15 }).map((item, index) => (
          <Ingredient
            key={index}
            name="Tomate"
            image=""
            selected={selected.includes(String(index))}
            onPress={() => handleToggleSelected(String(index))}
          />
        ))}
      </ScrollView>
    </View>
  );
}
