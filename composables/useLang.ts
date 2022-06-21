import { NuxtApp } from "#app";

export const useLang = (): NuxtApp["AvailableLangs"] | undefined => {
  const route = useRoute();
  const lang = route.params.lang;
  if (typeof lang === "string") {
    return lang as NuxtApp["AvailableLangs"]; //<--- you can check strictly.
  }
};
