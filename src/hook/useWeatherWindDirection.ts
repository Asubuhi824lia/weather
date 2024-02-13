enum WindDirParts {
  NORTH_EAST, // СВ
  NORTH_WEST, // СЗ
  SOUTH_EAST, // ЮВ
  SOUTH_WEST, // ЮЗ
}

const windDirParts = [
  WindDirParts.NORTH_EAST,
  WindDirParts.NORTH_WEST,
  WindDirParts.SOUTH_EAST,
  WindDirParts.SOUTH_WEST,
];

const WindDirections = [
  ["север", "северо-северо-восток", "северо-восток", "восточно-северо-восток"],
  ["восток", "восточно-юго-восток", "юго-восток", "юго-юго-восток"],
  ["юг", "юго-юго-запад", "юго-запад", "западо-юго-запад"],
  ["запад", "западо-северо-запад", "северо-запад", "северо-северо-запад"],
];

export default function useWeatherWindDirection(deg: number | string) {
  if (typeof deg === "string") return deg;

  for (let i = 0; i < WindDirections.length; i++) {
    if (deg < 90 * (i + 1))
      return defineWindDirectionInRange(deg % 90, windDirParts[i]);
  }

  return deg;
}

function defineWindDirectionInRange(degRemain: number, part: WindDirParts) {
  // 22.5  - ( 1/4 )
  const seg = 22.5;
  // RANGE +- 11.25
  const range = 11.25;

  if (degRemain % range < 1) return WindDirections[part][0];
  for (let i = 1; i < WindDirections[part].length; i++) {
    if (degRemain > (i - 1) * seg + range && degRemain < i * seg + range)
      return WindDirections[part][i];
  }

  return degRemain;
}
