import React from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  useColorScheme,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import PasswordGenerator from './components/PasswordGenerator';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const windowHeight = Dimensions.get('window').height;

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#0f1b33' : '#0f1b33',
    height: windowHeight
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView>
        <PasswordGenerator />
      </ScrollView>
    </SafeAreaView>
  );
}


export default App;
