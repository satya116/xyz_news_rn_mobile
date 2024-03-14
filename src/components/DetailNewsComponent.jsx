import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react';
import NewsImageContainer from './NewsImageContainer';
// import ButtonCompo from "./ButtonCompo";
import { useRoute } from '@react-navigation/native';
import ButtonCompo2 from './ButtonCompo2';

const DetailNewsComponent = ({ }) => {

    // const [news, setnews] = useState(initialState);

    const route = useRoute();

    const newsItem = route.params;
    console.log("let see", newsItem);

    return (
        <>
            <ScrollView showsVerticalScrollIndicator={false}>
                <NewsImageContainer newsImageURL={newsItem?.news_image_url} />
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


                <View style={{padding: 20}}>
                    <Text>Team Corner</Text>
                    <ButtonCompo2 buttonTitle="Join us" />

                    {/* <ButtonCompo2 /> */}
                </View>


            </ScrollView>
        </>
    )
}

export default DetailNewsComponent

const styles = StyleSheet.create({});