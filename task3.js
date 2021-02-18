// Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH"

function rev_str(str) {
    var reverseString = str.split("").reverse().join("");
    console.log(reverseString)
}

rev_str("Hello")