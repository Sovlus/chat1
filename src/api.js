// Mock API
const messages = [
  { id: 1, text: "Hej", sender: "Kuba" },
  { id: 2, text: "Jak tam?", sender: "Jacek" },
];

// Symulacja wiadomosci
export const fetchMessages = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(messages);
    }, 1000);
  });
};

// wyslanie nowej wiadomosci
export const sendMessage = (message) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newMessage = {
        id: messages.length + 1,
        text: message,
        sender: "John",
      };
      messages.push(newMessage);
      resolve(newMessage);
    }, 1000);
  });
};
