import React, { useEffect, useState } from "react";
import Axios from "axios";
const News = () => {
  const axios = require("axios");
  const [isLoading, setIsLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const demoImage = "";
  const options = {
    method: "GET",
    url: "https://bing-news-search1.p.rapidapi.com/news/search",
    params: {
      q: "Health",
      freshness: "Day",
      textFormat: "Raw",
      safeSearch: "Off",
    },
    headers: {
      "X-BingApis-SDK": "true",
      "X-RapidAPI-Key": "7036c83cdfmsh7fcdb6c7d786bf4p12f8a4jsn917cb3010078",
      "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
    },
  };

  useEffect(() => {
    async function fetch() {
      setIsLoading(true);
      try {
        const response = await axios.request(options);
        console.log(response.data.value);
        setArticles(response.data.value);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    fetch();
  }, []);
  if (isLoading) return "Loading....";
  return (
    <div className="news-card">
      {articles.map((news, index) => (
        <div className="news-card-row">
          <a href={news && news.url} target="_blank">
            <div key={index} style={{ display: "flex" }}>
              <img
                src={
                  (news.image && news.image.thumbnail.contentUrl) || demoImage
                }
                alt="image"
                style={{ width: 100, height: 100 }}
              ></img>
              <div style={{ marginLeft: 5 }}>
                <h5 style={{ width: "95%" }}>{news.name}</h5>
                <p style={{ width: "95%" }}>{news.description}</p>
                <div style={{ display: "inline" }}>
                  <p style={{ width: "95%" }}>
                    <img
                      src={
                        (news.provider[0].image &&
                          news.provider[0].image.thumbnail.contentUrl) ||
                        demoImage
                      }
                      alt="image"
                      style={{ width: 20, height: 20 ,marginRight:5,marginBottom:2}}
                    ></img>
                    {news.provider[0].name}
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default News;
