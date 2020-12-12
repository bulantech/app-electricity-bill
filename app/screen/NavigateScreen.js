import React from "react";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
// import MapScreen from "./MapScreen";
import WelcomeScreen1 from "./Welcomscreen1";
// import CardScreen from "./CardScreen";
// import DetailScreen from "./DetailScreen";
// import MapScreenApi from "./MapScreenapi";
// import MarkerDetailScreen from "./MarkerDetailScreen";

import Electricity from "./Electricity";
import Waterworks from "./Waterworks";

const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen1}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen name="Maps" component={MapScreenApi} />
      <Stack.Screen name="List" component={CardScreen} />
      <Stack.Screen name="Details" component={MarkerDetailScreen} /> */}

      <Stack.Screen name="Electricity" component={Electricity} options={{ title: 'ค่าน้ำ' }}/> 
      <Stack.Screen name="Waterworks" component={Waterworks} options={{ title: 'ค่าไฟ' }}/>
    </Stack.Navigator>
  );
};
function NavigateScreen() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
export default NavigateScreen;
