import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NewsImageContainer from './NewsImageContainer'
import ShortNewsComponent from './ShortNewsComponent';

import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";


const SingleNewsComponent = ({}) => {
  return (
    <View>
      <NewsImageContainer  />
      <ShortNewsComponent  />
      <SignedIn>
          <Text>You are Signed in</Text>
        </SignedIn>
        <SignedOut>
        <Text>You are Signed out</Text>
        </SignedOut>
    </View>
  )
}

export default SingleNewsComponent

const styles = StyleSheet.create({})