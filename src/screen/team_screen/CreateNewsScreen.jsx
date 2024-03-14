import React, { useState } from 'react';
import { View, TextInput,ToastAndroid, Button, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
// import ImagePicker from 'react-native-image-picker';
import * as ImagePicker from 'expo-image-picker';
import { createNews } from '../../api/news';
// import Toast from 'react-native-toast-message';


const CreateNewsScreen = () => {
    const [newsTitle, setNewsTitle] = useState('');
    const [newsInShort, setNewsInShort] = useState('');
    const [newsInDetail, setNewsInDetail] = useState('');
    const [adminToken, setAdminToken] = useState('');

    const [newsImage, setNewsImage] = useState(null);
    const [image, setImage] = useState(null);

    const [createNewsResp, setCreateNewsResp] = useState(false);

    const handleImageUpload = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        // console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
        // console.log("handleImageUpload");

        // const options = {
        //     title: 'Select Image',
        //     storageOptions: {
        //         skipBackup: true,
        //         path: 'images',
        //     },
        // };

        // ImagePicker.showImagePicker(options, (response) => {
        //     if (response.didCancel) {
        //         console.log('User cancelled image picker');
        //     } else if (response.error) {
        //         console.log('ImagePicker Error: ', response.error);
        //     } else {
        //         const source = { uri: response.uri };
        //         setNewsImage(source.uri);
        //     }
        // });
        // Implement image upload functionality
        // This function should handle image selection from the device
        // and set the selected image to the state variable 'newsImage'
    };




    const handleNewsSubmit = async (e, { news_title, news_in_short, news_in_detail, admin_access_token, created_by}) => {
        console.log("Handle news  Submit");
        console.log({ news_title, news_in_short, news_in_detail, admin_access_token, created_by});

        if (!news_title) {
            return;
        }

        let resp = await createNews({news_title, news_in_short, news_in_detail, admin_access_token, created_by});

        if (resp.success === true) {
            setCreateNewsResp(true);
            ToastAndroid.showWithGravity('News created successfully!', ToastAndroid.SHORT, ToastAndroid.TOP);
            setAdminToken("");
            setNewsTitle("");
            setNewsInDetail("");
            setAdminToken("");
            setNewsInShort("");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={{ marginVertical: 22, color: "blue", fontSize: 22, backgroundColor: "rgba(25,22,255, 0.1)", padding: 10, borderRadius: 3, }}>Create your news  </Text>
            <TextInput
                style={styles.input}
                placeholder="Enter news title"
                value={newsTitle}
                onChangeText={setNewsTitle}
                onChange={(e)=>console.log("newsTitle",newsTitle)}
            />
            <TextInput
                style={styles.input}
                placeholder="Enter news in short"
                value={newsInShort}
                onChangeText={setNewsInShort}
                multiline
            />
            <TextInput
                style={[styles.input2,]}// { height: 100 }
                placeholder="Enter news in detail"
                textAlign='left'
                textAlignVertical='top'
                value={newsInDetail}
                onChangeText={setNewsInDetail}
                multiline
            />


            <TextInput
                style={[styles.input,]}
                placeholder="Admin Token"
                value={adminToken}
                onChangeText={setAdminToken}
            />

            <View style={styles.imageContainer}>
                {/* {newsImage && <Image source={{ uri: newsImage }} style={styles.image} />} */}

                <TouchableOpacity onPress={handleImageUpload} style={{ backgroundColor: "rgba(1,111,111,0.1)", display: "flex", borderColor: "green", justifyContent: "center", alignItems: "center", height: 100, width: "100%", borderWidth: 1, borderRadius: 5, borderStyle: "dashed" }} >
                    <Text style={{ fontSize: 22, color: "blue", }}>Upload Image</Text>
                </TouchableOpacity>

                {/* <Button title="Upload Image" onPress={handleImageUpload} /> */}
            </View>

            <Button title="Submit" onPress={(e) => handleNewsSubmit(e, { news_title: newsTitle, news_in_short: newsInShort, news_in_detail: newsInDetail, admin_access_token: adminToken, created_by: "" })} />

            {
                // createNewsResp && <Toast />
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: "100%",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'start',
        padding: 20,
    },
    input: {
        fontSize: 17,
        marginBottom: 20,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderWidth: 2,
        borderColor: '#b091f7',
        borderRadius: 2,
    },
    input2: {
        fontSize: 17,
        marginBottom: 20,
        paddingVertical: 10,
        paddingHorizontal: 10,
        height: 150,
        borderWidth: 2,
        borderColor: '#b091f7',
        borderRadius: 2,
    },
    imageContainer: {
        // alignItems: 'center',
        marginBottom: 20,
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 10,
        resizeMode: 'cover',
        borderRadius: 5,
    },
});

export default CreateNewsScreen;


