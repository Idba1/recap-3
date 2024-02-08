function pandaCost(singara, samuca, jilapi){
    if(typeof singara !== "number" || typeof samuca !== "number" || typeof jilapi !== "number"){
        return "all value should be number";
    }
    else if(singara < 0 || samuca<0 || jilapi<0){
        return "all value should be positive";
    }
    const singaraPrice = 7;
    const samucaPrice = 7;
    const jilapiPrice = 7;
    const total = (singara * singaraPrice) + (samuca*samucaPrice) + (jilapi*jilapiPrice);
    return total;
}
console.log(pandaCost(1,2,2));