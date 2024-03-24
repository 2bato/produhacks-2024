import React from "react";
import News from "./news";

interface Article {
  uuid: string;
  title: string;
  description: string;
  keywords: string;
  snippet: string;
  url: string;
  image_url: string;
  language: string;
  published_at: string;
  source: string;
  categories: string[];
  locale: string;
}

const NewsDisplay: React.FC = async () => {
  let newsss = new News();
  let storedArticles: Article[] = await newsss.getNews();

  return (
    <div>
      {storedArticles.map((article, index) => (
        <div key={index}>
          <h2>{article.title}</h2>
          <p>{article.snippet}</p>
        </div>
      ))}
    </div>
  );
};

export default NewsDisplay;
