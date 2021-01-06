const CALC_DIC = [
  {
    id: "calculation",
    type: "display",
    operator: null,
    class: " ",
    display: "",
  },
  { id: "display", type: "display", operator: null, class: " ", display: "0" },
  { id: "clear", type: "clear", operator: null, class: "btn", display: "AC" },
  { id: "divide", type: "operator", operator: "/", class: "btn", display: "/" },
  {
    id: "multiply",
    type: "operator",
    operator: "*",
    class: "btn",
    display: "x",
  },
  { id: "seven", type: "number", operator: 7, class: "btn", display: "7" },
  { id: "eight", type: "number", operator: 8, class: "btn", display: "8" },
  { id: "nine", type: "number", operator: 9, class: "btn", display: "9" },
  {
    id: "subtract",
    type: "operator",
    operator: "-",
    class: "btn",
    display: "-",
  },
  { id: "four", type: "number", operator: 4, class: "btn", display: "4" },
  { id: "five", type: "number", operator: 5, class: "btn", display: "5" },
  { id: "six", type: "number", operator: 6, class: "btn", display: "6" },
  { id: "add", type: "operator", operator: "+", class: "btn", display: "+" },
  { id: "one", type: "number", operator: 1, class: "btn", display: "1" },
  { id: "two", type: "number", operator: 2, class: "btn", display: "2" },
  { id: "three", type: "number", operator: 3, class: "btn", display: "3" },
  { id: "equals", type: "equal", operator: "=", class: "btn", display: "=" },
  { id: "zero", type: "number", operator: 0, class: "btn", display: "0" },
  { id: "decimal", type: "decimal", operator: ".", class: "btn", display: "." },
];

const head = document.querySelector("body");
const calculatorElement = document.createElement("div");
calculatorElement.id = "calculator";
head.append(calculatorElement);
for (const el of CALC_DIC) {
  let element = document.createElement("span");
  element.id = el.id;
  element.className = el.class;
  element.textContent = el.display;
  calculatorElement.append(element);
  if (el.type === "number") {
    element.addEventListener("click", () => operationWithNum(el.operator));
  }
  if (el.type === "operator") {
    element.addEventListener("click", () => operationWithOperator(el.operator));
  }
  if (el.type === "decimal") {
    element.addEventListener("click", () => operationWithDecimal(el.operator));
  }
  if (el.type === "clear") {
    element.addEventListener("click", () => clear());
  }
  if (el.type === "equal") {
    element.addEventListener("click", () => equal());
  }
}

const OPERATORS = ["+", "*", "/", "-"];

let prev = "";
let actual = "";

let calculationDisplay = document.getElementById("calculation");
let display = document.getElementById("display");
