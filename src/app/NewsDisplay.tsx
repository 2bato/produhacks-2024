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
          <h2
            className={`text-xl ${
              article.keywords === "wildcard" ? "text-yellow-500" : ""
            }
            ${article.keywords === "alternate" ? "text-red-500" : ""}`}
          >
            {article.title}
          </h2>
          <img src={article.image_url} alt="Image" /> <p>{article.snippet}</p>
        </div>
      ))}
    </div>
  );
};

export default NewsDisplay;
