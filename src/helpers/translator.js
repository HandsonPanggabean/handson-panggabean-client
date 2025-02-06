import en from '../locales/en.json';
import id from '../locales/id.json';

const translations = { en, id };

export const t = (key, lang) => {
  return translations[lang][key] || key;
};