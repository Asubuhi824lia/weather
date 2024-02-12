export type Weather = {
  main: {
    temp: number;
    temp_max: number;
    temp_min: number;
    pressure: number;
    humidity: number;
  };
  weather: [
    {
      main: string;
    }
  ];
};
