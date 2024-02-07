function printName(){
    console.log(2, "Mehedy");
}
printName();




function printName2(name){
    console.log(10, "My name is ", name)
}
printName2("Mehedy Hasan");




function printDetails(name, age, address){
    console.log(18, `My name is ${name}. I am ${age} years old. I lives in ${address}`)
}
printDetails("Mehedi Hasan Linkon", 26, "Rajshahi");




function add(x,y){
    let total = x+y;
    return total;
    /* add = x + y;
    return add */
}
total = add(4,5);
console.log(30,"sum is", total);
console.log(33,add(3,3));
add(4,4);
// console.log(35, add);





function givenNumber (){
    console.log("inside", 5);
    return 6;
}
const x = givenNumber();
console.log("outside function", x);