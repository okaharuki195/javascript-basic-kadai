const date = new Date();
//日付取得
const month = date.getMonth() + 1;
const day = date.getDate();
const year = date.getFullYear();

//monthは0から始まるので、「＋1」を付ける

console.log(year + '年' + month +'月' + date + '日');
