import { Handlers } from "$fresh/server.ts";
import { Take } from "../../src/takes.interface.ts";

const EXAMPLE_DATA: Take[] = [
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

export const handler: Handlers<Take[]> = {
  async GET(_req, ctx) {
    return new Response(JSON.stringify(EXAMPLE_DATA));
  },
};
