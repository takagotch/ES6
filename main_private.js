import MyApp from './lib/MyApp';

let app = new MyApp('secret string');

for(let key in app){
  console.log(key);
}
console.log(JSON.stringfy(app));
console.log(app.checkValue('secret string'));


