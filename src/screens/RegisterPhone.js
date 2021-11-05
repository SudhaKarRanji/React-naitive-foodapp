import React,{useState} from 'react'
import { StyleSheet, Text, View,StatusBar } from 'react-native'
import { Colors,Fonts } from '../constants'
import { Display } from '../utils'
import PhoneInput from 'react-native-phone-input'

import Ionicons from 'react-native-vector-icons/Ionicons'

const RegisterPhone = () => {
    
    const onPressFlag=(e)=>{
        e.countryPicker.openModal()
    };
    
  const  selectCountry=(country)=>{
        phone.selectCountry(country.cca2.toLowerCase())
        setState({cca2: country.cca2})
    };
    
    // Updates the Flag on change
  const  onPhoneInputChange = (value, iso2) => {
        const newState = {
            phoneInputValue: value,
        };
    
        if (iso2) {
            newState.countryCode = iso2?.toUpperCase();
        }
    
        this.setState(newState);
    }
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
        <Text style={styles.headerTitle}>Register</Text>
    </View>
    <Text style={styles.title}>Register Mobile</Text>
      <Text style={styles.content}>
        Enter your mobile number to register
      </Text>
      <View>
      <PhoneInput
                ref={(ref) => { phone = ref; }}
                onPressFlag={this.onPressFlag}
                initialCountry={'us'}
                initialValue="13178675309"
                textProps={{
                    placeholder: 'Enter a phone number...'
                }}
            />

            <ModalPickerImage
                ref={(ref) => { myCountryPicker = ref; }}
                data={this.state.pickerData}
                onChange={(country)=>{ selectCountry(country) }}
                cancelText='Cancel'
            />
      </View>


    </View>
    )
}

export default RegisterPhone

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
        marginHorizontal: 10,
      },
      content: {
        fontSize: 20,
        fontFamily: Fonts.POPPINS_MEDIUM,
        marginTop: 10,
        marginBottom: 20,
        textAlign:'left',
      },
})
