import { ComponentProps } from "react";
import { MaterialIcons } from "@expo/vector-icons";

export type IconName = ComponentProps<typeof MaterialIcons>["name"];

export const Icons: IconName[] = [
  "home",
  "shopping-cart",
  "restaurant",
  "directions-car",
  "pets",
  "school",
  "favorite",
  "work",
];

export default Icons
