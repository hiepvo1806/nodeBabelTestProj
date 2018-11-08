const rx = require('rxjs');
const rxOperator  = require('rxjs/operators');
import { abc, foo} from "./test2"
const source = rx.from([1,1,2,3,3,4,5]);
//filter out all values until interval is greater than 5

const example = source.pipe(
    rxOperator.filter(num => {
        return num > 2;
    }),
    rxOperator.tap(r=> console.log("from tap",r)),
    rxOperator.distinctUntilChanged((p,q)=> p==q)
    );

const subscribe = example.subscribe(val =>
  console.log(`Number greater than 2: ${val}`)
);

console.log(abc());