import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';


const NewsImageContainer = () => {

    const onPress = () => {

    }

    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Image alt='kjkghj' src={"https://t3.ftcdn.net/jpg/02/65/18/30/360_F_265183061_NkulfPZgRxbNg3rvYSNGGwi0iD7qbmOp.jpg"}  style={styles.image} />
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