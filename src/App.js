import React, { useState, useEffect } from 'react';
import MainArticle from './components/mainArticle';
import Header from './components/header';
import axios from 'axios';
import { API_KEY } from './token';
import './App.css';

const App = () => {
  const [articleData, setArticleData] = useState([]);
  const [articleDup, setArticleDup] = useState([]);

  useEffect(() => {
    fetchArticleData();
  }, []);

  const fetchArticleData = async () => {
    const { data } = await axios.get(
      `https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=${API_KEY}`
    );
    setArticleData(data.results);
    setArticleDup(data.results);
  };

  const handleSearch = (data) => {
    if (data) {
      let searchedData = articleDup.filter((a) =>
        a.byline.toLowerCase().includes(data.toLowerCase())
      );
      setArticleData(searchedData);
    } else {
      setArticleData(articleDup);
    }
  };

  return (
    <>
      <Header searchData={handleSearch} />
      <MainArticle articleData={articleData} />
    </>
  );
};

export default App;
