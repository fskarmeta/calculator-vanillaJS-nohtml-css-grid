const operationWithNum = (num) => {
  if (actual[0] === "0") {
    return;
  }
  num = String(num);
  actual = actual + num;
  prev = prev + num;
  calculationDisplay.textContent = prev;
  display.textContent = actual;
};

const operationWithOperator = (operator) => {
  actual = operator;
  prev = prev + " " + operator;
  calculationDisplay.textContent = prev;
  display.textContent = actual;
};

const operationWithDecimal = (decimal) => {
  if (actual.includes(".")) {
    return;
  } else {
    actual = actual + decimal;
    prev = prev + decimal;
    calculationDisplay.textContent = prev;
    display.textContent = actual;
  }
};

const lastCharOf = (text) => {
  return text
    .split("")
    .splice(calculationDisplay.textContent.length - 1, 1)
    .join("");
};

const sliceLastCharOf = (text) => {
  return text.slice(0, test.length - 1);
};

const hasDecimal = () => {
  return actual.includes(".");
};

const clear = () => {
  prev = "";
  actual = "";
  calculationDisplay.textContent = "";
  display.textContent = "0";
};

const equal = () => {
  console.log(
    calculationDisplay.textContent[calculationDisplay.textContent.length - 4]
  );
  for (const op of OPERATORS) {
    if (
      calculationDisplay.textContent[
        calculationDisplay.textContent.length - 4
      ] === op &&
      calculationDisplay.textContent[
        calculationDisplay.textContent.length - 2
      ] !== "-"
    ) {
      calculationDisplay.textContent = calculationDisplay.textContent.replace(
        /(?<=\s).*?(?=\s)/gm,
        " "
      );
    }
  }
  console.log(calculationDisplay.textContent);
  try {
    display.textContent = String(eval(calculationDisplay.textContent));
    calculationDisplay.textContent = display.textContent;
    prev = display.textContent;
  } catch (error) {
    display.textContent = "Error";
  }
};
