import { View } from 'react-native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function CustomView({ className, ...props }) {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[{ paddingTop: insets.top, paddingBottom: insets.bottom }]}
      {...props}
      className={className}
    />
  );
}
