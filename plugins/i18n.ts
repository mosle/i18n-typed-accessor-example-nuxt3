import en from "@/locales/en.json";
import ja from "@/locales/ja.json";
import zhCN from "@/locales/zh-CN.json";
import zhTW from "@/locales/zh-TW.json";

import { generateAccessor, generateLockedAccessor } from "i18n-typed-accessor";

export const locales = { en, ja, "zh-CN": zhCN, "zh-TW": zhTW };
export const accessor = generateAccessor(locales, en /* for type hint*/);
export const useHook = (lang: Parameters<typeof accessor>[0]) => generateLockedAccessor(lang, accessor);

export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      i18n: accessor,
      useI18n: useHook,
    },
  };
});
