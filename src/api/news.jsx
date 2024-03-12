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

    // console.log("Getting all news");

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


const createNews = async () => {

    console.log("Handle Submit 2");


    let createNewsResponse
    let newsData = {
        "news_title": "OKKKK discover new species of deep-sea jellyfish",
        "created_by": "OKKKK Team at Oceanic Institute",
        "news_in_short": "OKKKK of researchers exploring the Mariana Trench have discovered a new species of deep-sea jellyfish. This remarkable find sheds light on the biodiversity thriving in one of the deepest parts of the ocean. The jellyfish, tentatively named 'Mariana Medusa,' possesses unique bioluminescent properties and distinct morphology not observed in previously known species.",
        "news_in_detail": "OKKKK of researchers exploring the Mariana Trench have discovered a new species of deep-sea jellyfish. This remarkable find sheds light on the biodiversity thriving in one of the deepest parts of the ocean. The jellyfish, tentatively named 'Mariana Medusa,' possesses unique bioluminescent properties and distinct morphology not observed in previously known species. The discovery underscores the importance of further exploration and conservation efforts in understanding and preserving the delicate ecosystems of the deep sea.The Mariana Trench, located in the western Pacific Ocean, is known as the deepest oceanic trench on Earth. It plunges to depths exceeding 10,000 meters (36,000 feet) and remains one of the least explored areas of the ocean. The discovery of the new jellyfish species highlights the diverse and often mysterious life forms that inhabit these extreme environments. Scientists believe that understanding the biodiversity of the deep sea is crucial for unraveling its ecological significance and potential contributions to medicine, biotechnology, and environmental conservation.The 'Mariana Medusa' jellyfish exhibits striking bioluminescence, emitting a soft blue-green glow that illuminates the dark depths of the trench. This adaptation likely serves multiple purposes, including communication, camouflage, and prey attraction. Additionally, the jellyfish's unique morphology, with elongated tentacles and translucent bell-shaped body, sets it apart from other known species in the region. Further research is underway to analyze the genetic makeup and ecological role of the newly discovered jellyfish, offering exciting opportunities for marine biologists and conservationists."
    }

    try {
        createNewsResponse = await axios.post(`${SERVER_URL}/api/team/create-news`, newsData);
        // console.log("Data retrieved", allnews);
        return createNewsResponse.data;

    } catch (error) {
        console.log("Something went wrong", error);
    }
    // return allnews.data;
}

export {getAllNews, createNews};