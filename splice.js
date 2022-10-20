const fruits = ["Apple" , "Banana" , "Orange" , "Mango" , "Watermelon"]
console.log(fruits);

// splice is the method by using we add and delete Elements from array at one time it contains three parameters
// 1)its indicate the index from which the elements are delete or added
// 2)its number of elements we want to delete
// 3)elements we want to add into the array

fruits.splice(2, 2, "Aalu");
console.log(fruits);
