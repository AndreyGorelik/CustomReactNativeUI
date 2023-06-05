import { useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import TextInput from "./src/components/TextInput";
import Text from "./src/components/Text";
import Button from "./src/components/Button";
export default function App() {
  const [textInput, setTextInput] = useState("");
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.container}>
        <TextInput
          onChangeText={setTextInput}
          value={textInput}
          placeholder="Some placeholder"
        />
        <Text variant="h1">Header 1</Text>
        <Text variant="h2">Header 2</Text>
        <Text variant="h3">Header 3</Text>
        <Text>standart text</Text>
        <Button
          title="standart width button"
          onPress={() => console.log("hello")}
        />
        <Button
          title="with width prop button"
          width={"100%"}
          onPress={() => console.log("hello")}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 50,
    paddingHorizontal: 15,
  },
});
