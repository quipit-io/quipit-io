import { HandlerContext } from "$fresh/server.ts";

const EXAMPLE_DATA = [
  {
    username: "John Doe",
    avatar: "https://github.com/mcgear.png",
    timestamp: "2 hours ago",
    userId: "1",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  // Add the remaining 10 examples here
  // ...
];

export const handler = (_req: Request, _ctx: HandlerContext): Response => {
  return new Response(JSON.stringify(EXAMPLE_DATA));
};
