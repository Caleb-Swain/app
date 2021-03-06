import 'react-native-gesture-handler';
import React from 'react';
import {setGlobal} from 'reactn';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import CardsScene from './scenes/cards';
import CardDetails from './scenes/card-details';
import AddCardManually from './scenes/add-card-manually';
import AddCardScan from './scenes/add-card-scan';

// Set global state variables
setGlobal({
  cards: []
});

const Tab = createBottomTabNavigator();
const CardsStack = createStackNavigator();
const DecksStack = createStackNavigator();

const CardsStackScreen = () => (
  <CardsStack.Navigator>
    <CardsStack.Screen name="Cards" component={CardsScene}/>
    <CardsStack.Screen name="Card-Details" component={CardDetails} options={({route}) => ({title: route.params.name})}/>
    <CardsStack.Screen name="Add-Card-Manually" component={AddCardManually} options={{title: 'Add a Card'}}/>
    <CardsStack.Screen name="Add-Card-Scan" component={AddCardScan} options={{title: 'Add a Card'}}/>
  </CardsStack.Navigator>
);

const DecksStackScreen = () => (
  <DecksStack.Navigator>
  </DecksStack.Navigator>
);

export default () => (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Cards" component={CardsStackScreen}/>
      <Tab.Screen name="Decks" component={DecksStackScreen}/>
    </Tab.Navigator>
  </NavigationContainer>
);
