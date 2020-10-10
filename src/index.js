

let gen1 = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
let gen10 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
let gen20 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

module.exports = function toReadable (number) {
    let str = number.toString();
    let result = "";

    if(number === 0) return 'zero';

    if(str[str.length-2] === '1'){
        let n1 = Number(str[str.length-1]);
        result += gen10[n1];

        if(str.length === 3) {
            let n2 = Number(str[0]);
            result = gen1[n2-1] + " hundred " + result;
        }
    }
    else {

        if(str.length >= 1 && str[str.length-1] !== '0'){
            let n1 = Number(str[str.length-1]);
            result += gen1[n1-1];
        }

        if(str.length >= 2 && str[str.length-2] !== '0') {
            let n2 = Number(str[str.length-2])
            result = gen20[n2-2] + " " + result;
        }

        if(str.length === 3) {
            let n3 = Number(str[0])
            result = gen1[n3-1] + " hundred " + result
        }
    }

    return result.trim();
}
