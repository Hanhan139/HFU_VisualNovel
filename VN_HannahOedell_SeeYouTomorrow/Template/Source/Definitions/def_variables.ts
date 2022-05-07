namespace VNamespace{
    
    export let scoresss = 1;

    export function func_RandomNumber() {
        return func_RandomNumberRange (0, 10)
        // let x = (Math.random()*100);
        // return x | 0;
    };

    //absolutely copied from https://www.codegrepper.com/code-examples/javascript/random+number+generator+in+typescript - I dunno how it does what it does, but it does
    export function func_RandomNumberRange(r_min: any, r_max: any) {
        r_min = Math.ceil(r_min);
        r_max = Math.floor(r_max);
        return Math.floor(Math.random() * (r_max - r_min + 1)) + r_min;
    };
}