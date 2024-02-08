function details(info){
    if(typeof info !== "object" || typeof info.myName !== "string" || typeof info.age !== "number"){
        return "please enter a valid object";
    }
    else{ 
        return `My name is ${info.myName} . I am ${info.age} years old.`;
    }
}


console.log(details({myName:"Idba", age: 20}));