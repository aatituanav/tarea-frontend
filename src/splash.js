import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./Navigation";
import { useEffect, useState } from "react";

export default function Splash() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise((resolve) => setTimeout(resolve, 5000));
        console.log("se cargo el sistema");
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        console.log("sdfasdfa");
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);
  return (
    <>
      {appIsReady == false ? (
        <ActivityIndicator size="large" color="#00ff00" />
      ) : (
        <Navigation />
      )}
    </>
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
