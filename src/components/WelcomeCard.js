import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Fonts, Images } from '../constants'
import { Display } from '../utils'

const WelcomeCard = ({title,image,content}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={Images[image]} resizeMode="contain"/>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.content}>{content}</Text>
        </View>
    )
}

export default WelcomeCard;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff', 
        alignItems:'center',
        justifyContent:'center',
        width: Display.setWidth(100)

    },
    title:{
        fontSize:20,
        fontFamily:Fonts.POPPINS_BOLD,
    },
    image:{
        height: Display.setHeight(30),
        width: Display.setWidth(60),
    },
    content:{
        fontSize:18,
        fontFamily:Fonts.POPPINS_LIGHT,
        textAlign:'center',
        marginHorizontal:20,
        
    },
})
