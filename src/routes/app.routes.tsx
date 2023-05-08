import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '@screens/Home';
import { Profile } from '@screens/Profile';
import { History } from '@screens/History';
import { Exercise } from '@screens/Exercise';

export function AppRoutes() {
  const { Navigator, Screen } = createBottomTabNavigator();
  return (
    <Navigator>
      <Screen name="home" component={Home} />
      <Screen name="profile" component={Profile} />
      <Screen name="history" component={History} />
      <Screen name="exercise" component={Exercise} />
    </Navigator>
  );
}
