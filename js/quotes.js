const quotes = [
  {
    quote:
      "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    author: "Martin Fowler",
    translation:
      "어떤 바보라도 컴퓨터가 이해할 수 있는 코드를 작성할 수 있습니다. 좋은 프로그래머는 인간이 이해할 수 있는 코드를 작성합니다.",
  },
  {
    quote: "First, solve the problem. Then, write the code.",
    author: "John Johnson",
    translation: "먼저 문제를 해결하십시오. 그런 다음 코드를 작성하십시오.",
  },
  {
    quote: "Experience is the name everyone gives to their mistakes.",
    author: "Oscar Wilde",
    translation: "경험은 모든 사람이 실수에 붙인 이름입니다.",
  },
  {
    quote: "Don’t comment bad code – rewrite it.",
    author: "Brian Kernighan",
    translation: "나쁜 코드에 주석을 달지 말고 다시 작성해라.",
  },
  {
    quote: "Java is to JavaScript what car is to Carpet.",
    author: "Chris Heilmann",
    translation: "자바는 JavaScript에 카는 카펫에.",
  },
  {
    quote: "Knowledge is power.",
    author: "Francis Bacon",
    translation: "아는 것이 힘이다.",
  },
  {
    quote:
      "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code.",
    author: "Dan Salomon",
    translation:
      "가끔은 월요일의 코드를 디버깅하는 데 한 주의 나머지 시간을 보내는 것보다 월요일에 침대에 누워 있는 것이 좋습니다.",
  },
  {
    quote:
      "Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away.",
    author: "Antoine de Saint-Exupery",
    translation:
      "더 이상 더할 것이 없을 때가 아니라 더 이상 뺄 것이 없을 때 완벽함을 얻는다.",
  },
  {
    quote: "Ruby is rubbish! PHP is phpantastic!",
    author: "Nikita Popov",
    translation: "루비는 쓰레기야! PHP는  환상적 입니다!",
  },
  {
    quote: "Code is like humor. When you have to explain it, it’s bad.",
    author: "Cory House",
    translation:
      "코드는 유머와 같습니다. 그것을 설명해야 할 때, 그것은 나쁜 것입니다.",
  },
  {
    quote: "Fix the cause, not the symptom.",
    author: "Steve Maguire",
    translation: "증상이 아니라 원인을 고쳐라.",
  },
  {
    quote:
      "Optimism is an occupational hazard of programming: feedback is the treatment.",
    author: "Kent Beck",
    translation:
      "낙관주의는 프로그래밍의 직업상 위험입니다. 피드백은  치료 입니다.",
  },
  {
    quote:
      "When to use iterative development? You should use iterative development only on projects that you want to succeed.",
    author: "Martin Fowler",
    translation:
      "반복 개발은 언제 사용합니까? 성공하고 싶은 프로젝트에만 반복 개발을 사용해야 합니다.",
  },
  {
    quote: "Simplicity is the soul of efficiency.",
    author: "Austin Freeman",
    translation: "단순함은 효율성의 영혼입니다.",
  },
  {
    quote: "Before software can be reusable it first has to be usable.",
    author: "Ralph Johnson",
    translation:
      "소프트웨어를 재사용할 수 있으려면 먼저 사용할 수 있어야 합니다.",
  },
  {
    quote: "Make it work, make it right, make it fast.",
    author: "Kent Beck",
    translation: "일하게 하고, 올바르게 하고, 빠르게 하십시오.",
  },
  {
    quote:
      "Debugging is twice as hard as writing the code in the first place.Therfore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    author: "Rajanand",
    translation:
      "디버깅은 처음에 코드를 작성하는 것보다 두 배는 어렵다. 따라서 가능한 한 똑똑하게 코드를 작성하면 디버깅할 만큼 똑똑하지 않은 것이다.",
  },
  {
    quote: "The computer was born to solve problems that did not exist before.",
    author: "Bill Gates",
    translation:
      "컴퓨터는 이전에 존재하지 않았던 문제를 해결하기 위해 태어났습니다.",
  },
  {
    quote:
      "Walking on water and developing software from a specification are easy if both are frozen.",
    author: "Edward V Berard",
    translation:
      "물 위를 걷는 것과 사양에 따라 소프트웨어를 개발하는 것은 둘 다 얼어붙어 있으면 쉽습니다.",
  },
];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("details summary");
const translation = document.querySelector("details span");
const todeyQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todeyQuote.quote;
author.innerText = todeyQuote.author;
translation.innerText = todeyQuote.translation;
