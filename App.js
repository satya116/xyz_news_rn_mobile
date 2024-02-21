import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import NewsScrollScreen from './src/screen/NewsScrollScreen';
import NewsDetailScreen from './src/screen/NewsDetailScreen';
import UserPreferenceScreen from './src/screen/UserPreferenceScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import React from "react";
import { SafeAreaView, } from "react-native";
import { ClerkProvider } from "@clerk/clerk-expo";
import Constants from "expo-constants"

// export default function App() {
//   return (
//     <ClerkProvider publishableKey={Constants.expoConfig.extra.clerkPublishableKey}>
//       <SafeAreaView style={styles.container}>
//         <Text>Hello world!</Text>
//       </SafeAreaView>
//     </ClerkProvider>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

export default function App() {

  console.log("api key", process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY);
  return (
    <>
      <ClerkProvider publishableKey={"pk_test_ZmFjdHVhbC1ndXBweS04OS5jbGVyay5hY2NvdW50cy5kZXYk"}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="NewsScrollScreen" options={{ headerShown: false }} component={NewsScrollScreen} />
            <Stack.Screen name="NewsDetailScreen" component={NewsDetailScreen} />
            <Stack.Screen name="UserPreferenceScreen" component={UserPreferenceScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </ClerkProvider>


    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
