import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import CustomView from '../../components/CustomView';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function SignIn() {
  const handleGoogleSignIn = () => {
    router.push('/track-workout');
  };

  return (
    <CustomView className="h-full bg-white">
      <ScrollView contentContainerClassName="h-full">
        <View className="px-10">
          <Text className="mt-12 text-center text-lg text-black">
            Welcome to the App!
          </Text>

          <Text className="mt-12 text-center text-3xl font-extrabold text-black">
            Lets get started, Sign in to continue 
          </Text>

          <Text className="mt-12 text-center text-lg font-bold text-black">
            Log in with Google
          </Text>

          <TouchableOpacity
            className="mt-5 w-full rounded-full bg-white p-4 shadow-md shadow-zinc-400"
            onPress={handleGoogleSignIn}
          >
            <View className="flex flex-row items-center justify-start">
              <Ionicons name="logo-google" size={40} />
              <Text className="ml-4 text-lg font-bold">
                Continue with Google
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </CustomView>
  );
}
