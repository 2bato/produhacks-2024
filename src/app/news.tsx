import NewsDate from "./dateHandler";
import scrapeNews from "./scraper";

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

export default class News {
  public dateRange: string;
  constructor() {
    const date = new NewsDate();
    const dateString: string = date.getDateRange();
    this.dateRange = dateString;
  }

  public async getNews() {
    let articleList: Article[] = await this.getArticleList("business");
    console.log(articleList);
    for (const article of articleList) {
      await scrapeNews(article.url).then((articleContent) => {
        if (articleContent) {
          article.snippet = articleContent;
        } else {
        }
      });
    }

    return articleList;
  }

  private getArticleList(category: string): Promise<any[]> {
    const url =
      "https://api.thenewsapi.com/v1/news/top?" +
      "api_token=KjaAwhifKiQQNPIJE2VwkAG8UAdfyBsn2lNm5jfl&" +
      "categories=" +
      category +
      "&" +
      "published_after=" +
      this.dateRange +
      "&" +
      "language=en";
    const req = new Request(url);
    return fetch(req)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        return data.data;
      })
      .catch(function (error) {
        console.error("Error fetching news:", error);
        return [];
      });
  }
}
