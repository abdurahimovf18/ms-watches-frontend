import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default getRequestConfig(async ({requestLocale}) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});
