import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/Navigation";
import Splash from "./src/splash";

global.ip = "172.20.10.9";
global.port = "9004";
export default function App() {
  return (
    <NavigationContainer>
      <Splash />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
});
