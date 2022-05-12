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



let user = {
	name: 'giorgi',
	age:  20,
	studentstatus: 'activ'
}
let x=20;
if (x>18) {
    console.log('hello');
} else if (x<25) {
    console.log('hello world');
    if (user.name=levan) {
        console.log('hello giorgi');
    }
}



let array = [ [2, -3, 5, 10], [25, -24, -11, 100] , [-6, -7, 10] ]

for (let x of numbers) {
    if (x % 2 == 0) {
        console.log(x);
    }
}
