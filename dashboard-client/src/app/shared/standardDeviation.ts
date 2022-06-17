export function standardDeviation (array: any): number {
    if (!array || array.length === 0) {
        return 0;
    }
    const n = array.length;
    const mean = array.reduce((a: any, b: any) => a + b) / n;
    return Math.sqrt(array.map((x:any) => Math.pow(x - mean, 2)).reduce((a:any, b:any) => a + b) / n);
}