import { Text, View } from 'react-native';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return <View>{fontsLoaded ? <Text>Hello World!</Text> : <View />}</View>;
}
