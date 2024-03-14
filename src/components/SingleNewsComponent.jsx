import { StyleSheet, View, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import ShortNewsComponent from './ShortNewsComponent';
import Carousel from 'react-native-snap-carousel';
import { getAllNews } from '../api/news';
import NewsImageContainerInScrollScreen from './NewsImageContainerInScrollScreen';
import ButtonCompo from './ButtonCompo';

const renderItem = ({ item }) => {

  return (
    <View style={{ display: "flex", flex: 1, flexDirection: "column", justifyContent: "space-between" }}>
      <View>
        <NewsImageContainerInScrollScreen item={item} />
        <ShortNewsComponent item={item} />
        {/* buttonOnPress={() => goToDetailsScreen(item)} */}
      </View>
      <ButtonCompo item={item} buttonTitle={"Details"} marginHorizontal={20} marginBottom={20}  />
    </View>
  );
};

const SingleNewsComponent = ({ }) => {

  let initialState = [
    {
      "news_title": "",
      "created_by": "",
      "news_in_short": "",
      "news_in_detail": "",
      "news_image_url": ""
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
      // console.log("all news,", allnews.data);
      setNewsState(newsInitialState.isFinished);
      setNews(JSON.parse(JSON.stringify(allnews.data)));
    }
    dd();
  }, [newsState]);

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
        loop={false}
        vertical // Set vertical property to true
      />
    </>
  )
}

export default SingleNewsComponent

const styles = StyleSheet.create({
  item: {

  }
})