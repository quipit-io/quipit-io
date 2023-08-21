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
    github: "https://api.iconify.design/mdi:github.svg",
    google: "https://api.iconify.design/mdi:google.svg",
    microsoft: "https://api.iconify.design/mdi:microsoft.svg",
    quip: "https://api.iconify.design/simple-icons:quip.svg",
    vote: "https://api.iconify.design/material-symbols:how-to-vote-sharp.svg",
    upVote: "https://api.iconify.design/fluent:thumb-like-16-regular.svg",
    upVoted: "https://api.iconify.design/fluent:thumb-like-16-filled.svg",
    downVote: "https://api.iconify.design/fluent:thumb-dislike-16-regular.svg",
    downVoted: "https://api.iconify.design/fluent:thumb-dislike-16-filled.svg",
    upVote2: "https://api.iconify.design/bx:upvote.svg",
    upVoted2: "https://api.iconify.design/bx:bxs-upvote.svg",
    downVote2: "https://api.iconify.design/bx:downvote.svg",
    downVoted2: "https://api.iconify.design/bx:bxs-downvote.svg",
    like: "https://api.iconify.design/material-symbols:favorite-outline.svg",
    liked: "https://api.iconify.design/material-symbols:favorite.svg",
    discussion: "https://api.iconify.design/octicon:comment-discussion.svg",
  },
};

export const curIconSetGenerateConfig: IconSetGenerateConfig = {
  Exports: true,
  IconSet: curIconSetConfig,
  SpriteSheet: "./iconset/icons",
};
