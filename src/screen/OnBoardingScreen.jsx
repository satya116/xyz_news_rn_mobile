import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Onboarding from 'react-native-onboarding-swiper';
import NewsScrollScreen from './NewsScrollScreen';
import { useNavigation } from '@react-navigation/native';

const OnboardingScreen = () => {
    // const [firstOpen, setFirstOpen] = useState(null);

    const navigation = useNavigation();

    const goToNewsScrollScreen = () => {
        navigation.navigate('NewsScrollScreen'); // Replace 'DetailsScreen' with your actual screen name
    };

    // useEffect(() => {
    //     // Check if the app has been opened before
    //     const checkFirstOpen = async () => {
    //         try {
    //             const value = await AsyncStorage.getItem('@app:firstOpen11');
    //             if (value === null) {
    //                 // App is opened for the first time
    //                 setFirstOpen(true);
    //                 // Set flag to indicate app has been opened
    //                 await AsyncStorage.setItem('@app:firstOpen11', 'true');
    //             } else {
    //                 setFirstOpen(false);
    //             }
    //         } catch (error) {
    //             console.error('Error retrieving data from AsyncStorage:', error);
    //         }
    //     };

    //     checkFirstOpen();
    // }, []);

    //   const handleFinish = async () => {
    //     // Handle onboarding finish
    //     // This could navigate to the next screen or perform any other action
    //     console.log('Onboarding finished');
    //   };

    // if (firstOpen === null) {
    //     // Loading screen
    //     return (
    //         <View>
    //             <Text>Loading...</Text>
    //         </View>
    //     );
    // }

    // if (firstOpen) {
    // Onboarding screen for first open
    return (
        <Onboarding
            onSkip={goToNewsScrollScreen}
            onDone={goToNewsScrollScreen}
            pages={[
                {
                    backgroundColor: '#fff',
                    // image: <Image source={require('./assets/onboarding1.png')} />,
                    title: 'Welcome to the App!',
                    subtitle: 'This is the first screen of the onboarding',
                },
                {
                    backgroundColor: '#fff',
                    // image: <Image source={require('./assets/onboarding2.png')} />,
                    title: 'Second Screen',
                    subtitle: 'This is the second screen of the onboarding',
                },
                {
                    backgroundColor: '#fff',
                    // image: <Image source={require('./assets/onboarding3.png')} />,
                    title: 'Last Screen',
                    subtitle: 'This is the last screen of the onboarding',
                },
            ]}
        />
    );
    // }

    // App has been opened before, don't show onboarding screen
    // return (
    //     <>
    //         <NewsScrollScreen />
    //     </>
    // );
};

export default OnboardingScreen;
