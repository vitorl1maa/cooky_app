import { IngredientsProps } from "../components/Ingredient";
import { supabase } from "./supabase";


export async function findAll() {
  const { data } = await supabase.from("ingredients").select().order("name").returns<IngredietResponse[]>();

  return data ?? []
}

