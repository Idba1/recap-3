function largestNumber(values){
    if(!Array.isArray(values)){
        return "Please provide a array"
    }
    else{
        let max = values[0];
        for(let i=0 ; i<values.length ; i++){
            if(typeof values[i] !== "number"){
                return "all values should be number";
            }
            else{
                if(values[i]>max){
                    max=values[i];
                }
            }
        }
        return max;
    }
}
console.log(largestNumber([66,100,9,90]));