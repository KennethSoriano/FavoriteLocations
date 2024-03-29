import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AllPlaces from './screens/AllPlaces';
import AddPlace from './screens/AddPlace';
import IconButton from './components/UI/IconButton';
import { Colors } from './constants/colors';
import Map from './screens/Map';
import AppLoading from 'expo-app-loading';
import { init } from './util/database';

const Stack = createNativeStackNavigator();

export default function App() {
  const [dbInitialized, setDbInitialized] = useState(false);

  useEffect(() => {
    init()
      .then(() => {
        setDbInitialized(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if(!dbInitialized) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar style='dark' />
      <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: Colors.primary500 },
          headerTintColor: Colors.gray700,
          contentStyle: { backgroundColor: Colors.gray700 }
        }}
        >
          <Stack.Screen 
            name='AllPlaces'
            component={AllPlaces}
            options={({navigation}) => ({
              title: 'Your Favorite Places',
              headerRight: ({tintColor}) => (
                <IconButton 
                  icon='add'
                  size={24} 
                  color={tintColor} 
                  onPress={() => navigation.navigate('Addplace')}
                />
              ),
            })}
          />
          <Stack.Screen 
            name='Addplace'
            component={AddPlace}
            options={{
              title: 'Add a new place',
            }}
          />
          <Stack.Screen 
            name='Map'
            component={Map}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

