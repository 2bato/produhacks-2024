export default class NewsDate {
  public todayDate: Date;
  constructor() {
    this.todayDate = new Date();
  }

  public getDateRange() {
    const weekAgo: Date = new Date(
      this.todayDate.getTime() - 7 * 24 * 60 * 60 * 1000
    );
    // const weekAgoString: string = this.getDateString(weekAgo);
    const weekAgoString = "2024-03-22";

    return weekAgoString;
  }

  private getDateString(date: Date) {
    const year: number = date.getFullYear();
    const month: number = date.getMonth() + 1;
    const day: number = date.getDate();

    const paddedMonth: string = month < 10 ? `0${month}` : `${month}`;
    const paddedDay: string = day < 10 ? `0${day}` : `${day}`;

    const dateString: string = `${year}-${paddedMonth}-${paddedDay}`;

    return dateString;
  }
}
