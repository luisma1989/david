import { addLocaleData } from 'react-intl';

// need Intl polyfill, Intl not supported in Safari
import Intl from 'intl';
import areIntlLocalesSupported from 'intl-locales-supported';

import 'intl/locale-data/jsonp/ru';
import ru from 'react-intl/locale-data/ru';
import ruData from './localizationData/ru';

import 'intl/locale-data/jsonp/es';
import es from 'react-intl/locale-data/es';
import esData from './localizationData/es';

// list of available languages
export const enabledLanguages = [
  'es',
  'ru',
];

// this object will have language-specific data added to it which will be placed in the state when that language is active
// if localization data get to big, stop importing in all languages and switch to using API requests to load upon switching languages
export const localizationData = {};

// here you bring in 'intl' browser polyfill and language-specific polyfills
// (needed as safari doesn't have native intl: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl)
// as well as react-intl's language-specific data
// be sure to use static imports for language or else every language will be included in your build (adds ~800 kb)


if (global.Intl) {
  // Determine if the built-in `Intl` has the locale data we need.
  if (!areIntlLocalesSupported(enabledLanguages)) {
    // `Intl` exists, but it doesn't have the data we need, so load the
    // polyfill and patch the constructors we need with the polyfill's.
    global.Intl.NumberFormat = Intl.NumberFormat;
    global.Intl.DateTimeFormat = Intl.DateTimeFormat;
  }
} else {
  // No `Intl`, so use and load the polyfill.
  global.Intl = Intl;
}

addLocaleData(es);
localizationData.es = esData;

addLocaleData(ru);
localizationData.ru = ruData;
