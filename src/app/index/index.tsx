import { View, Text, ScrollView, Alert } from "react-native";
import { styles } from "./styles";
import { Ingredient } from "@/src/components/Ingredient";
import { useState } from "react";
import { Selected } from "@/src/components/Selected";
import { router } from "expo-router";

export default function Index() {
  const [selected, setSelected] = useState<String[]>([]);

  function handleToggleSelected(value: string) {
    if (selected.includes(value)) {
      return setSelected((state) => state.filter((item) => item !== value));
    }

    setSelected((state) => [...state, value]);
    console.log(selected);
  }

  function handleClearSelected() {
    Alert.alert("Limpar", "Deseja limpar tudo ?", [
      { text: "Não", style: "cancel" },
      { text: "Sim", onPress: () => setSelected([]) },
    ]);
  }

  function handleSearch() {
    router.navigate("/recipes/");
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

      {selected.length > 0 && (
        <Selected
          quantity={selected.length}
          onClear={handleClearSelected}
          onSearch={handleSearch}
        />
      )}
    </View>
  );
}
