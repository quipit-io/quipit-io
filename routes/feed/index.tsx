import { JSX } from "../../src.deps.ts";
import { Action } from "@atomic/design";
import { FeedCard } from "@atomic/design";

export default function Feed(): JSX.Element {
  return (
    <div className="max-w-screen-md mx-auto">
      <h1 className="text-4xl font-bold mt-8">Feed</h1>
      <div className="mt-4">
        <FeedCard
          username="John Doe"
          avatar="https://example.com/avatar.jpg"
          timestamp="2 hours ago"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
      </div>
    </div>
  );
}

export default Feed;