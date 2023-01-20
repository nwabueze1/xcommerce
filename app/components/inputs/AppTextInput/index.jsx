import { StyleSheet, TextInput, View } from "react-native";
import React from "react";
import { inputType } from "./utils";

const AppTextInput = ({
  endIcon,
  name,
  numberOfLines = 1,
  onChange,
  startIcon,
  type = "text",
  value,
}) => {
  return (
    <View style={styles.container}>
      {startIcon}
      <TextInput
        value={value}
        numberOfLines={numberOfLines}
        onChange={onChange}
        secureTextEntry={type === inputType.password}
      />
      {endIcon}
    </View>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
});
