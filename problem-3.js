function picnicBudget(perticipent){
    if(typeof perticipent !== "number" || perticipent < 0){
        return "participent should be a valid positive number"
    }
    else{
        let first100Cost = 0;
        let second200Cost = 0;
        let remainingCost = 0;
        let totalCost = 0;

        if(perticipent<=100){
            first100Cost = perticipent * 5000;
            return first100Cost;
        }
        else if(perticipent<=200){
            first100Cost = 100 * 5000;
            second200Cost = (perticipent -100) * 4000;
            totalCost = first100Cost + second200Cost;
            return totalCost; 
        }
        else{
            first100Cost = 100 * 5000;
            second200Cost = 100 * 4000;
            remainingCost = (perticipent - 200)*3000;
            totalCost = first100Cost + second200Cost + remainingCost;
            return totalCost;
        }
    }
}
console.log(picnicBudget(201));