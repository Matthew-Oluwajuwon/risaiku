import { KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback } from "react-native";
import React from "react";

const KeyboadAvoidingContainer = ({ children }) => {
  return (
    <KeyboardAvoidingView className="flex-1">
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>{children}</TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default KeyboadAvoidingContainer;
