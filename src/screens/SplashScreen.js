import React,{useEffect} from 'react';
import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import {Colors, Fonts, Images} from '../constants';

const SplashScreen = ({navigation}) => {

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Welcome');
    }, 3000);      
     }, []);

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={Colors.DEFAULT_GREEN}
        translucent
      />
      <Image
       source={Images.PLATE}
       resizeMode="contain"
       style={styles.image} />
      <Text style={styles.titletext}>Food Delivery</Text>
 
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.DEFAULT_GREEN,
  },
  image:{
      height: 100,
      width: 150,
  },
  titletext:{
        fontSize: 32,
        color: Colors.DEFAULT_WHITE,
        fontFamily:Fonts.POPPINS_THIN,
  }
});
