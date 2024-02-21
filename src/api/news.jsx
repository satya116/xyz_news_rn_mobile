import axios from 'axios';


const getAllNews = async () => {
    // axios.get('http://192.168.29.149:5000/api/news')
    //     .then(response => {
    //         setNews(response.data);
    //         setLoading(false);
    //     })
    //     .catch(error => {
    //         console.error('Error fetching news:', error);
    //         setLoading(false);
    //     });

    let allnews;
    try {
        allnews = await axios.get('http://192.168.29.149:5000/api/news');
        console.log("Data retrieved", allnews.data);

    } catch (error) {

        console.log("Something went wrong", error);

    }
    return allnews.data;
}

export default getAllNews;