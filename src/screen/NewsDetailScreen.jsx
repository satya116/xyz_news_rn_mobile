import { SafeAreaView, StyleSheet, StatusBar, Text, View } from 'react-native'
import React from 'react'
import NewsImageContainer from '../components/NewsImageContainer'
import DetailNewsComponent from '../components/DetailNewsComponent'

const NewsDetailScreen = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <DetailNewsComponent />
    </SafeAreaView>
  )
}

export default NewsDetailScreen

const styles = StyleSheet.create({})