export const FETCH_NEWS_REQUEST = "FETCH_NEWS_REQUEST";
export const FETCH_NEWS_ERROR = "FETCH_NEWS_ERROR";
export const FETCH_NEWS_SUCCESS = "FETCH_NEWS_SUCCESS";

// action creators
export const fetchNewsRequest = () => {
  return { type: FETCH_NEWS_REQUEST };
};

export const fetchNewsSuccess = (news) => {
  return { type: FETCH_NEWS_REQUEST, payload: news };
};

export const fetchNewsFailure = (error) => {
  return { type: FETCH_NEWS_REQUEST, payload: error };
};

export const fetchNews = () => {
  return (dispatch) => {
    dispatch(fetchNewsRequest());
    fetch(
      "https://newsapi.org/v2/everything?q=tesla&from=2024-09-29&sortBy=publishedAt&apiKey=c12dd4e5462d4cf89646755d0197efdb"
    )
      .then((res) => res.json())
      .then((data) => {
        const news = data.articles.map((article) => {
          return {
            title: article.title,
            url: article.url,
            description: article.description,
          };
        });

        console.log(news, "kkkk");
        dispatch(fetchNewsSuccess(news));
      })
      .catch((error) => dispatch(fetchNewsFailure(error.message)));
  };
};
