import { Link } from 'expo-router';
import { Text } from 'react-native';
import CustomView from '../components/CustomView';
import { Ionicons } from '@expo/vector-icons';

export default function Home() {
  return (
    <CustomView className="flex-1 items-center justify-center">
      <Ionicons name="fitness" size={150} color="purple" />

      <Text className="mb-2 text-3xl font-bold text-fuchsia-900">TrackIt</Text>

      <Text className="mb-2 text-lg font-bold">A Gym workout planner</Text>

      <Link href="/profile">
        <Text className="mb-2 text-3xl font-bold text-fuchsia-900">
          Go to Profile
        </Text>
      </Link>
    </CustomView>
  );
}
