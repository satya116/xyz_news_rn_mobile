import { NavigationContainer } from '@react-navigation/native';
import NewsScrollScreen from './src/screen/NewsScrollScreen';
import NewsDetailScreen from './src/screen/NewsDetailScreen';
import UserPreferenceScreen from './src/screen/UserPreferenceScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import React from "react";
import { ClerkProvider } from "@clerk/clerk-expo";
import OnboardingScreen from './src/screen/OnBoardingScreen';
import CreateNewsScreen from './src/screen/team_screen/CreateNewsScreen';

export default function App() {
  // TODO:
  const CLERK_PUBLISHABLE_KEY = "pk_test_ZmFjdHVhbC1ndXBweS04OS5jbGVyay5hY2NvdW50cy5kZXYk" || "will need to be set in production env";

  return (
    <>
      <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='NewsScrollScreen'>
            <Stack.Screen name="NewsScrollScreen" options={{ headerShown: false }} component={NewsScrollScreen} />
            <Stack.Screen name="NewsDetailScreen" options={{ headerShown: false }} component={NewsDetailScreen} />
            <Stack.Screen name="OnboardingScreen" options={{ headerShown: false }} component={OnboardingScreen} />
            <Stack.Screen name="CreateNewsScreen" options={{ headerShown: false }} component={CreateNewsScreen} />
            <Stack.Screen name="UserPreferenceScreen" component={UserPreferenceScreen} />
          </Stack.Navigator>
        </NavigationContainer>
        {/* </GestureHandlerRootView> */}
      </ClerkProvider>
    </>
  );
}