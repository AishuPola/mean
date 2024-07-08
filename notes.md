parseInt('string',radix)
radix is the sytem to which it belongs to.
2--binary
16--hexa decimal
10--decimal.
parsInt('100',2)
 -- the 100 number is given as binary number, the radix number is given as 2.
 so the output will be 4, 100 integer value is 4.
 original data--server
 cache means copy of the daata. whenever u test test it with enable cache. in inspect.
 6 requests for one connection.(tcp)

 status code-request is approved.
 angular material website
# floating
 ![alt text](image.png),

 this is myth.
 it follows 2 steps.
 1. declaration
 2. execution

 js guy is js engine.
 context guy--execution context

 ![alt text](image-1.png)
 ![alt text](image-2.png)

 initialisation means creating a space in memory.  
 assignment is storing the value in the memory.  
 temporal dead zone:
  it is applicable only for let and const. 
  it is the zone wer the initialisation is not done. 
  the variables are stored in that area. since these are un initialised. until they get initialised.

![alt text](image-3.png)


# shadowing

  wen ever we declare the variable is declared in the function,
 the same variable is declared in outside the function, then it will accses only the varibale which is present in 
 the function with same name instead of getting outside variable.


# functions:
first class citizens:
why?
three rules should be followed.
-  function can be treated as value.
1. function can be passed tp another function
2. function returing the  other function
3. assigning function to the variable

![alt text](image-4.png)

function  is placed in side the function,

we will use it in higher order function.
function taking function as argument
hof is greeting here.

here say hello is renamed with sayhello fucntion.

![alt text](image-6.png)
when function does not have name, then it is unanynomous function.

![alt text](image-7.png)

if func can be treated as value, then they are treated as fist class citizens


# lexical scope.
outside the function having scope.
![alt text](image-8.png)
own scope+lexical scope
# closure
![alt text](image-9.png)


example:
![alt text](image-10.png)

![alt text](image-11.png)


![alt text](image-12.png)


for var and let :
inside cannnot be accessed by outside.
it dies inisde the block.

for var ---function scope(can be accessed the block)

for let--block scope
![alt text](image-13.png)



------

# diff between var,let,const
![alt text](image-14.png)

let--->  we can reassign
can change the value
block cope

const--> it can be never changed then it is we an use.  
no change to value.
it is in block scope
var-->
can change the value  
function scope(block scope escape)

# ARRAY METHODS
1. PUSH
![alt text](image-15.png)

MRF--->MAP,REDUCE,FILTER ARE THREE OTHER METHODS.



if the value is directly getting assigned, then the addressi changed. 
so it is copy by reference.
we can use spread operator,
we can make a copy and use it and do modifications.
imutablity guranteee the value.


(table with methods, which are mutable and immutable)
methods which doesnot mutate 
map will always make a copy
in reverse , some method is there which doesnot mutate.



use a method which always give you copy, 

how and why immutation is useful and important.?
when we dont want to check 1000 lines of code.

# slice
number as argument

# join 
arr=[]




# split






![alt text](image-16.png)


method                      immutable                           mutable
slice                       immutable ✅                         ❌
join                        immutable                             ❌
split (string method)       immutable                            ❌ 

# map

arrow function:
```js
const add=(a,b)=>a+b
```
map is the higher order function
It returns copy of the array.(immutable)
It will transform the data type.
eg:array of number to array of strings




```js
 const a=[5,9,10,11]
var.map(x=>x*2)
```
![alt text](image-17.png)


![alt text](image-18.png)

# filter

==1.copy of the array
2. length of input length>= length of output length
3. filter doesnot transform datatype.
![alt text](image-19.png)
![alt text](image-20.png)
![alt text](image-21.png)
//

question:
([1,2,3].map(x=>x*3)).map(y=>y*3)
how many times map function can be used.

how many times map,filter can be done.
how long i can cont the pattern
![alt text](image-22.png)

ES6 FEATURES:
>LET&CONST  
TEMPLATE LITERAL  (back tick)  
SPREAD OPERATOR  
REST OPERATOR  
DESTRUCTIONG  
CLASS' ARROW FUNCTION==>  
PROMISE  
NUMERIC SPEARATORS 1_00_00_00  
nullish 


function goes to argument. in map