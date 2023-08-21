import { Handlers } from "$fresh/server.ts";
import { Take } from "../../src/takes.interface.ts";

const EXAMPLE_DATA: Take[] = [
  {
    username: "Stephen A. Smith",
    avatar: "https://i.imgur.com/1zvWYJL.jpg",
    timestamp: "2 hours ago",
    userId: "1",
    content:
      "The Lakers are in trouble! They need to step up their game if they want to make it to the Finals.",
  },
  {
    username: "Kendrick Perkins",
    avatar: "https://i.imgur.com/5JZJZJL.jpg",
    timestamp: "3 hours ago",
    userId: "2",
    content:
      "The Nuggets are the real deal! They have what it takes to go all the way this year.",
  },
  {
    username: "JJ Redick",
    avatar: "https://i.imgur.com/5JZJZJL.jpg",
    timestamp: "4 hours ago",
    userId: "3",
    content:
      "The Clippers are a disappointment! They had all the talent but couldn't get it done in the playoffs.",
  },
  {
    username: "LeBron James",
    avatar: "https://i.imgur.com/1zvWYJL.jpg",
    timestamp: "5 hours ago",
    userId: "4",
    content:
      "We're not worried! We know what we're capable of and we'll show it on the court.",
  },
  {
    username: "Nikola Jokic",
    avatar: "https://i.imgur.com/5JZJZJL.jpg",
    timestamp: "6 hours ago",
    userId: "5",
    content:
      "We're not done yet! We'll keep fighting until the end and see where it takes us.",
  },
  {
    username: "Denver Nuggets",
    avatar: "https://i.imgur.com/5JZJZJL.jpg",
    timestamp: "7 hours ago",
    userId: "6",
    content:
      "We're the underdogs but we like it that way! We'll keep surprising people and making history.",
  },
  {
    username: "Los Angeles Lakers",
    avatar: "https://i.imgur.com/1zvWYJL.jpg",
    timestamp: "8 hours ago",
    userId: "7",
    content:
      "We're the defending champions for a reason! We'll show everyone why we're the best.",
  },
  {
    username: "Rachel Nichols",
    avatar: "https://i.imgur.com/5JZJZJL.jpg",
    timestamp: "9 hours ago",
    userId: "8",
    content:
      "The Heat are a force to be reckoned with! They have a great team and a great coach.",
  },
  {
    username: "Jimmy Butler",
    avatar: "https://i.imgur.com/1zvWYJL.jpg",
    timestamp: "10 hours ago",
    userId: "9",
    content:
      "We're not satisfied yet! We want to win it all and we'll do whatever it takes.",
  },
  {
    username: "Miami Heat",
    avatar: "https://i.imgur.com/5JZJZJL.jpg",
    timestamp: "11 hours ago",
    userId: "10",
    content:
      "We're the dark horse! We'll surprise everyone and make it to the Finals.",
  },
  {
    username: "Chris Bosh",
    avatar: "https://i.imgur.com/1zvWYJL.jpg",
    timestamp: "12 hours ago",
    userId: "11",
    content:
      "The Raptors are a great team! They have a lot of talent and a great coach.",
  },
  {
    username: "Kyle Lowry",
    avatar: "https://i.imgur.com/5JZJZJL.jpg",
    timestamp: "13 hours ago",
    userId: "12",
    content:
      "We're not done yet! We'll keep fighting and see where it takes us.",
  },
  {
    username: "Toronto Raptors",
    avatar: "https://i.imgur.com/1zvWYJL.jpg",
    timestamp: "14 hours ago",
    userId: "13",
    content:
      "We're the defending champions for a reason! We'll show everyone why we're the best.",
  },
  {
    username: "Giannis Antetokounmpo",
    avatar: "https://i.imgur.com/5JZJZJL.jpg",
    timestamp: "15 hours ago",
    userId: "14",
    content:
      "We're not satisfied yet! We want to win it all and we'll do whatever it takes.",
  },
  {
    username: "Milwaukee Bucks",
    avatar: "https://i.imgur.com/1zvWYJL.jpg",
    timestamp: "16 hours ago",
    userId: "15",
    content:
      "We're the best team in the league! We'll show everyone why we're the favorites.",
  },
  {
    username: "Damian Lillard",
    avatar: "https://i.imgur.com/5JZJZJL.jpg",
    timestamp: "17 hours ago",
    userId: "16",
    content:
      "We're not done yet! We'll keep fighting and see where it takes us.",
  },
  {
    username: "Portland Trail Blazers",
    avatar: "https://i.imgur.com/1zvWYJL.jpg",
    timestamp: "18 hours ago",
    userId: "17",
    content:
      "We're the underdogs but we like it that way! We'll keep surprising people and making history.",
  },
  {
    username: "James Harden",
    avatar: "https://i.imgur.com/5JZJZJL.jpg",
    timestamp: "19 hours ago",
    userId: "18",
    content:
      "We're not satisfied yet! We want to win it all and we'll do whatever it takes.",
  },
  {
    username: "Houston Rockets",
    avatar: "https://i.imgur.com/1zvWYJL.jpg",
    timestamp: "20 hours ago",
    userId: "19",
    content:
      "We're the small ball team! We'll show everyone why we're the most innovative team in the league.",
  },
  {
    username: "Jayson Tatum",
    avatar: "https://i.imgur.com/5JZJZJL.jpg",
    timestamp: "21 hours ago",
    userId: "20",
    content:
      "We're not done yet! We'll keep fighting and see where it takes us.",
  },
];

export const handler: Handlers<Take[]> = {
  async GET(_req, ctx) {
    return new Response(JSON.stringify(EXAMPLE_DATA));
  },
};
