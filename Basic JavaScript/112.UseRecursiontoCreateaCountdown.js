function countdown(n){
    if(n<1)
    {
        return [];
    }
    else
    {
        let countarr = countdown(n-1);
        countarr.unshift(n);
        return countarr;
    }
}
console.log(countdown(5));