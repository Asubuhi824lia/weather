const WindDirParts = {
  WEST: "западный",
  NORTH: {
    WEST: ["западо-северо-запад", "северо-запад", "северо-северо-запад"],
    NORTH: "северный",
    EAST: ["северо-северо-восток", "северо-восток", "восточно-северо-восток"],
  },
  EAST: "восточный",
  SOUTH: {
    EAST: ["восточно-юго-восток", "юго-восток", "юго-юго-восток"],
    SOUTH: "южный",
    WEST: ["юго-юго-запад", "юго-запад", "западо-юго-запад"],
  },
};

export default function useWeatherWindDirection(deg: number | string) {
  if (typeof deg === "string") return deg;

  // RANGE +- 11.25
  const range = 11.25;

  if (deg > 270 - range && deg < 270 + range) return WindDirParts.WEST;
  if (deg > 90 - range && deg < 90 + range) return WindDirParts.EAST;
  if (deg > 90 && deg < 270)
    return calcWindDirectionInRange(deg, WindDirParts.SOUTH);
  if (deg < 90 || deg > 270)
    return calcWindDirectionInRange(deg, WindDirParts.NORTH);

  return deg;
}

function calcWindDirectionInRange(deg: number, part: string | object) {
  // 22.5  - ( 1/4 )
  const seg = 22.5;
  // диапазон секции на тригонометрическом круге RANGE +- 11.25
  const range = 11.25;

  switch (part) {
    // ЮГ    - (90 < deg < 270)
    case WindDirParts.SOUTH:
      for (let count = 90 + range, i = 0; i < 7; count += seg, i++) {
        if (count < deg && deg < count + seg) {
          if (i === 4) return WindDirParts.SOUTH.SOUTH;
          return WindDirParts.SOUTH.WEST[i % 3];
        }
      }
    // СЕВЕР - (deg > 270 ) && (deg < 90)
    case WindDirParts.NORTH:
      if (deg < range || deg > 360 - range) return WindDirParts.NORTH.NORTH;
      if (deg < 90) {
        for (let count = range, i = 0; i < 3; count += seg, i++) {
          if (count < deg && deg < count + seg)
            return WindDirParts.NORTH.EAST[i];
        }
      } else if (deg > 270) {
        for (let count = range, i = 0; i < 3; count += seg, i++) {
          if (count < deg && deg < count + seg)
            return WindDirParts.NORTH.WEST[i];
        }
      }
    default:
      return "";
  }
}
