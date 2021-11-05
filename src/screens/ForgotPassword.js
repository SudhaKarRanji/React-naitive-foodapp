import React from 'react';
import {StyleSheet, Text, View, StatusBar,TextInput,TouchableOpacity,ToastAndroid} from 'react-native';
import {Colors, Fonts} from '../constants';
import {Display} from '../utils';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ForgotPassword = ({navigation}) => {
    const buttonalert = () => {
        ToastAndroid.show("A pikachu appeared nearby !", ToastAndroid.SHORT);
      };
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Colors.DEFAULT_GREEN}
        translucent
      />
      <View style={styles.headerContainer}>
        <Ionicons
          name="chevron-back-outline"
          size={30}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.headerTitle}>Forgot Password</Text>
      </View>
      <Text style={styles.title}>Forgot Password</Text>
      <Text style={styles.content}>
        Enter your email address below and we will send you a link to reset
        your password.
      </Text>
      <View style={styles.inputContainer}>
          <View style={styles.inputsub}>
            <Ionicons 
            name="key" 
            size={30}
            color={Colors.DEFAULT_GREY}
            style={{marginRight: 10}} />
            <TextInput
               placeholder="Email Address"
               placeholderTextColor={Colors.DEFAULT_GREY}
               selectionColor={Colors.DEFAULT_GREY}
               style={styles.inputText}
            />
          </View>
      </View>
      <TouchableOpacity style={styles.signinButton} onPress={() => {buttonalert}}>
        <Text style={styles.SigninText}>Forgot Password</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: Colors.DEFAULT_WHITE,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: Fonts.POPPINS_MEDIUM,
    lineHeight: 20 * 1.4,
    width: Display.setWidth(80),
    textAlign: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: Fonts.POPPINS_MEDIUM,
    lineHeight: 20 * 1.4,
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 10,
  },
  content: {
    fontSize: 20,
    fontFamily: Fonts.POPPINS_MEDIUM,
    marginTop: 10,
    marginBottom: 20,
  },
  inputContainer: {
    backgroundColor: Colors.LIGHT_GREY,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    borderRadius: 8,
    borderWidth: 0.5,
    marginTop: 5,
    borderColor: Colors.LIGHT_GREY2,
    justifyContent: 'center',
  },
  inputsub: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputText: {
    fontSize: 18,
    textAlignVertical: 'center',
    padding: 0,
    height: Display.setHeight(6),
    color: Colors.DEFAULT_BLACK,
    flex: 1,
  },
  signinButton: {
    backgroundColor: Colors.DEFAULT_GREEN,
    borderRadius: 8,
    marginHorizontal: 20,
    height: Display.setHeight(6),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom:10,
  },
  SigninText: {
    fontSize: 18,
    lineHeight: 18 * 1.4,
    color: Colors.DEFAULT_WHITE,
    fontFamily: Fonts.POPPINS_MEDIUM,
  },
});
