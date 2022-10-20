const fs = require("fs");
const path = require("path");
const arr = require("./belifherb-x-giveaway_export.json");

const arr1 = arr;
let cnt = 0;
const arr2 = [];
const arr3 = [];
const arr4 = [];
const range = 303;
for (let i = 0; i < arr1.length; i++) {
  if (
    arr1[i].Status === "Valid" &&
    arr1[i].Action === "Kaikas 지갑 주소 제출"
  ) {
    if (arr1[i].Details.substr(0, 2) === "0x") {
      arr2.push({ Name: arr[i].Name, Details: arr[i].Details });
    }
  }
}
for (let i = 0; i < arr1.length; i++) {
  for (let j = 0; j < arr2.length; j++) {
    if (
      arr1[i].Name == arr2[j].Name &&
      arr1[i].Action === "도지사운드클럽 디스코드 입장"
    ) {
      arr3.push({
        Index: cnt,
        Name: arr2[j].Name,
        Details: arr2[j].Details,
        Discord: arr1[i].Discord,
      });
      cnt++;
    }
  }
}

const selectIndex = (totalIndex, selectingNumber) => {
  let randomIndexArray = [];
  for (i = 0; i < selectingNumber; i++) {
    randomNum = Math.floor(Math.random() * totalIndex);
    if (randomIndexArray.indexOf(randomNum) === -1) {
      randomIndexArray.push(randomNum);
    } else {
      i--;
    }
  }
  return randomIndexArray;
};

const selected = selectIndex(arr3.length, range);
for (let i = 0; i < selected.length; i++) {
  arr4.push(arr3[selected[i]]);
}

fs.writeFile("list.json", JSON.stringify(arr4), (err) => console.log(err));
