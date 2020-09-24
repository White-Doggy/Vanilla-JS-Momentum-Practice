const test = [{ 
    name : "js",
    difficult : "easy",
}]

function testing (a="empty"){
    console.log(`testing == ${a}`);
}

let list = [];
list[0]= test;

console.log(list);
testing();
testing("yea");

console.log(document);

const text = document.getElementById("ttt");
text.innerHTML = "no!!!"
console.dir(text);

const text2 = document.querySelector("#ttt");
console.log(text2);


function resized (){
    console.log("resized!!!");
}

window.addEventListener("resize",resized);
// resize()라고 입력 시 해당 시점에 바로 실행되어버림