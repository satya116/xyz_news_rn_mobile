import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ButtonCompo = ({buttonTitle, buttonIcon, buttonBgColor, buttonBorderColor, buttonOnPress}) => {
    const navigation = useNavigation();

    const goToDetailsScreen = () => {
        navigation.navigate('CreateNewsScreen'); // Replace 'DetailsScreen' with your actual screen name
    };

    return (
        <TouchableOpacity style={styles.button} onPress={goToDetailsScreen}>
            <Text style={styles.buttonText}>{buttonTitle}</Text>
            <MaterialCommunityIcons name="arrow-right" size={24} color="green" />
        </TouchableOpacity>
    )
}

export default ButtonCompo

const styles = StyleSheet.create({
    button: {
        marginTop: 10,
        borderWidth: 2,
        borderColor: 'green',
        textAlign: 'center',
        padding: 12,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
    },
    buttonText: {
        color: "green",
        fontSize: 18,
        fontWeight: 'bold',
        marginRight: 5,
    },
})