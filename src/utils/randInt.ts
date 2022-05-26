function randInt (min:number, max?:number):number {
    // if only one argument is provided, treat it as the max and set min to 0.
    // if min is larger than max, reverse them.
    [min,max] = (max === undefined) ? [0, min] : (min > max) ? [max, min] : [min, max];
    return Math.floor(Math.random() * (max-min) + min)
}

export default randInt;