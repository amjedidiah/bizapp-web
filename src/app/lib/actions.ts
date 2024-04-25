import { ChatLinks } from "@/lib/constants";

const message = {
  image: "/images/user-chat.png",
  name: "Abdullahi Yusuf",
  excerpt:
    "Morbi leo risus, porta ac consectetur ac,vestibulum at eros. Aenean laci  shbhbd consectetur.....",
  count: 1,
  time: "9:00 am",
};

const getDummyMessages = (count: number) =>
  Array(count)
    .fill(message)
    .map((item: typeof message, index: number) => ({
      ...item,
      id: (index + 1).toString(),
    }));

export const getChats = (chatType: string) => {
  const chats = {
    [ChatLinks.Customers.toLowerCase()]: getDummyMessages(3),
    [ChatLinks.Collaborations.toLowerCase()]: getDummyMessages(5),
    [ChatLinks.Escalations.toLowerCase()]: getDummyMessages(2),
  };

  return chats[chatType as ChatLinks];
};

export const getChatsCount = (chatType: string) => getChats(chatType).length;
