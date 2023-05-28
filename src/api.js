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
