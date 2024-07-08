console.log('aish')
console.log(a)//not defined--error||undefined is value and datatype
var a=10
// var is having reinitialisation and re declaration 
console.log(a)
//compilation happens on the fly.
// // js is the interpreted language
// steps
// compilation
// execution
//this is the concept of hosting.



//Hoisting
console.log(a); //not defined - error | undefined -value & datatype
var a=10
 
//the similar representation of above hoisting is shown as-floating ❌(This is myth)
var a;
console.log(a); //not defined - error | undefined -value & datatype
a=10
console.log(a);
 
//the execution process
 
//1.Phase - compilation (it only confirms the declarations)
console.log(a); //skipped
a=10//declared
console.log(a);//skipped
 
 
//2. phase -Execution happens
 
console.log(a); //value not defined
a=10// value is stored
console.log(a);// returns 10


//let case
//1.Phase - compilation (it only confirms the declarations)


// console.log(b)//skipped
// let b=10
// console.log(b)


// var price=300;
// function getprice(){
//     console.log("the old price is:", price);//undefined
//     var price=500;
//     console.log("the new price is:", price);//500
// }
// getprice();

//hoisting takes place.
// it sees if the variable is declared inside, then it 
// // sees it is undefined.

// shadowing:
//  wen ever we declare the variable is declared in the function,
//  the same variable is declared in outside the function, then it will accses only the varibale which is present in 
//  the function with same name instead of getting outside variable.


// function func() {
//     let a = 'Geeks';
    
//     if (true) {
//         let a = 'GeeksforGeeks';  // New value assigned
//         console.log(a); 
//     }
    
//     console.log(a); 
// }
// func();
//block scope
//shadowing
//we cannot redeclare. 
// 2 blocks are there then shadowing is done. 
// function func() {
//     var a = 'Geeks';//one scope
    
//     if (true) {//other scope
//         let a = 'GeeksforGeeks';  // New value assigned
//         console.log(a); 
//     }
    
//     console.log(a); 
// }
// func();
//redeclaration of the variable is done 
//function scope 

//lexical scope:
//closure:




// function sayhello()
// {
//     return "hello";
// }
// typeof(sayhello)


function  sayhello(){
    return function(){
        console.log("hello")
    }
}
var a= sayhello()
a()

///////////////
function  sayhello(){
    return function(){
        console.log("hello")
    }
}
sayhello()()



let codeWord = "Hulk";
 
function spaceShip(){
    let question = "Please provide the code word"
 
    function codeWordCheck(){
        let password = "Hulk";
        console.log(question)
        if(password === codeWord){
            console.log("Welcome," + password + " the strongest avenger")
        }else{
            console.log("Access denied")
        }
    }
    codeWordCheck();
}
spaceShip();



