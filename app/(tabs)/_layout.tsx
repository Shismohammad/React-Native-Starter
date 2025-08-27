import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: 'white' },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
      }}
    >
      <Tabs.Screen
        name="track-workout"
        options={{
          title: 'Track Workout',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="barbell-outline"
              size={24}
              color={focused ? 'black' : 'gray'}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="plans"
        options={{
          title: 'Plans',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="calendar-outline"
              size={24}
              color={focused ? 'black' : 'gray'}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="workout"
        options={{
          title: 'Workouts',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="fitness-outline"
              size={24}
              color={focused ? 'black' : 'gray'}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="person-outline"
              size={24}
              color={focused ? 'black' : 'gray'}
            />
          ),
        }}
      />
    </Tabs>
  );
}
