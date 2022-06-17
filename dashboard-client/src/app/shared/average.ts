export function average(list : any) : number{
    let avg
    const sum = list.reduce((a : number, b : number) => a + b, 0);
    avg = (sum / list.length) || 0;
    return avg
}