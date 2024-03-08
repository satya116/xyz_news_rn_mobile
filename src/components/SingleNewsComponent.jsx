import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import NewsImageContainer from './NewsImageContainer'
import ShortNewsComponent from './ShortNewsComponent';

// import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
// import { Gesture } from 'react-native-gesture-handler';



import Carousel from 'react-native-snap-carousel';
import getAllNews from '../api/news';

const renderItem = ({ item }) => {
  console.log("renderItem", item);
  return (
    <View style={styles.item}>
      <NewsImageContainer item={item} />
      <ShortNewsComponent item={item} />
      {/* <SignedIn>
        <Text>You are Signed in</Text>
      </SignedIn> */}
      {/* <SignedOut>
        <Text>You are Signed out</Text>
        </SignedOut> */}
      {/* details button should be here */}
    </View>
  );
};

const SingleNewsComponent = ({ }) => {

  /////

  let initialState = [
    {
      "news_title": "",
      "created_by": "",
      "news_in_short": "",
      "news_in_detail": ""
    }
  ]


  const newsInitialState = {
    isLoading: "LOADING",
    isFailed: "FAILED",
    isFinished: "FINISHED",
  }

  const [news, setNews] = useState(initialState);
  const [newsState, setNewsState] = useState(newsInitialState.isLoading);

  useEffect(() => {
    const dd = async () => {
      let allnews = await getAllNews();
      console.log("all news,", allnews.data);
      setNews(JSON.parse(JSON.stringify(allnews.data)));
    }
    dd();
  }, []);

  return (
    <>
      <Carousel
        // ItemSeparatorComponent={renderItem2}
        // ListFooterComponent={renderItem2}
        data={news}
        renderItem={renderItem}
        sliderHeight={Dimensions.get('window').height} // Adjust sliderHeight to fit the screen
        itemHeight={Dimensions.get('window').height} // Customize item height as needed
        layout={'default'}
        loop
        vertical // Set vertical property to true
      />
    </>
  )
}

export default SingleNewsComponent

const styles = StyleSheet.create({})