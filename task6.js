// Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль. Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые.

function same_element_of_array(arr) {
    var a = arr[0]; 
    for (var i = 1; i < arr.length; i++) {
        if (a != arr[i]) {
            return false
        }
    }
    return true
}

console.log(same_element_of_array(["a", "a", "a"]))