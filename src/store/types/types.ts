export type CurrentWeather = {
  main: {
    temp: number;
    feels_like: number;
    temp_max: number;
    temp_min: number;
    pressure: number;
    humidity: number;
  };
  wind: {
    speed: number;
    deg: number | string;
    gust: number;
  };
  weather: [
    {
      description: string;
    }
  ];
  dt: number;
};

export type Hourly5DaysWeather = {
  list: Array<CurrentWeather>;
};
