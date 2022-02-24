import {coinFlips, countFlips} from "./modules/coin.mjs";
import minimist from 'minimist';
const args = minimist(process.argv.slice(2));
args['number'];

if (args.number) {
    let array = coinFlips(args.number);
    console.log(array);
    console.log(countFlips(array));
}
else {
    let array = coinFlips(1);
    console.log(array);
    console.log(countFlips(array));
}

