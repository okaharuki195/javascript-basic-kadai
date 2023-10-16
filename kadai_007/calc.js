/*calc.jsファイルに、以下のように条件分岐するプログラムをif文で記述
変数(num)が3の倍数の場合： “3の倍数です”
変数(num)が5の倍数の場合： “5の倍数です”
変数(num)が3と5の倍数の場合： “3と5の倍数です”
それ以外の場合： 変数(num)を出力する
変数(num)に任意の数値を代入して、プログラム内で使用してください。ただし、変数(num)は整数
*/

//変数numにランダムな整数を代入
let num = Math.floor(Math.random()* 100);

//変数numの値を出力
console.log(num);

if(num%3===0){
    console.log('3の倍数です');
}

else if(num%5===0){
    console.log('5の倍数です');
}

else if(num%3===0 && num%5===0){
    console.log('3と5の倍数です');
}

else{
    console.log(num);
}



