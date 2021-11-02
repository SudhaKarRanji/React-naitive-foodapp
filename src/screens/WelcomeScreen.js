import React, {useState, useRef} from 'react';
import {FlatList, StatusBar, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {WelcomeCard, Separator} from '../components';
import {Colors, Fonts, General} from '../constants';
import {Display} from '../utils';

const activeStyle = isActive =>
  isActive
    ? styles.page
    : {...styles.page, backgroundColor: Colors.DEFAULT_GREY};

const Pagination = ({index}) => {
  return (
    <View style={styles.pagecontainer}>
    {[...Array(General.WELCOME_CONTENTS.length).keys()].map((_, i) =>
      i === index ? (
        <View style={activeStyle(true)} key={i} />
      ) : (
        <View style={activeStyle(false)} key={i} />
      ),
    )}
  </View>
  );
};

const WelcomeScreen = ({navigation}) => {
  const [Welcomeindex, setwelcomeindex] = useState(0);
  const WelcomeList = useRef();
  const onViewRef = useRef(({changed}) => {
    setwelcomeindex(changed[0].index);
  });

  const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 50});

  const pagescroll = () => {
    WelcomeList.current.scrollToIndex({
     
      index: Welcomeindex < 2 ? Welcomeindex + 1 : Welcomeindex,
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={Colors.DEFAULT_WHITE}
        barstyle="dark-content"
        transclucent
      />

      <View style={styles.welcomecontainer}>
        <FlatList
          ref={WelcomeList}
          data={General.WELCOME_CONTENTS}
          keyExtractor={item => item.title}
          horizontal
          pagingEnabled
          viewabilityConfig={viewConfigRef.current}
          onViewableItemsChanged={onViewRef.current}
          overScrollMode="never"
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => <WelcomeCard {...item} />}
        />
      </View>
      <Pagination index={Welcomeindex}/>
      {Welcomeindex === 2 ? (
        <TouchableOpacity style={styles.startbutton} activeOpacity={0.8} 
        onPress={() => navigation.navigate('Signin')}
        >
          <Text style={styles.startText}>
            Get Started
          </Text>
        </TouchableOpacity>
      ):(
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={{marginLeft: 10}}
          activeOpacity={0.8}
          onPress={() => WelcomeList.current.scrollToEnd()}>
          <Text style={styles.buttonText}>SKIP</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={() => pagescroll()}>
          <Text style={styles.buttonText}>NEXT</Text>
        </TouchableOpacity>
      </View>
      )}

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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Display.setWidth(90),
    alignItems: 'center',
    marginTop:Display.setHeight(20),
  },
  buttonText: {
    fontSize: 16,
    fontFamily: Fonts.POPPINS_BOLD,
    lineHeight: 16 * 1.4,
  },
  button: {
    backgroundColor: Colors.LIGHT_GREEN,
    paddingVertical: 20,
    paddingHorizontal: 11,
    borderRadius: 32,
    

  },
  startbutton: {
    backgroundColor: Colors.DEFAULT_GREEN,
    paddingVertical:5,
    paddingHorizontal:40,
    borderRadius:8,
   justifyContent:'center',
   alignItems:'center',
   marginTop:Display.setHeight(20),
   elevation:2,
   },
   startText:{
    fontSize:20,
    fontFamily:Fonts.POPPINS_BOLD,
    color:Colors.DEFAULT_WHITE,
    lineHeight:20*1.4,
   },
});
