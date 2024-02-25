import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react';
import getAllNews from '../api/news';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Import Expo icons

const ShortNewsComponent = ({ }) => {


    let initialState = {
        "data": [
            {
                "news_title": "",
                "detail_news": "",

            }
        ]

    }

    const [news, setnews] = useState(initialState);

    useEffect(() => {
        const dd = async () => {
            let allnews = await getAllNews();
            setnews(JSON.parse(JSON.stringify(allnews)));
        }
        dd();
    }, []);
    console.log(news);


    // console.log(news.data[0]["news_title"]);

    // console.log(news.data[0].news_title);


    // const currentnews = news ? news.data[0] : false; // need to be changed

    const navigation = useNavigation();

    const goToDetailsScreen = () => {
        navigation.navigate('NewsDetailScreen'); // Replace 'DetailsScreen' with your actual screen name
    };

    return (
        <View style={{ marginHorizontal: 20 }}>


            <Text style={{ paddingTop: 10, fontSize: 22, fontWeight: '600' }} >
                {/* {news.data[0]["news_title"]} */}
                Farmers reject Centre's 5-year MSP contract offer, to resume protest

            </Text>
            <Text style={{ paddingTop: 10, fontSize: 16, }}>Created By:  Satya R Das </Text>
            <Text style={{ paddingTop: 10, fontSize: 17, fontWeight: "300", lineHeight: 28, }}>
                {/* {news.data[0]["detail_news"]} */}
                Farmers on Monday rejected the Centre's proposal to buy pulses, maize and cotton crops from farmers for the next five years at the Minimum Support Price (MSP), farmer leader Jagjit Singh Dallewal said. The farmers further announced that they will resume 'Dilli Chalo' march on February 21. There is nothing in the proposal.Farmers on Monday rejected the Centre's proposal to buy pulses, maize and cotton crops from farmers for the next five years at the Minimum Support Price (MSP), farmer leader Jagjit Singh Dalle.
            </Text>
            <Text style={{ paddingTop: 10, fontSize: 14, }} > Source Credit: XYZ news</Text>

            {/* here we go */}

            <TouchableOpacity style={styles.button} onPress={goToDetailsScreen}>
                <Text style={styles.buttonText}>Details</Text>
                <MaterialCommunityIcons name="arrow-right" size={24} color="green" />
            </TouchableOpacity>


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