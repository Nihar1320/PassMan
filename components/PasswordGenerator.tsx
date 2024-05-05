import { View, Text, ScrollView, StyleSheet, Image } from 'react-native'
import React from 'react'

const PasswordGenerator = () => {
    return (
        <View style={styles.parentContainer}>
            <View style={styles.mainTextContainer}>
                <Image style={styles.logoImage} source={require('../assets/logo.png')} />
            </View>
            <View style={styles.generatePasswordContainer}>
              <Text style={styles.generatePasswordText}>Generate a password</Text>
            </View>
            <View style={styles.passOptionsContainer}>
              <Text>Hi</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    parentContainer: {
        minHeight: 120,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainTextContainer: {
        backgroundColor: '#0059e7',
        height: 100,
        width: 330,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        marginHorizontal: 10,
        borderRadius: 10
    },
    logoImage : {
        height: 60,
        width: 250,
        resizeMode: 'cover'
    },
    passOptionsContainer : {
        height: 100,
        width: 330,
        backgroundColor: '#112240',
        borderRadius: 10
    },
    generatePasswordContainer : {
        height: 50,
        width: 330,
        marginVertical: 20,
        marginHorizontal: 10,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    generatePasswordText : {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 25
    }
})

export default PasswordGenerator