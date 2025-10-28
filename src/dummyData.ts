import { Post, User } from "./type";

export const users: User[] = [
  {
    id: "user-1",
    username: "wanderlust",
    name: "Ava Martinez",
    image: "https://example.com/avatars/ava-martinez.png",
    bio: "UX designer sharing mindful travel guides and sketches.",
  },
  {
    id: "user-2",
    username: "devdario",
    name: "Dario Conti",
    image: "https://example.com/avatars/dario-conti.png",
    bio: "Full-stack engineer building open-source experiment prototypes.",
  },
  {
    id: "user-3",
    username: "greenchef",
    name: "Mina Patel",
    image: "https://example.com/avatars/mina-patel.png",
    bio: "Plant-based chef documenting seasonal recipes and tips.",
  },
  {
    id: "user-4",
    username: "fitfabio",
    name: "Fabio Ricci",
    image: "https://example.com/avatars/fabio-ricci.png",
    bio: "Personal trainer focusing on sustainable routines and recovery.",
  },
  {
    id: "user-5",
    username: "pixelpilot",
    name: "Lena Zhou",
    image: "https://example.com/avatars/lena-zhou.png",
    bio: "Indie game artist exploring cozy worlds and shader tricks.",
  },
];

const userLookup: Record<string, User> = Object.fromEntries(
  users.map((user) => [user.id, user]),
);

export const posts: Post[] = [
  {
    id: "post-1",
    createAtt: "2024-06-01T09:30:00Z",
    content:
      "Jet-lag recovery tip: schedule a sunrise walk the first morning you land.",
    user_id: "user-1",
    user: userLookup["user-1"],
  },
  {
    id: "post-2",
    createAtt: "2024-06-03T14:12:00Z",
    content:
      "Tried Bun for a side project backend—hot reloads are lightning fast!",
    user_id: "user-2",
    user: userLookup["user-2"],
  },
  {
    id: "post-3",
    createAtt: "2024-06-05T18:47:00Z",
    content:
      "New recipe: roasted cauliflower tacos with smoked paprika cashew crema.",
    user_id: "user-3",
    user: userLookup["user-3"],
  },
  {
    id: "post-4",
    createAtt: "2024-06-08T07:05:00Z",
    content:
      "Micro-goal of the week: five-minute mobility flow before every stand-up.",
    user_id: "user-4",
    user: userLookup["user-4"],
  },
  {
    id: "post-5",
    createAtt: "2024-06-10T21:23:00Z",
    content:
      "Experimenting with vertex displacement to add subtle wind to foliage.",
    user_id: "user-5",
    user: userLookup["user-5"],
  },
];
