import * as React from 'react';
import {NavigationContainer, ParamListBase} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {
  Pressable,
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import {useCallback, useState} from 'react';

type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};
type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
type DetailsScreenProps = NativeStackScreenProps<ParamListBase, 'Details'>;

function HomeScreen({navigation}: HomeScreenProps) {
  const onClick = useCallback(() => {
    navigation.navigate('Details');
  }, [navigation]);

  return (
    <>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'red',
        }}>
        <Pressable
          style={{
            paddingHorizontal: 30,
            paddingVertical: 30,
            backgroundColor: 'blue',
          }}
          onPress={onClick}>
          <Text>Home Screen</Text>
        </Pressable>
      </View>
      <View style={{flex: 1, backgroundColor: 'orange'}}>
        <Text>Second</Text>
      </View>
    </>
  );
}

function DetailsScreen({navigation}: DetailsScreenProps) {
  const onClick = useCallback(() => {
    navigation.navigate('Home');
  }, [navigation]);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-start'}}>
      <Pressable onPress={onClick}>
        <Text>Details Screen</Text>
      </Pressable>
    </View>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();
function App() {
  const [isModal, setIsmodal] = useState(true);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Overview'}}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{title: 'Detail'}}
        />
      </Stack.Navigator>
      {isModal && (
        <Pressable onPress={() => setIsmodal(false)} style={styles.modal}>
          <View style={styles.modalInner}>
            <View style={{flex: 1, backgroundColor: 'lightblue'}}>
              <Text>Hello</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Pressable
                style={{
                  flex: 1,
                  alignItems: 'center',
                  backgroundColor: 'blue',
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                  marginRight: 10,
                }}>
                <Text>네</Text>
              </Pressable>
              <Pressable
                style={{
                  flex: 1,
                  alignItems: 'center',
                  backgroundColor: 'grey',
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                }}>
                <Text>아니오</Text>
              </Pressable>
            </View>
          </View>
        </Pressable>
      )}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  modal: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.5)',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
  modalInner: {
    position: 'absolute',
    backgroundColor: 'white',
    top: 20,
    bottom: 20,
    right: 20,
    left: 20,
    borderRadius: 20,
    padding: 20,
  },
});

export default App;
