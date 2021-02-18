
//Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».

// Используйте шаблонные строки.
let fruits = new Map([

    ["apple", "green"],
  
    ["strawberry", "red"],
  
    ["blueberry",    "blue"]
  
]);


function display_map(map) {
    for (var i of map) {
        console.log("Ключ - " + i[0] +", зачение - " + i[1])
    }
}


display_map(fruits)