//Дан произвольный массив. Необходимо вывести количество элементов массива, затем перебрать его и вывести в консоль каждый элемент массива.

function workWithArray(arr) {
    console.log(arr.length);    //display array len
    arr.forEach(element => console.log(element)); // display every element of arr

}

workWithArray(["a", "b", "c", "d"])