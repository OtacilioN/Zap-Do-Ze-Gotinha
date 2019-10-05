import React from 'react';
import { Text } from 'react-native';

export function MonoText(props) {
  return <Text {...props} style={[{ fontSize: 12 }, props.style, { fontFamily: 'space-mono' }]} />;
}
