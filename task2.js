
/*Дана переменная Х, которая может принимать любое значение. Написать программу, которая в зависимости от типа данных Х выводит в консоль сообщение вида: «X — число».

Опишите три случая: когда х = числу, строке или логическому типу. В других случаях выводите сообщение: «Тип x не определён». */
function whatIsIt(x) {
    if (typeof x === "string") {
        console.log("X - string")
    } else if (typeof x === "number" && !isNaN(x)) {
        console.log("X - number")
    } else if (typeof x === "boolean"){
        console.log("X - bool")
    } else {
        console.log("Тип x не определён")
    }
}

whatIsIt(NaN)