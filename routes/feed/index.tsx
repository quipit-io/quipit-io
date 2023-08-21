import { JSX } from "preact";
import { FeedCard } from "@atomic/design";
import { ActionStyleTypes } from "https://deno.land/x/fathym_atomic@v0.0.41-integration/mod.ts";
import {
  DiscussionIcon,
  LikedIcon,
  QuipIcon,
  VoteIcon,
} from "$fathym/atomic-icons";

export default function Feed(): JSX.Element {
  const actionStyles = {
    actionStyle: ActionStyleTypes.None,
    class: "flex-grow",
  };

  const iconStyles = {
    class: "w-[24px] h-[24px] mx-auto",
  };

  const actions = [{
    ...actionStyles,
    href: "#quip",
    children: <QuipIcon {...iconStyles} />,
  }, {
    ...actionStyles,
    href: "#vote",
    children: <VoteIcon {...iconStyles} />,
  }, {
    ...actionStyles,
    href: "#discuss",
    children: <DiscussionIcon {...iconStyles} />,
  }, {
    ...actionStyles,
    href: "#like",
    children: <LikedIcon {...iconStyles} />,
  }, {
    ...actionStyles,
    href: "#load-more",
    children: "Load More",
  }];

  return (
    <div className="max-w-screen-md mx-auto">
      <h1 className="text-4xl font-bold mt-8">Feed</h1>

      <div className="mt-4">
        {[...Array(10)].map((_, index) => (
          <FeedCard
            key={index}
            username="John Doe"
            avatar="https://github.com/mcgear.png"
            timestamp="2 hours ago"
            actions={actions}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </FeedCard>
        ))}
      </div>
    </div>
  );
}