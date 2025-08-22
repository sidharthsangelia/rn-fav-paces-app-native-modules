import { View, Text, FlatList } from "react-native";
import React from "react";
import PlaceItem from "./PlaceItem";

export default function PlacesList({ places }) {
  if (!places || places.lenght === 0) {
    return (
      <View>
        <Text>No places added yet. Please add places</Text>
      </View>
    );
  }

  return (
    <View>
      <FlatList
        data={places}
        keyExtractor={(item) => {
          item.id;
        }}
        renderItem={({ item }) => <PlaceItem place={item} />}
      />
    </View>
  );
}
