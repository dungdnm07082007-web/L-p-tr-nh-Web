const FAV_KEY = "favorite_books_ids";
const THEME_KEY = "app_theme_mode";

export function getFavorites(): string[] {
  const data = localStorage.getItem(FAV_KEY);
  return data ? (JSON.parse(data) as string[]) : [];
}

export function saveFavorites(favs: string[]): void {
  localStorage.setItem(FAV_KEY, JSON.stringify(favs));
}

export function getSavedTheme(): string {
  return localStorage.getItem(THEME_KEY) || "light";
}

export function saveTheme(theme: string): void {
  localStorage.setItem(THEME_KEY, theme);
}