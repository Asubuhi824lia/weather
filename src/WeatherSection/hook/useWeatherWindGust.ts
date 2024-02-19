export default function useWeatherWindForce(gust: number | string) {
  if (typeof gust === "string") return gust;

  if (gust < 0.2) return "штиль";
  else if (gust < 1.5) return "тихий ветер";
  else if (gust < 3.3) return "лёгкий ветер";
  else if (gust < 5.4) return "слабый ветер";
  else if (gust < 7.9) return "умеренный ветер";
  else if (gust < 10.7) return "свежий ветер";
  else if (gust < 13.8) return "сильный ветер";
  else if (gust < 17.1) return "крепкий ветер";
  else if (gust < 20.7) return "очень крепкий ветер";
  else if (gust < 24.4) return "шторм";
  else if (gust < 28.4) return "сильный шторм";
  else if (gust < 32.6) return "жестокий шторм";
  return "ураган";
}
