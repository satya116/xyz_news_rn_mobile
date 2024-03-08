import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react';
import NewsImageContainer from './NewsImageContainer';
import ButtonCompo from "./ButtonCompo";
import { useRoute } from '@react-navigation/native';

const DetailNewsComponent = ({ }) => {

    let initialState = {
        "data": [
            {
                "news_title": "",
                "detail_news": "",
            }
        ]
    }

    // const [news, setnews] = useState(initialState);

    const route = useRoute();

    const newsItem = route.params;
    console.log("let see", newsItem);


    return (
        <>
            <ScrollView showsVerticalScrollIndicator={false}>
                <NewsImageContainer />
                <View style={{ marginHorizontal: 20 }}>
                    <Text style={{ paddingTop: 10, fontSize: 22, fontWeight: '600' }} >
                        {/* {news.data[0]["news_title"]} */}
                        {newsItem.news_title}

                    </Text>
                    <Text style={{ paddingTop: 10, fontSize: 16, }}>Author:  {newsItem.created_by} </Text>
                    <Text style={{ paddingTop: 10, fontSize: 17, fontWeight: "300", lineHeight: 28, }}>
                        {/* {news.data[0]["detail_news"]} */}
                        {newsItem.news_in_detail}
                    </Text>
                    {/* <Text style={{ paddingTop: 10, fontSize: 14, }} > Source Credit: XYZ news</Text> */}
                </View>






                <View>
                    <Text>Team Corner</Text>
                    <ButtonCompo buttonTitle="Join us" />

                </View>
            </ScrollView>
        </>
    )
}

export default DetailNewsComponent

const styles = StyleSheet.create({});