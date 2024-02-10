import { Theme } from "../context/context/ThemeContext";

export enum keys {
  THEME = "weather__theme",
}

export const storage = {
  getItem: (name: string) => {
    let item = localStorage.getItem(name)
    
    if(item && typeof item !== "string") JSON.parse(item); 
    else if(!item) return null;
    
    switch (name) {
      case keys.THEME: return validTheme(item);
      default: return item;
    }
  },
  setItem: (name: string, item: string) => {
    switch (name) {
      case keys.THEME: localStorage.setItem(name, item); break;
    }
  },
};

function validTheme(item: string | null) {
  switch (item) {
    case Theme.LIGHT:
    case Theme.DARK: return item;
    default: return null;;
  }
}