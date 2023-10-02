const apiKey = "1000852ce8b94082b7e8af7a06f3d466"

const fetchUrl = {
    fetchHeadline: `/top-headlines?sources=bbc-news&apiKey=${apiKey}`,
    searchNews: `/everything?`,
    searchEnd: `&sortBy=popularity&apiKey=${apiKey}`,
    fetchMustSee: `top-headlines?country=in&apiKey=${apiKey}`,
    fetchFullStory: `/top-headlines?country=in&category=nation&apiKey=${apiKey}`,
    fetchMostRead: `/top-headlines?country=in&category=general&apiKey=${apiKey}`,
    fetchAroundBBC: `/everything?sources=bbc-news&apiKey=${apiKey}`
}

export default fetchUrl