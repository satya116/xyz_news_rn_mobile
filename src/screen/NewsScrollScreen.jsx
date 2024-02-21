import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import SingleNewsComponent from '../components/SingleNewsComponent';



const NewsScrollScreen = () => {

    // const [loading, setLoading] = useState(true);
    // const [news, setNews] = useState([]);

    // useEffect(() => {

    // }, []);

    // console.log(news);

    return (
        <View>
            <SingleNewsComponent />
        </View>
    )
}

export default NewsScrollScreen

const styles = StyleSheet.create({})