import { of } from "rxjs";
import { map } from "rxjs/operators";
import CryptoJS from "crypto-js";

const source = of("World").pipe(
  map(x => CryptoJS.MD5(`Hello ${x}!`).toString())
);

source.subscribe(console.log);
