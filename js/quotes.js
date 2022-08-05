const quotes = [
  {
    quote:
      "Without continual growth and progress, such words as improvement, achievement, and success have no meaning.",
    author: "Benjamin Franklin",
  },
  {
    quote:
      "Try not to become a man of success, but rather try to become a man of value.",
    author: "Albert Einstein",
  },
  {
    quote:
      "Success is a lousy teacher. It seduces smart people into thinking they can't lose.",
    author: "Bill Gates",
  },
  {
    quote:
      "A true friend is one who overlooks your failures and tolerates your success.",
    author: "Doug Larson",
  },

  {
    quote:
      "Ambition is the path to success. Persistence is the vehicle you arrive in.",
    author: "Bill Bradley",
  },
  {
    quote:
      "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do.",
    author: "Pele",
  },
  {
    quote: "Success is where preparation and opportunity meet.",
    author: "Bobby Unser",
  },
  {
    quote: "Survival was my only hope, success my only revenge.",
    author: "Patricia Cornwell",
  },
  {
    quote:
      "Success is the result of perfection, hard work, learning from failure, loyalty, and persistence.",
    author: "Colin Powell",
  },
  {
    quote:
      "Coming together is a beginning; keeping together is progress; working together is success.",
    author: "Henry Ford",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = randomQuote.quote;
author.innerText = randomQuote.author;
