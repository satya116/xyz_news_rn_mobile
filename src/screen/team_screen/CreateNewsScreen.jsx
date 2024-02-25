import React, { useState } from 'react';
import { View, TextInput, Button, Image, StyleSheet, Text } from 'react-native';
// import ImagePicker from 'react-native-image-picker';
import * as ImagePicker from 'expo-image-picker';

const CreateNewsScreen = () => {
    const [newsTitle, setNewsTitle] = useState('');
    const [newsInShort, setNewsInShort] = useState('');
    const [newsInDetail, setNewsInDetail] = useState('');
    const [newsImage, setNewsImage] = useState(null);
    const [image, setImage] = useState(null);

    const handleImageUpload = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

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

    const handleSubmit = () => {
        // Implement submission logic
        // This function should submit the news data (title, short description, detailed description, and image)
        // to your backend server or perform any other required action
    };

    return (
        <View style={styles.container}>
            <Text style={{ marginVertical: 22, fontSize: 25, fontWeight: "500"}}>Create your news here  </Text>
            <TextInput
                style={styles.input}
                placeholder="Enter news title"
                value={newsTitle}
                onChangeText={setNewsTitle}
            />
            <TextInput
                style={styles.input}
                placeholder="Enter news in short"
                value={newsInShort}
                onChangeText={setNewsInShort}
                multiline
            />
            <TextInput
                style={[styles.input, { height: 100 }]}
                placeholder="Enter news in detail"
                value={newsInDetail}
                onChangeText={setNewsInDetail}
                multiline
            />




            <View style={styles.imageContainer}>
                {/* {newsImage && <Image source={{ uri: newsImage }} style={styles.image} />} */}
                <Button title="Upload Image" onPress={handleImageUpload} />
            </View>
            <Button title="Submit" onPress={handleSubmit} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: "100%",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'start',
        padding: 20,
    },
    input: {
        marginBottom: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
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


