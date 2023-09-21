const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

//selecting DOM element
const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factslist = document.querySelector(".facts-list");

//Create DOM elements:Render facts in list
factslist.innerHTML = "";

//Lode data from Supabase
loadFacts();

async function loadFacts() {
  const res = await fetch(
    "https://trvoqmrjcaozcqsewyvv.supabase.co/rest/v1/facts",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRydm9xbXJqY2FvemNxc2V3eXZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMyMTA4ODMsImV4cCI6MjAwODc4Njg4M30.zaQO51Htu88LuhqX8rIbse19WNdccUKoSFLBOBhF1u4",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRydm9xbXJqY2FvemNxc2V3eXZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMyMTA4ODMsImV4cCI6MjAwODc4Njg4M30.zaQO51Htu88LuhqX8rIbse19WNdccUKoSFLBOBhF1u4",
      },
    }
  );
  const data = await res.json();
  //   console.log(data);
  //   const filteredData = data.filter((fact) => fact.category === "society");

  createFactsList(data);
}

function createFactsList(dataArray) {
  // factslist.insertAdjacentHTML("afterbegin", "<li>jonas</li>");

  const htmlArr = dataArray.map(
    (fact) => `<li class="fact"> 
      <p>
      ${fact.text}
      <a
        class="source"
        href=${fact.source}
        target="_blank"
        >(source)</a>
    </p>
    <span class="tag" style="background-color: ${
      CATEGORIES.find((cat) => cat.name === fact.category).color
    }"
      >${fact.category}</span>
       </li>`
  );

  const html = htmlArr.join("");
  factslist.insertAdjacentHTML("afterbegin", html);
}

//toggle form visibility
btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a fact";
  }
});

console.log([7, 64, 6, -23, 11].filter((el) => el > 10));

/*
  let votesInteresting = 23;
  let votesMindblowing = 5;
  */
/*
  function calcFactAge(year) {
    const currentYear = new Date().getFullYear();
    const age = currentYear - year;
  
    if (age >= 0) return age;
    else return `impossible year,year need to be less or equal ${currentYear}`;
  }
  
  const age1 = calcFactAge(2015);
  console.log(age1);
  console.log(calcFactAge(2020));
  console.log(calcFactAge(1990));
  console.log(calcFactAge(2037));
  
  //const calcFactAge2 = (year) => 2022 - year;
  
  const calcFactAge2 = (year) =>
    year <= new Date().getFullYear()
      ? new Date().getFullYear() - year
      : `impossible year,year need to be less or equal ${Date().getFullYear()}`;
  console.log(calcFactAge2(2015));
  console.log(calcFactAge2(2037));
  */
/*
  let votesInteresting = 20;
  let votesMindblowing = 0;
  if (votesInteresting === votesMindblowing) {
    alert("This fact is equally interesting and mindblowing");
  } else if (votesInteresting > votesMindblowing)
    console.log("this fact is interesting");
  else if (votesInteresting < votesMindblowing)
    console.log("this fact is mindblowig");
  
  //falsy value=0,'',null,undefined
  //truthy value=everything else....
  if (votesMindblowing) {
    console.log("mindblowing fact");
  } else {
    console.log("there is nothing special");
  }
  
  let voteFalse = 7;
  const totalUpvote = votesInteresting + votesMindblowing;
  
  const message =
    totalUpvote > voteFalse ? "the fact is true" : "might be false,check more";
  
  //alert(message);
  const text = "Lisbon is the capital of Portugal";
  const upperText = text.toUpperCase();
  
  const str = `The current fact is ${text},it is ${calcFactAge(
    2015
  )} years old.it is probably ${totalUpvote > voteFalse ? "correct" : "not true"}.
  `;
  console.log(str);
  */
/*
  const fact = ["Lisbon is the capital of Portugal", 2015, true];
  console.log(fact);
  console.log(fact[2]);
  console.log(fact.length);
  console.log(fact[fact.length - 1]);
  const [text, createdIn] = fact;
  
  const newfact = [...fact, "society"];
  console.log(newfact);
  
  const factObj = {
    text: "Lisbon is the capital of Portugal",
    category: "society",
    createdIn: 2015,
    isCorrect: true,
    creatsummary: function () {
      return `The fact ${
        this.text
      } is from category ${this.category.toUpperCase()}`;
    },
  };
  
  console.log(factObj.text);
  console.log(factObj["text"]);
  
  const { category, isCorrect } = factObj;
  console.log(category);
  console.log(factObj.creatsummary());
  
  // [2, 4, 6, 8].forEach(function (el) {
  //   console.log(el);
  // });
  
  // const times10 = [2, 4, 6, 8].map(function (el) {
  //   return el * 10;
  // });
  
  const times10 = [2, 4, 6, 8].map((el) => el * 10);
  console.log(times10);
  
  const CATEGORIES = [
    { name: "technology", color: "#3b82f6" },
    { name: "science", color: "#16a34a" },
    { name: "finance", color: "#ef4444" },
    { name: "society", color: "#eab308" },
    { name: "entertainment", color: "#db2777" },
    { name: "health", color: "#14b8a6" },
    { name: "history", color: "#f97316" },
    { name: "news", color: "#8b5cf6" },
  ];
  
  const allCategories = CATEGORIES.map((el) => el.name);
  console.log(allCategories);
  
  const initialFacts = [
    {
      id: 1,
      text: "React is being developed by Meta (formerly facebook)",
      source: "https://opensource.fb.com/",
      category: "technology",
      votesInteresting: 24,
      votesMindblowing: 9,
      votesFalse: 4,
      createdIn: 2021,
    },
    {
      id: 2,
      text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
      source:
        "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
      category: "society",
      votesInteresting: 11,
      votesMindblowing: 2,
      votesFalse: 0,
      createdIn: 2019,
    },
    {
      id: 3,
      text: "Lisbon is the capital of Portugal",
      source: "https://en.wikipedia.org/wiki/Lisbon",
      category: "society",
      votesInteresting: 8,
      votesMindblowing: 3,
      votesFalse: 1,
      createdIn: 2015,
    },
  ];
  function calcFactAge(year) {
    const currentYear = new Date().getFullYear();
    const age = currentYear - year;
  
    if (age >= 0) return age;
    else return `impossible year,year need to be less or equal ${currentYear}`;
  }
  
  const factAges = initialFacts.map((el) => calcFactAge(el.createdIn));
  console.log(factAges);
  console.log(factAges.join("&"));
  */
