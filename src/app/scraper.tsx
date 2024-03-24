import axios from "axios";
import { JSDOM } from "jsdom";
import { Readability } from "@mozilla/readability";

export default async function scrapeNews(url: string): Promise<string | null> {
  try {
    // Fetch the HTML content of the news article
    const response = await axios.get(url);
    const htmlContent: string = response.data;

    // Parse the HTML content using JSDOM
    const dom = new JSDOM(htmlContent, { url });

    // Use Readability to extract the article content
    const article = new Readability(dom.window.document).parse();
    if (article) {
      const articleContent: string = article.textContent;

      return articleContent;
    } else {
      throw Error;
    }
  } catch (error) {
    console.error("Error scraping news article:", error);
    return null;
  }
}
