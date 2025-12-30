import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="index"
        options={{
          headerTitle: "",
          headerTransparent: true,
          headerShown: false
        }}
      />
      <Stack.Screen 
        name="form"
        options={{
          headerTitle: "",
          headerTransparent: true,
          headerShown: false
        }}
      />
    </Stack>
  );
}
