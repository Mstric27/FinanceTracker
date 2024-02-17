import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { auth } from "../js/firebase.js";
import { useNavigation } from "@react-navigation/native";
import { connectToBank } from "../js/client.js";

const BankTransactions = () => {
  const navigation = useNavigation();

  const BackHome = () => {
    navigation.navigate("Home");
  };
  const connect = () => {
    () => {connectToBank}
    console.log('test')
  }

  return (
    <View style={styles.container}>
      <Text>BankTransactions</Text>
      <TouchableOpacity onPress={BackHome} style={styles.button}>
        <Text style={styles.buttonText}>Back To Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {connectToBank}}style={styles.button}>
        <Text style={styles.buttonText}>Conect</Text>
      </TouchableOpacity>
      
    </View>
  );
};

export default BankTransactions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#0782F9",
    width: "60%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 40,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
});
