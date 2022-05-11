let  user = {
    firstname: 'giorgi',
    lastname: 'smith',
    age: 25,
   studentstatus: 'active'
  };
console.log(user.studentstatus);  


let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];
for (let x of numbers){
    if (x > 5){
        console.log(x);
    }
}



let array = ['watermelon', 'pear', 10, 45, 50, 'apple', 'ananas'];
for (let item of array) {
    if (typeof item == 'string') {
console.log(item);
    }
}
    

let array = [32, 10, 'hello', null, 'hello2', 50 ];
  
for (let x of array) {
    if (typeof x == 'number' && x % 5 == 0) {
        console.log(x);
    }
}

