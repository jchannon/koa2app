import * as koa from 'koa';

// interface Person {
//     firstName: string;
//     lastName: string;
// }
const app = new koa();

app.use(async (context, next) => {
    await next();
});

let x: string = "";
x = "";

var p = { firstName: "", lastName: "" };
