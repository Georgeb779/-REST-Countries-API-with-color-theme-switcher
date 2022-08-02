// class get data from https://restcountries.com/v3.1/all react
export class GetCountries {
  constructor() {}

  async getCountries() {
    const response = await fetch("https://restcountries.com/v3/all"),
      data = await response.json();
    return data;
  }

  async getCountriesByName(name: string | string[]) {
    const response = await fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`),
      data = await response.json();
    return data;
  }
}
