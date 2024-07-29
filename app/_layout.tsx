import React from "react";
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Category",
          headerTitleStyle: {
            fontWeight: "500",
            fontSize: 24,
            color: "#ffa602",
          },
        }}
      />
    </Stack>
  );
}
