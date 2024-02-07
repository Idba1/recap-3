function add(x,y){
    if(typeof x !== "number" || typeof y !== "number"){
        return" please enter a valid Number";
    }
    else{
        return x+y;
    }
}
// let result = ;
console.log(add(4,5));