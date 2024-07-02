import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
} from "react-native";;

export default function HomeScreen() {

  return (
    <ScrollView style={[styles.container, { marginTop: 40}]}>
      <View>
        <Text>Hello World</Text>
       </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
});
