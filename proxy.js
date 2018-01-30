//new Proxy(target, handler)
let data = { ticket1: 'a', ticket2: 'b' };
var proxy = new Proxy(obj, {
  get(target, prop){
    return prop in target ? target[prop] : '?';
  }
});
console.log(proxy.ticket1);
console.log(proxy.notihing);

//getPrototypeOf(target)
//setPrototypeOf(target, prototype)
//has(target, prop)
//deleteProperty(target, prop)
//construct(target, args)
//apply(target, thisArg, args)
proxy.ticket1 = 'a';
console.log(data.ticket1);
console.log(proxy.ticket1);

