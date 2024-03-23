import NewsDate from "./dateHandler";

export default function getNews() {
  const date = new NewsDate();
  const dateString: string = date.getDateRange();

  console.log(dateString);

  //   var url =
  //     "https://newsapi.org/v2/everything?" +
  //     "q=Apple&" +
  //     dateString +
  //     "sortBy=popularity&" +
  //     "apiKey=ffea75f69a9746ca9f07b8320719d93d";

  //   var req = new Request(url);

  //   fetch(req)
  //     .then(function (response) {
  //       return response.json(); // Return the JSON promise
  //     })
  //     .then(function (data) {
  //       console.log(data); // Log the JSON data
  //     })
  //     .catch(function (error) {
  //       console.error("Error fetching news:", error);
  //     });
}
