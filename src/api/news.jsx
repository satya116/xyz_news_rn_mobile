import axios from 'axios';

let SERVER_URL = "";
let isProduction = true;

if (isProduction) {
    // SERVER_URL = "http://43.204.217.178";
    SERVER_URL = "https://www.insightassam.online";
} else {
    SERVER_URL = "http://192.168.29.149:5000"
}


const getAllNews = async () => {
    let allnews;
    try {
        allnews = await axios.get(`${SERVER_URL}/api/news`);
        // console.log("Data retrieved", allnews);
        return allnews.data;

    } catch (error) {

        console.log("Something went wrong", error);

    }
    return allnews.data;
}

export default getAllNews;