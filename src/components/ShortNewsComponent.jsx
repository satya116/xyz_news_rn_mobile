import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Import Expo icons
// import axios from 'axios';

const ShortNewsComponent = ({ item }) => {

    const navigation = useNavigation();

    const goToDetailsScreen = (item) => {
        navigation.navigate('NewsDetailScreen', item); // Replace 'DetailsScreen' with your actual screen name
    };

    // const [content, setContent] = useState("");

    // useEffect(() => {
    //     const getSomeThing = async () => {
    //         resp = await axios.get("https://jsonplaceholder.org/posts/1");

    //         console.log("Got some", resp.data);
    //         setContent(resp.data.slug)
    //     }
    //     getSomeThing();

    // }, []);

    return (
        <View style={{ marginHorizontal: 20 }}>

            <Text style={{ paddingTop: 10, fontSize: 22, fontWeight: '600' }} >
                {item.news_title}
            </Text>
            <Text style={{ paddingTop: 10, fontSize: 16, }}>Author:  {item.created_by} </Text>
            <Text style={{ paddingTop: 10, fontSize: 17, fontWeight: "300", lineHeight: 28, }}>

                {/* Satya {content} */}
                {item.news_in_short}


                {/* Farmers on Monday rejected the Centre's proposal to buy pulses, maize and cotton crops from farmers for the next five years at the Minimum Support Price (MSP), farmer leader Jagjit Singh Dallewal said. The farmers further announced that they will resume 'Dilli Chalo' march on February 21. There is nothing in the proposal.Farmers on Monday rejected the Centre's proposal to buy pulses, maize and cotton crops from farmers for the next five years at the Minimum Support Price (MSP), farmer leader Jagjit Singh Dalle. */}
            </Text>
            {/* <Text style={{ paddingTop: 10, fontSize: 14, }} > Source Credit: XYZ news</Text> */}

            {/* <TouchableOpacity style={styles.button} onPress={() => goToDetailsScreen(item)}>
                <Text style={styles.buttonText}>Details</Text>
                <MaterialCommunityIcons name="arrow-right" size={24} color="green" />
            </TouchableOpacity> */}
        </View>
    )
}

export default ShortNewsComponent

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
});