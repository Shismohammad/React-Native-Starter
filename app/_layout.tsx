import { useColorScheme, View } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import { colours } from '../constants/colours';
import { StatusBar } from 'expo-status-bar';
import '../styles/global.css';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  console.log('Theme : ', colorScheme);
  const theme = colours[colorScheme] ?? colours.light;

  return (
    <>
      <StatusBar style="auto" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: theme.navBackground },
          headerTintColor: theme.text,
        }}
      >
        <Stack.Screen
          name="index"
          options={{ title: 'Welcome Screen', headerShown: false }}
        />

        <Stack.Screen name="(auth)" options={{ headerShown: false }} />

        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
