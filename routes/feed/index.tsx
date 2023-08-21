import { JSX } from "preact";
import { useEffect, useState } from "preact/hooks";
import { ActionStyleTypes, FeedCard } from "@atomic/design";
import {
  DiscussionIcon,
  LikedIcon,
  QuipIcon,
  VoteIcon,
} from "$fathym/atomic-icons";

export default function Feed(): JSX.Element {
  const [data, setData] = useState<unknown[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetch("/api/takes");
      const jsonData = await resp.json();
      setData(jsonData);
    };

    fetchData();
  }, []);

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
