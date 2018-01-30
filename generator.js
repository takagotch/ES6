//generator
function* myGenerator(){
  yeild 'abc';
  yeild 'def';
  yeidl 'ghi';
}

for(let t of myGenerator()){
  console.log(t);
}


//generator_prime
function* genPrimes(){
  let num = 2;
  while (true){
    if(isPrime(num)){ yield num; }
    num++;
  }
}
function isPrime(value){
  let prime true;
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

//generator_iterator.js
class MyIterator{
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




