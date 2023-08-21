import { JSX } from "preact";
import { useEffect, useState } from "preact/hooks";
import { ActionStyleTypes, FeedCard } from "@atomic/design";
import {
  DiscussionIcon,
  LikedIcon,
  QuipIcon,
  VoteIcon,
} from "$fathym/atomic-icons";
import { Take } from "../../src/takes.interface.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { handler as takesSvc } from "../api/takes.ts";

export const handler: Handlers<Take[]> = {
  async GET(req, ctx) {
    const resp = await takesSvc.GET!(req, ctx);

    const takes = await resp.json();

    return ctx.render(takes);
  },
};

export default function Feed(props: PageProps<Take[]>): JSX.Element {
  const [data, setData] = useState<Take[]>([]);

  setData(props.data);

  const actionStyles = {
    actionStyle: ActionStyleTypes.None,
    class: "flex-grow",
  };

  const iconStyles = {
    class: "w-[24px] h-[24px] mx-auto",
  };

  const actions = [
    {
      ...actionStyles,
      href: "#quip",
      children: <QuipIcon {...iconStyles} />,
    },
    {
      ...actionStyles,
      href: "#vote",
      children: <VoteIcon {...iconStyles} />,
    },
    {
      ...actionStyles,
      href: "#discuss",
      children: <DiscussionIcon {...iconStyles} />,
    },
    {
      ...actionStyles,
      href: "#like",
      children: <LikedIcon {...iconStyles} />,
    },
    {
      ...actionStyles,
      href: "#load-more",
      children: "Load More",
    },
  ];

  return (
    <div className="max-w-screen-md mx-auto">
      <h1 className="text-4xl font-bold mt-8">Feed</h1>

      <div className="mt-4">
        {data.map((item, index) => (
          <FeedCard
            key={index}
            username={item.username}
            avatar={item.avatar}
            timestamp={item.timestamp}
            actions={actions}
          >
            {item.content}
          </FeedCard>
        ))}
      </div>
    </div>
  );
}
