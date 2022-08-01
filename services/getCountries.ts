// class get data from https://restcountries.com/v3.1/all react
export class GetCountries {
  constructor() {}

  async getCountries() {
    // get data from https://restcountries.com/v3.1/all
    const response = await fetch("https://restcountries.com/v3/all"),
      data = await response.json();
    return data;
  }
}
