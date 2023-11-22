import React, {useState} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
// need to move these out of the repo
import dizzyDish from './assets/dizzyDishNative.png';
import dishes from './assets/dishes';

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  header: {
    fontWeight: '700',
    textTransform: 'uppercase',
    fontSize: 64,
    textShadowColor: '#ff69b4',
    textShadowOffset: {width: 4, height: 4},
    textShadowRadius: 0,
  },
  button: {
    padding: 15,
    marginVertical: 24,
    marginTop: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    textTransform: 'uppercase',
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '600',
  },
});

const Header = () => {
  return (
    <View style={styles.center}>
      <Text style={styles.header}>Dizzy Dish</Text>
    </View>
  );
};

const App = () => {
  const [label, setLabel] = useState('');
  const [spinning, setSpinning] = useState(false);

  const letUsFeast = () => {
    setLabel('');
    setSpinning(true);

    const randomInt = Math.floor(Math.random() * dishes.length);

    // Simulate a delay before stopping the spinning
    setTimeout(() => {
      setSpinning(false);
      setLabel(dishes[randomInt]);
    }, 3000); // Adjust the delay as needed
  };

  return (
    <View style={[styles.center]}>
      <Header />
      <Text>{label}</Text>
      <Image source={dizzyDish} style={{width: 200, height: 200}} />
      <TouchableOpacity
        style={[
          styles.button,
          // eslint-disable-next-line react-native/no-inline-styles
          {
            backgroundColor: spinning ? '#cccccc' : '#ff69b4',
          },
        ]}
        onPress={() => letUsFeast()}
        disabled={spinning} // Disable the button while spinning
      >
        <Text style={styles.buttonText}>What Should we eat?</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
