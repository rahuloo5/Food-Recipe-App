import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeScreen from '../../Screens/Home/HomeScreen'
import RecipeScreen from '../../Screens/Recipe/RecipeScreen'
import IngredientDetail from '../../Screens/Ingredient/IngredientDetail';
import RecipeList from '../../Screens/RecipeList/RecipeList';
import Category from '../../Screens/Category/Category';
import DrawerNav from '../../Screens/DrawerContainer/DrawerNav'



const Stack = createStackNavigator();

function MainNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          fontWeight: 'bold',
          textAlign: 'center',
          alignSelf: 'center',
          flex: 1,
        },
      }}
    >
      <Stack.Screen
        name="Home"
        options={{
          title: 'Gourmet',
          headerStyle: {backgroundColor: 'black'},
          headerTintColor: 'white',
        }}
        component={HomeScreen}
      />
      <Stack.Screen
        name="Recipe"
        options={{
          title: 'Dish',
          headerStyle: {backgroundColor: 'black'},
          headerTintColor: 'white',
        }}
        component={RecipeScreen}
      />
      <Stack.Screen
        name="IngredientsDetails"
        options={{
          title: 'Ingredient',
          headerStyle: {backgroundColor: 'black'},
          headerTintColor: 'white',
        }}
        component={IngredientDetail}
      />
      <Stack.Screen
        name="RecipeList"
        options={{
          title: 'The MasterChef',
          headerStyle: {backgroundColor: 'black'},
          headerTintColor: 'white',
        }}
        component={RecipeList}
      />
      <Stack.Screen name="Categories" component={Category} />
    </Stack.Navigator>
  );
}

const Drawer = createDrawerNavigator();

function DrawerStack() {
  return (
    <Drawer.Navigator
      drawerPosition="left"
      drawerStyle={{
        width: 250,
      }}
    >
      <Drawer.Screen name="Main" 
      component={MainNavigator} />
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name ="categories" component={Category}/>
    </Drawer.Navigator>
  );
}

export default function AppContainer() {
  return (
    <NavigationContainer>
      <DrawerStack />
    </NavigationContainer>
  );
}

console.disableYellowBox = true;