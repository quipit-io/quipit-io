import { IconSetConfig, IconSetGenerateConfig } from "@fathym/atomic-icons";

export const curIconSetConfig: IconSetConfig = {
  IconMap: {
    "chevron-right":
      "https://api.iconify.design/material-symbols:chevron-right-rounded.svg",
    "chevron-down": "https://api.iconify.design/mdi:chevron-down.svg",
    "emulated-device":
      "https://api.iconify.design/material-symbols:android-find-my-device-outline.svg",
    "connected-devices":
      "https://api.iconify.design/material-symbols:cast-connected-outline.svg",
    "device-telemetry":
      "https://api.iconify.design/material-symbols:query-stats.svg",
    menu: "https://api.iconify.design/ci:hamburger.svg",
    user: "https://api.iconify.design/material-symbols:account-circle-full.svg",
  },
};

export const curIconSetGenerateConfig: IconSetGenerateConfig = {
  Exports: true,
  IconSet: curIconSetConfig,
  SpriteSheet: "./iconset/icons",
};
