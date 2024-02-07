// No parameters, No return
function fun1(){
    console.log(3,"No perameters, No return");
} 
fun1()




// No parameters, but Return
function fun2(){
    return 5;
}
/* fun2()
console.log(14,fun2); */




// have parameters, but no return
function fun3(smile){
    console.log(smile);
}
fun3("haha...hihi...hoho");




// have parameters & have return
function fun4(a,b){
    let sum = a+ b;
    return sum;
}
const sum = fun4(3,3);
// fun4(5,5);
// let sum = fun4(5,5);
console.log(sum);



const num1 = 54;
const num2 = 54;
function fun5(x,y){
    let sum1 = x + y;
    return sum1;
}
let sum1 = fun5(num1, num2);
console.log(sum1);