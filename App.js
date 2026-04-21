import { useState } from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';

export default function App() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.center}>
        <Pressable onPress={() => setIsClicked(true)}>
          <Image
            source={
              isClicked
                ? require('./assets/bell-clicked.png')
                : require('./assets/frame-223.png')
            }
            style={styles.image}
          />
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
});