/* 
Структура массива: [текст],[задержка блока],[задержка кадров],[id блока],[стиль CSS]
Пример массива ниже
const arrayText = [
  [
    ["В", "и", "к", "т", "о", "р ", "Ф", "р", "а", "н", "к", "л"],
    1500,
    50,
    "authorBlockId",
    "color: white; font-size: 24px; font-family: Arial; top: 100px; left: 330px",
  ],
  [
    ["Сказать ", "жизни"],
    3000,
    500,
    "titleBlock1Id",
    "color: white; font-size: 60px; font-family: Arial; top: 250px; left: 300px",
  ],
...
]; */

//создает блок и стиль текста
function setBlock(id_context, css_style) {
  createContext(id_context);
  setContextStyle(id_context, css_style);
}

//возвращает кусок текста нужной длины
function convertArrayToText(textArray, maxIndex) {
  let subText = "";
  for (let i = 0; i <= maxIndex; i++) {
    if (textArray[i] === undefined) break;
    subText += textArray[i];
  }
  return subText;
}

//показывает "снимок" текста
function showShotText(id_context, textArray, index) {
  const textShot = convertArrayToText(textArray, index);
  writeContext(id_context, textShot);
}

//показывает "анимацию печати" текста
function showPlayText(callback, delay, id_context, textArray, index) {
  if (textArray[index] === undefined) return;
  showShotText(id_context, textArray, index);
  index++;
  setTimeout(callback, delay, callback, delay, id_context, textArray, index);
}

//запуск массива анимаций
function showAnimation(arrayConfig) {
  const defaultIndex = 0;
  for (let i = 0; arrayConfig[i] !== undefined; i++) {
    const textArray = arrayConfig[i][0];
    const delayBlock = arrayConfig[i][1];
    const delayShot = arrayConfig[i][2];
    const id = arrayConfig[i][3];
    const cssStyle = arrayConfig[i][4];

    setBlock(id, cssStyle);
    setTimeout(showPlayText, delayBlock, showPlayText, delayShot, id, textArray, defaultIndex);
  }
}