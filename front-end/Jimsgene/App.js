/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import Main from './screens/Main'
import Detail from './screens/Detail'
import { createAppContainer} from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react';
const App = () => {
  const [count, setCount] = useState(0);
  const onPress = () => setCount((prevCount) => prevCount + 1);
  return (
    <>
    <Main/>
    </>
    // <SafeAreaView>
    //     {/* <Detail /> */}
    //     {/* <SafeAreaView style={{flexDirection: 'row'}}>
    //     <Text>{count}</Text>
    //     <TouchableOpacity
    //       style={{width: 100, height: 100, paddingLeft: 30}}
    //       onPress={onPress}>
    //       <Text>Press Here</Text>
    //     </TouchableOpacity>
    //   </SafeAreaView> */}
    //   </SafeAreaView>
      
  );
};

// const App = createStackNavigator(
//   {
//     Main: Main,
//     Detail: Detail
//   },
//   {
//       initialRouteName: 'Detail',
//       navigationOptions: {
//         headerShown: false
//       },
//       defaultNavigationOptions: {
//           headerShown: false
//       }
//   }
// );


// const App = () => {
//   const [count, setCount] = useState(0);
//   const onPress = () => setCount((prevCount) => prevCount + 1);
//   return (
//     // <>
//     //   {/* <Main/> */}
//     //   <Detail />
//     //   {/* <SafeAreaView style={{flexDirection: 'row'}}>
//     //     <Text>{count}</Text>
//     //     <TouchableOpacity
//     //       style={{width: 100, height: 100, paddingLeft: 30}}
//     //       onPress={onPress}>
//     //       <Text>Press Here</Text>
//     //     </TouchableOpacity>
//     //   </SafeAreaView> */}
//     // </>
//   );
// };

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
