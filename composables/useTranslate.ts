import { NuxtApp } from "#app";

export const useTranslate = (lang: NuxtApp["AvailableLangs"] | undefined = "en" /* fallback*/) => {
  return useNuxtApp().$useI18n(lang);
};
