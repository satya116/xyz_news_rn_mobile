import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import NewsImageContainer from './NewsImageContainer'
import ShortNewsComponent from './ShortNewsComponent';

// import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { Gesture } from 'react-native-gesture-handler';



import Carousel from 'react-native-snap-carousel';

const renderItem = ({ item }) => {
  return (
    <View style={styles.item}>
      <NewsImageContainer />
      <ShortNewsComponent />
      {/* <SignedIn>
        <Text>You are Signed in</Text>
      </SignedIn> */}
      {/* <SignedOut>
        <Text>You are Signed out</Text>
        </SignedOut> */}
    </View>
  );
};

const SingleNewsComponent = ({ }) => {

  const data = [
    { title: 'Item 1' },
    { title: 'Item 2' },
    { title: 'Item 3' },
    { title: 'Item 4' },
    { title: 'Item 5' },
  ];

  return (
    <>
      <Carousel
        // ItemSeparatorComponent={renderItem2}
        // ListFooterComponent={renderItem2}
        data={data}
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