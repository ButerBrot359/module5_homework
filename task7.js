// Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 

// При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.
var arr = [0, null, NaN, 0,1,2,4, "str"]

function even_or_odd(arr) {
    var odd = 0;
    var even = 0;
    var str = 0;
    var zero = 0;

    for (var i of arr) {
        console.log(typeof i)
        if (typeof i == 'number' && !isNaN(i)) {
            if (i == 0) {
                zero++
            } else if (i%2 == 0){
                even++
            } else if (i%2 != 0){
                odd++
            }
        } else if (typeof i == "string") {
            str++
        }
    }

    console.log("Odd - " + odd)
    console.log("Even - " + even)
    console.log("String - " + str)
    console.log("Zero - " + zero)
}

even_or_odd(arr)