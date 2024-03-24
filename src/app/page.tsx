import React from "react";
import Header from "./components/header";
import MainNewsView from "./components/mainNewsView";
import BottomHeader from "./components/BottomHeader";
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

const news = new News();

const articles: Article[] = await news.getNews();

export default function SimpleBottomNavigation() {
  return (
    <>
      <div>
        <Header />

        <MainNewsView article={articles} />

        <div className="w-svw fixed bottom-0 z-50">
          <BottomHeader></BottomHeader>
        </div>
      </div>
    </>
  );
}
