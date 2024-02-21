import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react';
import getAllNews from '../api/news';

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

    return (
        <View>


            <Text style={{ padding: 10, fontSize: 22, fontWeight: '600' }} >{news.data[0]["news_title"]}</Text>
            <Text style={{ padding: 10, fontSize: 16, }}>Created By:  Satya R Das </Text>
            <Text style={{ padding: 10, fontSize: 17, lineHeight: 28, }}>{news.data[0]["detail_news"]}</Text>
            <Text style={{ padding: 10, fontSize: 14, }} > Source Credit: XYZ news</Text>


        </View>
    )
}

export default ShortNewsComponent

const styles = StyleSheet.create({});