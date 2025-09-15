import { Link, router } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';
import CustomView from '../components/CustomView';
import { Ionicons } from '@expo/vector-icons';

export default function Home() {
  return (
    <CustomView className="flex-1 items-center justify-center">
      <Ionicons name="fitness" size={150} color="purple" />

      <Text className="mb-2 text-3xl font-bold text-fuchsia-900">TrackIt</Text>

      <Text className="mb-2 text-lg font-bold">A Gym workout planner</Text>

      <View className="px-10">
        <TouchableOpacity
          className="mt-5 w-full rounded-full bg-white p-4 shadow-md shadow-zinc-400"
          onPress={() => router.push('/sign-in')}
        >
          <View className="items-center">
            <Text className="text-3xl font-bold text-fuchsia-900">Sign In</Text>
          </View>
        </TouchableOpacity>
      </View>
    </CustomView>
  );
}
