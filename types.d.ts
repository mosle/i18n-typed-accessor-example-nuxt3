import { accessor, useHook } from "./plugins/i18n";
declare module "#app" {
  interface NuxtApp {
    $i18n: typeof accessor;
    $useI18n: typeof useHook;
    AvailableLangs: Parameters<typeof useHook>[0];
  }
}

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $i18n: typeof accessor;
    $useI18n: typeof useHook;
    AvailableLangs: Parameters<typeof useHook>[0];
  }
}
