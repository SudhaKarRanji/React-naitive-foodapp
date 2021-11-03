import React, {useState} from 'react';
import {TouchableOpacity,StyleSheet, Animated,Easing} from 'react-native';

import {Colors} from '../constants';

const containerStyle = (size, isActive) => ({
  backgroundColor:isActive ? Colors.DEFAULT_GREEN: Colors.DEFAULT_GREY,
  height: 32 * size,
  width: 64 * size,
  borderRadius: 32,
  padding: 4 * size,
});

const toggleStyle = (size,animatedvalue) => ({
  height: 24 * size,
  width: 24 * size,
  backgroundColor: Colors.DEFAULT_WHITE,
  borderRadius: 22,
  Transform: [
    {
      translateX: animatedvalue,
    },
  ],
});

const ToggleButton = ({size}) => {
  const [isActive, setisActive] = useState(false);
  const [animatedvalue, setanimatedvalue] = useState(new Animated.Value(0));

  const togglehandler = () => {
    Animated.timing(animatedvalue, {
      toValue: isActive ? 0 : 32 * size,
      duration: 200,
      easing: Easing.bounce,
      delay: 0,
      useNativeDriver: true,
    }).start();
    setisActive(!isActive);
  };
  return (
    <TouchableOpacity
      style={containerStyle(size, isActive)}
      onPress={() => togglehandler()}
      activeOpacity={0.8}>
      <Animated.View style={toggleStyle(size, animatedvalue)} />
    </TouchableOpacity>
  );
};

export default ToggleButton;

