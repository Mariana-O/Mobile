import React from "react";
import { StyleSheet, Text, View, TouchableOpacityProps } from "react-native";

type Props = {
  data: Pokemon[];
} & TouchableOpacityProps;

export default function Card({ data, ...rest }: Props) {
  return (
    <View>
      {data.map((item) => {
        return (
          <View style={styles.card}>
            <Text>{item.name}</Text>
          </View>
        )
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 5,
    backgroundColor: '#1515',
    color: 'black',
    borderRadius: 25,
    margin: 10,
    alignItems: 'center',
    marginBottom: 25,
    paddingVertical: 80,
  },

});
