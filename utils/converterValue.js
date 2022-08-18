export const declinationProducts = (count) => {
  let numberOfTens = +String(count)[String(count).length - 1];

  if (numberOfTens === 1 && count !== 11) {
    return "товар";
  } else if (count >= 12 && count <= 14) {
    return "товаров"
  } else if (numberOfTens >= 2 && numberOfTens <= 4) {
    return "товара";
  } else {
    return "товаров";
  }
};

export const changeStringToNumber = (str) => {
  return Number(str.replace(/ /g, ""));
}

export const changeNumberToString = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
}
