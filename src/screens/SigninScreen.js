import React, {useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {TextInput} from 'react-native-gesture-handler';
import {Colors, Fonts, Images} from '../constants';

import {Display} from '../utils';
import {ToggleButton} from '../components';

const SigninScreen = ({navigation}) => {
  const [ispasswordshow, setpasswordShow] = useState(false);

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
        <Text style={styles.headerTitle}>Sign In</Text>
      </View>
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.content}>
        Enter the Username and Password and Enjoy the Food
      </Text>
      <View style={styles.inputContainer}>
        <View style={styles.inputsub}>
          <Feather
            name="user"
            size={20}
            color={Colors.DEFAULT_GREY}
            style={{marginRight: 10}}
          />
          <TextInput
            placeholder="Username"
            placeholderTextColor={Colors.DEFAULT_GREY}
            selectionColor={Colors.DEFAULT_GREY}
            style={styles.inputText}
          />
        </View>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.inputsub}>
          <Feather
            name="lock"
            size={20}
            color={Colors.DEFAULT_GREY}
            style={{marginRight: 10}}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry={ispasswordshow ? false : true}
            placeholderTextColor={Colors.DEFAULT_GREY}
            selectionColor={Colors.DEFAULT_GREY}
            style={styles.inputText}
          />
          <Feather
            name={ispasswordshow ? 'eye' : 'eye-off'}
            size={20}
            color={Colors.DEFAULT_GREY}
            style={{marginRight: 10}}
            onPress={() => setpasswordShow(!ispasswordshow)}
          />
        </View>
      </View>
      <Text></Text>
      <View style={styles.fpcontainer}>
        <View style={styles.toggleContainer}>
          <ToggleButton size={0.8}/>
          <Text style={styles.remember}>Remember Me</Text>
        </View>
        <Text style={styles.passwordtext}>Forgot Password</Text>
      </View>
      <TouchableOpacity style={styles.signinButton}>
        <Text style={styles.SigninText}>Sign In</Text>
      </TouchableOpacity>
      <View style={styles.signupContainer}>
        <Text style={styles.accountText}>Dont have an account</Text>
        <Text style={styles.signupText}>Sign Up</Text>
      </View>
      <Text style={styles.orText}>OR</Text>
      <TouchableOpacity style={styles.facebookButton}>
        <View style={styles.socialButtonsContainer}>
          <View style={styles.signinButtonLogoContainer}>
            <Image source={Images.FACEBOOK} style={styles.signinButtonLogo} />
          </View>
          <Text>Connect With FaceBook</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.googleButton}>
        <View style={styles.socialButtonsContainer}>
          <View style={styles.signinButtonLogoContainer}>
            <Image source={Images.GOOGLE} style={styles.signinButtonLogo} />
          </View>
          <Text>Connect With Google</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SigninScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DEFAULT_WHITE,
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
    marginHorizontal: 20,
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
  fpcontainer: {
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  remember: {
    marginLeft: 10,
    fontSize: 12,
    lineHeight: 12 * 1.4,
    color: Colors.DEFAULT_GREY,
    fontFamily: Fonts.POPPINS_MEDIUM,
  },
  passwordtext: {
    fontSize: 12,
    lineHeight: 12 * 1.4,
    color: Colors.DEFAULT_GREEN,
    fontFamily: Fonts.POPPINS_BOLD,
  },
  signinButton: {
    backgroundColor: Colors.DEFAULT_GREEN,
    borderRadius: 8,
    marginHorizontal: 20,
    height: Display.setHeight(6),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  SigninText: {
    fontSize: 18,
    lineHeight: 18 * 1.4,
    color: Colors.DEFAULT_WHITE,
    fontFamily: Fonts.POPPINS_MEDIUM,
  },
  signupContainer: {
    marginHorizontal: 20,
    justifyContent: 'center',
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  accountText: {
    fontSize: 13,
    lineHeight: 13 * 1.4,
    color: Colors.DEFAULT_BLACK,
    fontFamily: Fonts.POPPINS_MEDIUM,
  },
  signupText: {
    fontSize: 13,
    lineHeight: 13 * 1.4,
    color: Colors.DEFAULT_GREEN,
    fontFamily: Fonts.POPPINS_MEDIUM,
    marginLeft: 5,
  },
  orText: {
    fontSize: 15,
    lineHeight: 15 * 1.4,
    color: Colors.DEFAULT_BLACK,
    fontFamily: Fonts.POPPINS_MEDIUM,
    marginLeft: 5,
    alignSelf: 'center',
  },
  facebookButton: {
    backgroundColor: Colors.FABEBOOK_BLUE,
    paddingVertical: 15,
    marginHorizontal: 20,
    borderRadius: 8,
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  googleButton: {
    backgroundColor: Colors.GOOGLE_BLUE,
    paddingVertical: 15,
    marginHorizontal: 20,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signinButtonLogo: {
    height: 18,
    width: 18,
  },
  signinButtonLogoContainer: {
    backgroundColor: Colors.DEFAULT_WHITE,
    padding: 2,
    borderRadius: 3,
    position: 'absolute',
    left: 25,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  socialSigninButtonText: {
    color: Colors.DEFAULT_WHITE,
    fontSize: 13,
    lineHeight: 13 * 1.4,
    fontFamily: Fonts.POPPINS_MEDIUM,
  },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  errorMessage: {
    fontSize: 10,
    lineHeight: 10 * 1.4,
    color: Colors.DEFAULT_RED,
    fontFamily: Fonts.POPPINS_MEDIUM,
    marginHorizontal: 20,
    marginTop: 3,
    marginBottom: 10,
  },
});
