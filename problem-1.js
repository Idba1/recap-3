function anaToVori(Ana){
    if(typeof Ana !== "number" || Ana <= 0){
        return "please provide a valid number";
    }
    else{
        const vori = Ana * 0.0625;
        return vori;
    }
}
console.log(anaToVori(97),"vori");