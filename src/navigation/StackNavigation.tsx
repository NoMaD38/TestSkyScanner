import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import FlightList from '../app/components/flight-list/FlightList';
import ViewFlight from '../app/components/view-flight/ViewFlight';

export type RootParamList = {
  FlightList: undefined;
  ViewFlight: { id: string };
};

const Stack = createStackNavigator();

export default function MainStack(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={'none'}>
        <Stack.Screen name="FlightList" component={FlightList} />
        <Stack.Screen name="ViewFlight" component={ViewFlight} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
