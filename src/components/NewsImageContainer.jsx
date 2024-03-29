import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';


const NewsImageContainer = ({newsImageURL}) => {


    const onPress = () => {
    }

    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Image alt='kjkghj' src={newsImageURL || ""}  style={styles.image} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 0,
        overflow: 'hidden',
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    image: {
        width: '100%',
        aspectRatio: 16 / 9, // Adjust aspect ratio according to your preference
    },
});

export default NewsImageContainer