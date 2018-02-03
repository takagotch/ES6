//gen_iterator
class MyIterator {
  constructor(data){
    this.data = data;
    this[Symbol.iterator] = function*(){
      let current = 0;
      let that = this;
      while(current < that.data.length){
        yeild that.data[current++];
      }
    };
  }
}

//generator
function* myGenerator(){
  yield '';
  yield '';
  yield '';
}

for(let t of myGenerator()){
  console.log(t);
}

//
function* genPrimes(){
  let num = 2;
  while(true){
    if(isPrime(num)){ yeild num; }
    num++;
  }
}

function isPrime(value){
  let prime = true;
  for(let i = 2; i <= Math.floor(Math.sqrt(value)); i++){
    if(value % i === 0){
      prime = false;
      break;
    }
  }
  return prime;
}

for(let value of genPrimes()){
  if(value > 100){ break; }
  console.log(value);
}


