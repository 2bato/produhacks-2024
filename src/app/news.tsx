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
    const businessArticleList: Article[] = await this.getArticleList(
      "business"
    );
    const techArticleList: Article[] = await this.getArticleList("tech");
    const alternateArticleList: Article[] = await this.getArticleList(
      "politics"
    );

    alternateArticleList[2].keywords = "wildcard";

    alternateArticleList[1].keywords = "alternate";

    businessArticleList[0].categories[0] = "Business  ";

    techArticleList[1].categories[0] = "Business  ";

    techArticleList[2].categories[0] = "Entertainment";
    alternateArticleList[2].categories[0] = "Sports   ";
    alternateArticleList[1].categories[0] = "Politics   ";

    // const articleList: Article[] = businessArticleList.concat(
    //   techArticleList,
    //   wildcardArticleList,
    //   alternateArticleList
    // );

    const articleList: Article[] = [
      businessArticleList[0],
      techArticleList[1],
      techArticleList[2],
      alternateArticleList[2],
      alternateArticleList[1],
    ];

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
      "api_token=tXad2sLAw5AKATh87ajb6eT5vEP5IN793HflZHnb&" +
      "categories=" +
      category +
      "&" +
      "published_before=" +
      this.dateRange +
      "&" +
      "locale=us,ca&";
    ("language=en");
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
