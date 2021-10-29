import React from 'react';
import {FlatList, StatusBar, StyleSheet, Text, View} from 'react-native';
import WelcomeCard from '../components/WelcomeCard';
import {Colors, General} from '../constants';
import {Display} from '../utils';

const Pagination = () => {
  return (
    <View style={styles.pagecontainer}>
      <View style={styles.page} />
      <View style={styles.page} />
      <View style={styles.page} />
    </View>
  );
};

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={Colors.DEFAULT_WHITE}
        barstyle="dark-content"
        transclucent
      />
      <View styel={styles.welcomecontainer}>
        <FlatList
          data={General.WELCOME_CONTENTS}
          keyExtractor={item => item.title}
          horizontal
          pagingEnabled
          overScrollMode="never"
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => <WelcomeCard {...item} />}
        />
      </View>
      <Pagination />
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', 
    backgroundColor: Colors.DEFAULT_WHITE,
  },
  welcomecontainer: {
    height: Display.setHeight(60),
  },
  page: {
    height: 8,
    width: 15,
    backgroundColor: Colors.DEFAULT_GREEN,
    borderRadius: 32,
    marginHorizontal: 5,
  },
  pagecontainer: {
    flexDirection: 'row',
  },
});
