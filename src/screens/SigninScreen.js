import React from 'react';
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
import {Colors, Fonts} from '../constants';

import {Display} from '../utils';

const SigninScreen = ({navigation}) => {
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
          <Feather name="user" size={20} color={Colors.DEFAULT_GREY} style={{marginRight:10}}/>
          <TextInput placeholder="Username" placeholderTextColor={Colors.DEFAULT_GREY} selectionColor={Colors.DEFAULT_GREY}
          style={styles.inputText}/>
        </View>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.inputsub}>
          <Feather />
          <TextInput />
          <Feather />
        </View>
      </View>
      <Text></Text>
      <View>
        <View>
          <Text>Remember Me</Text>
        </View>
        <Text>Forgot Password</Text>
      </View>
      <TouchableOpacity>
        <Text>Sign In</Text>
      </TouchableOpacity>
      <View>
        <Text>Dont have an acoount</Text>
        <Text>Sign Up</Text>
      </View>
      <Text>OR</Text>
      <TouchableOpacity>
        <View>
          <View>
            <Image />
          </View>
          <Text>Connect With FaceBook</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View>
          <View>
            <Image />
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
  inputText:{
      fontSize:18,
      textAlignVertical:'center',
      padding: 0,
      height: Display.setHeight(6),
      color: Colors.DEFAULT_BLACK,
      flex: 1,
      
  }
});
