import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

const SplashScreen = ({ navigation }) => {


    useEffect(() => {
        // Simulate a delay before transitioning to the main screen
        const timer = setTimeout(() => {
            navigation.replace('NewsScrollScreen'); // Replace SplashScreen with your main screen name
        }, 2000); // Adjust the delay time as needed (in milliseconds)

        return () => clearTimeout(timer); // Clear the timeout if component unmounts
    }, [navigation]);

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#7C00D1" }}>
            <Text style={{ fontSize: 30, fontWeight: "700", color: "white", }}>Insight Assam</Text>
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({})