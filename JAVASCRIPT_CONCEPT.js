

// ALL JAVASCRIPT CONCEPT GOES HERE
// BEST OF LUCK!!! 


alert("WELCOME HERE");
const array=[
    ['raghav','vohra',12]
    ,
    ['mayank',"vohra",25],

    ['tripti',"verma",40],
    [7372],
    [453]

]
console.log("HERE EVERY ELEMENT OF THE 2-D AARAY IS PRINTING IN THE NEW LINE AS SHOWN BELOW");

for(let i=0;i<array.length;i++){
    const row= array[i];
    
    console.log(`ROW #${i*2}`);

    for(let k=0;k<row.length;k++){
        console.log(`hi raghav ${row[k]}`);
    }
}

//NEW SYNTAX FOR THE NESTED LOOP:

console.log("same array with different syntax of the for loop".toUpperCase());

for(let row of array){
    for(let student of row){
        console.log(student);
    }
}

/*
const password ="VOHRA";
let show = prompt('hello raghav,enter the password');

while(password!==show){
    show = prompt("enter correct password");
}

console.log("password is correct");


console.log("hello raghav");

let i= parseInt(prompt("enter string or a number"));
if(i===100){
    console.log("WELCOME !!!");
}
else{
    console.log("OOPS! ENTER A VALID NUMBER");
}
*/

//another for loop synthax:
let array2=[1,2,3,4,5,6,7,8,9,10];

for(let int of array2){
    console.log(int*int);
}

// TO DO LIST BY USING PROMPT METHOD

//method for getting same text for prompt what we type
/*

let ask= prompt("what would you like to have");

let Quit = "quit";
let character = 'A';


while(true){
    if(ask===Quit || ask===character){
        console.log("ok, i quit now");
        break;
    }
    if(ask==='mayank'){
        console.log("wow, you win this game!!!".toUpperCase());
        break;
    }
    
    // THIS PROMPTS AND DISPLAY THE SAME TEXT THAT WE ENTERED
    else {
    ask=prompt(`${ask}`);
    }

}
*/

/* in console

this function is boolean
and return true or false according to input

Number.isNaN(211)  -- return false
Number.isNaN("husgedbjgdui") -- return false

return true only when it is NaN

i.e Number.isNaN(NaN) -- return true
*/

//ANOTHER INPUT todo GAME
/*

let input = prompt('what would you like');

const todos=['raghav','mayank'];

while(input!=='quit' && input!=='q'){
    if(input==='list'){
        console.log('&&&&&&&&&&&&&&&&');

         for(let j=0;j<todos.length;j++){
             console.log(`${j} have value ${todos[j]}`);
         }

        console.log('&&&&&&&&&&&&&&&&');

    }

    else if(input==='new')
    {

       const input2= prompt('enter new todo');
       todos.push(input2);
       console.log(`${input2} is added to the list successfully`);

    }

    else if(input==='delete')
    { 
        const input3 = parseInt(prompt('enter the index to delete'));
        if(!Number.isNaN(input3)){
            const deleted = todos.splice(input3,1);
            console.log(`ok, we have deleted ${deleted[0]}`);
        }
        else{
            console.log("unknown index");
        }

    }

    input=prompt("what would you like to do again");
}

console.log("i quit this game");

*/


function hello(){
    console.log("hey !! lets code javascript using functions".toUpperCase());
}

let number = 9;
number++;

let string = "string here";

function repeat(string,n){

    if(typeof n!=='number'){
        return false;
    }
    for(let i=0;i<n;i++){
        console.log(`hello , ${string[0]} - bcdskjfhsduk`);
    }

}

// this can also be written as


/*
function repeat2(string,n){
    let result = ' ';
    for(let j=0;j<n;j++){
        result += string;
    }

    console.log(result);
}
*/


//SOME IMPORTANT KEY POINTS

//Using return keyword will always store our value;;
//VARIBLE var keyword also have scope after the loop (if variable is declared inside loop) , while let and const keyword 
//does not have scope after the loop (if variable is declared inside loop)..;;
//Function call is allowed in another function in javascript;; 
//IN NESTED FUNCTIONS , inner function have access to the outer functions (i.e variables) , but variables declared 
//inside in inner function is not accessed by the outer function.
//Functions are objects behind the scenes
//Also , we can pass a function as an argument and we can return the function as a return value 
//Every method is a function but every function is not a method
//METHOD : It is a function that has been added as a property of any value of some object...
//Array are object in javascript script


//Window is called the top level object in javascript
//Every function defined in javascript file goes in to this top level object (window)
//left side > may be considered as window object  !!! this keyword have default value window
//if left side is object in declaration !!! then this is used to access data from objects...
//Using try/catch result in exectution of JS as it handles our error



/*
we can also store the function value in a variable like this:
*/

/*this added is variable not a function name, there is no name of this function
i.e we are storing a function with no name inside a variable
this is another syntax for defining a function storing in a variable
this is also known as function expression
*/
//return type of following function is function , i.e it returns the function 
const added = function(x,y){
    if(x==1 && y==1){
        return function(){
            console.log("HI");
        }
    }

    else {
        return function(){
            console.log("HELLO");
        }
    }
}

//ANOTHER FUNCTION e.g

function between(min,max){
    return function(num){
        return num>=min && num<=max;
    }
}

//Another function

const adding2 = (x,y) =>{
    return x+y;
}

//Another funtion : for one variable ,parenthesis is not required
//but if no argument then we require parenthesis


const square4 = h =>
{
    return h*h;
}

//Another function which does'nt have return keyword

const rolldie = () =>
(
    Math.floor(Math.random()*6) +1 

    //no return keyword here in this function;
)
//Also

const adding3 = (a,b,c) => a+b+c;

//Another function syntax ; in this ,if value is not given as an argument then it defaults the value ;;; i.e

function rollDie6(numSides = 6){
    return Math.floor(Math.random()*numSides)  + 1;
}

//i.e if no value is given to numSides , then default value for numSides is set to 6:::
//if two or more arguments are passed , then we should pass the default value to the 2nd argument 
//i.e if we passed only one value in function ,then by default it is assigned to the 1st value  


const value = between(4,10);
value(6);
console.log(` it return value is ${value(5)}`);
console.log(` it return value is ${value(12)}`);

//e.g for method

const myMath ={
    PI : 3.14,
    square: function(num){
        return num*num;
    },

    cube: function(num){
        return num**3;
    }
};

//another syntax for method
//no need to declare function
//to access we can have myScience.square(5);   .....
//THIS keyword is used to access object's value using key ...
//the value of THIS depends on the invocation context of the function it is used in
//the value of some key in object cannot be access by the --this-- keyword if the function is defined by ARROW FUNCTION syntax;;;
//but the value of some key in object can be access by the --this-- keyword if the function is not defined by ARROW FUNCTION SYNTAX;;;  
//thus --this-- keyword can access value from function in object when no ARROW syntax of function will be there;;;

const myScience = {
    PI: 3.14,
    name : 'raghav',

//THIS IS METHOD
    square(num){
        return num*num;
    },
    //THIS keyword is used to access object's value using key ...
    //e.g to access raghav from the given object , we have in CONSOLE  myScience.hello()
    //i.e this.name refers to value of key in this object


    hello(){
        console.log(this.name);
    }
,
    cube(num){
        return num**3;
    }
};


function yell(msg){
    try{
        console.log(msg.toUpperCase().repeat(4));

    }
    //if no. is paased in msg 
    //to declare an error , if error is found  ,,, then catch will be executed

    catch(e){
        console.log(e);
        console.log("please pass a string next time");
    }
}

////////Array methods in JAVASCRIPT
//it include Filter function
//syntax:

const prime =[2,3,5,7,11,13,17];
prime.forEach(function(no){
console.log(no);
})

const [prime1,prime2,prime3, ...prime4] = prime ; /*this result in 2 as value of prime1 and 3 as value of prime2 and 5 as value of prime3
 while prime4 contains rest of value in arrays :: this method is rest method used to destruct an array 
 this same method also work with objects
 */


//MAP :: creates a new array with the results of calling a callback on every element in the array
//for map
//we can also filter array according to some conditions

const filteredArray = prime.filter(t =>{
    return t<8;
});

const mapped = prime.map(function(element){
    return element*2;
})

//also , prime remain unchanged;;


//setting some function to be executed after sometime,
//3000 is in milliseconds;

setTimeout(() =>{
    console.log("are u raghav")
},3000);

//to repeat execution of finction after some interval

const id = setInterval(() =>{
    console.log("hello there")
}, 4000);

//to stop this execution ,, in console we write;

clearInterval(id);

//every , some  method - - return true or false acc. to condition in elements...e.g

prime.every(w => w>1)  //returns true as all elements in prime array are greater than 1;;

prime.some(x => x>10)  //returns true as some elements in prime array are greater than 10;;

prime.reduce((total,price) => total+price)  //reduce method is used to reduce given array acc to conditions ; here sum of array wiil return

prime.reduce((total,price) => total*price)  //reduce method is used to reduce given array acc to conditions ; here multiplication of array wiil return

//another parameter will add that value to sum , e.g ;;;
prime.reduce((sum,price) => sum+price ,100)  //first , sum will be done and further 100 will be added to sum ;; result = sum + 100;;


//to spread the array into individual arguements , we require spread method and in this method three dots are required ...

Math.max(prime) //this will not give maximum no. from prime array as it takes whole array

Math.max(...prime)  //this will give max ,, as it spread array into individual arguements and then max will be carried out...

//also console.log(...'hello') ;; this will print the characters with space as ... results in spreading of the string

//we can combine two or more arrays (also objects) with the help of spreading

const AAA = [1,3,5,'hello'];
const BBB = [2,4,6,'hi'];

const CCC= [...AAA,...BBB];  //this results in combining the elements of AAA and BBB respectively...
/*but while combining two objects through spreading  , if there are same keys in both two objects , 
then value in the resultant object is given on the basis from last object :e.g : */

const fees = { name : 'raghav' , age : 20};
const fees2 = {name : 'mayank' , age : 27};

// resultant of both two objects is same as B  , also the another example

const fees3 = {...fees , name:'ajay'}; // result will be ajay in value for name ,, as it is overwritten at last

//when array is passed as arguments in a function , then spreading can extract the individual elements from array ::e.g
//i.e spreading at the arguments : now this is not the arguments 
//this method is rest//
//also arguements does not work in arrow syntax of function  ,  thus rest is useful

function result(gold, ...everyone)
{
  console.log(`gold goes to ${gold}`);
  console.log(`EVERYONE goes to ${everyone}`);

}

const user ={
    email : 'raghav@SpeechGrammarList.com',
    born :2000,
    died :2083,
    state : 'delhi',
    name : 'raghav'

}

const {email, state, born,died} = user;

    //syntax error::?:::     //const {born} = user; //born can be accessed;

//also
const firstname = user.firstname;
const {born : birthyear = 'N/A'} = user;  //now born can not be accessed , but birthyear is variable  , born is accessed by born
//if no value is given to birthyear , then N/A will be the default value;


//another way of accessing objects value as :
function fullname(user){
    const {name,email} =user;
    return `${name} and ${email}`;
}
//another way as :

function fullname2({name = 'meenu',email}){     //where meenu is considered as default value
    return `${name} and ${email}`;
}

//array of abjects

const movies = [
    {
        title : 'titanic',
        score :84,
        year :1997
    },
    {
        title : '3 idiots',
        score :86,
        year :2010
    },
    {
        title : 'taaren zameen par',
        score :  88,
        year:2008
    }
]

//now filtering these movies(array of objects) based upon there score values

movies.filter((movie) =>  movie.score>=85);
movies.filter(({score}) =>  score>=85);  //another way

//to map these movies , we require variable

movies.map(movie => {    // movie is variable
    return `${movie.title} (${movie.year}) is rated ${movie.score}`;
})


movies.map(({title,score,year}) => {         //this another way is destructuring elements from the params(array of objects)
    return `${title} (${year}) is rated ${score}`;

})

//i.e in destructuring elements , we does not require variable :   
 

//DOM refers to document object model , it is JS representation of a webpage
//WINDOW IS THE SPECIAL OBJECT ALWAYS AVAILABLE IN THE BROWSER
//WHILE DOCUMENT SHOWS THE CORRESPONDING HTML

// BUT IF WE WRITE console.dir(document) -- it shows all the JS objects  // e,g it shows URL -- current webpage 
// and all the tags used in html is objects in document

//document.all -- massive collection of tags used in array
  //e.g , the 10th tag used is bold tag 

 // i.e
 /*
 <p>
     <b>raghav</b>
</p>  
     
     e.g in paragraph 10th tag used is bold   ,, the characters to be bold is raghav
     to access in console , we have

     document.all[10] --  o/p -- <b>raghav</b>
     document.all[10].innerText --  o/p --   "raghav"

     ////////to change this text without changing in html context we have :

     document.all[10].innerText = "mayank"  ;

     then raghav will be changed to mayank in the webpage
     
     */


     //this will display all the src links of images in console


const present = document.getElementsByTagName('img');

for(let img of present)      
{
    console.log(img.src);
}

//if we want all the images to be same


const press = document.getElementsByTagName('img');

/*
for(let img of press)      
{
    img.src = 'https://wallpapercave.com/wp/wp3211407.jpg';
}
*/
//this results in all images to be one image with this given url


const press_two = document.getElementsByTagName('p');  //results in html collections of all p tags

//similarly:: we can have 

const press_three = document.getElementsByClassName('spider');  

//spider is the class name and this results in html collections of this class

//thus , we can make changes acc to class

// we also have querySelector which points the first thing of that id,tag,class

const press_four  = document.querySelector('p');  //p is tag
const press_five  = document.querySelector('#banner');  //for id --- #
const press_six  = document.querySelector('.spider');    //for class --- .

//these all points to its first thing

const press_seven  = document.querySelector('img:nth-of-type(3)');  //also possible to select paricular image

// if we have anchor tag with title java ,, to select it

////////const press_eight = document.querySelector('a[title="java"]');

// and querySelectorAll  matches with all selector with given id,tag and class

const press_nine = document.querySelectorAll('img');

//to select all img , a, p tag

const press_ten = document.querySelectorAll('p a img');

const press_eleven = document.querySelector('p').innerText;

//press_eleven first selects the first paragraph tag and then press_eleven is the actual text inside this para tag
// and console.dir(press_eleven)  display that text in console

console.dir(press_eleven);

//just like image ,, we can change our inner text as::

document.querySelector('p').innerText = 'raghav become 21';

//changing it to original

document.querySelector('p').innerText = press_eleven;

console.dir('hello');

///// just as .innerText ,, there is .textContent  which contains extra line spacing according to original text written in html

const press_twelve = document.querySelector('.material').textContent;

console.dir('press_twelve');

console.dir(press_twelve);

const press_thirteen = document.querySelector('.material').innerText;

console.dir("the changes b/w innerText and textContent");

console.dir('press_thirteen');

console.dir(press_thirteen);

/*
thus with help of DOM , we can change text of all anchor tag link to (I M LINK!!!) with following code
e.g

const allLinks = document.querySelectorAll('a');

for(let link of allLinks){
    link.InnerText = 'I M LINK!!!' ;
}


*/

//just as .innerText and .textContent  ,, we have .innerHTML which gives all the information about text along with 
//all the tags linked with that tag (e.g  b tag is linked with some text in p tag) ,, thus 

const press_twtwo = document.querySelector('.material').innerHTML

//press_twtwo will results in all info about p tag ,, along with all b tag associated with this p tag
//i.e all the tags b/w opening and closing tags of this p tag...

console.dir('now the .innerHTML will also tells all the tags with current tags');
console.dir(press_twtwo);

//difference b/w among two statements
//one is just changing inner text of h1 tag 
//while other also read italic tag and make changes in browser
//result according to first statement and then second
//thus result is in accordance with second statement

document.querySelector('h1').innerText = '<i>raghav</i>'

document.querySelector('h1').innerHTML = '<i>raghav</i>'


// we can also add some other tag in innerHTML ,, e.g

document.querySelector('h1').innerHTML  +=  '<sup>MAYANK</sup>';
document.querySelector('h1').innerHTML  +=  '<sub>VOHRA</sub>';

//USING DOM  ,,  we can also change the id name as well  (id is attribute)

document.querySelector('#banner').id = 'whoops';

//reversing it back to banner
document.querySelector('#whoops').id = 'banner';

// we can also change the image src

//and to get the link of anchor tag ,, we have

const firstLink  = document.querySelector('a');

console.dir(firstLink.href);


/////similar to .innerHTML ,, we have .getAttribute('href')  which gives the source link of anchor tag through inner HTML itself

console.dir('diff b/w firstLnk and Secondlink  :: i.e  using querySelector and using getAttribute()');

const secondLink = firstLink.getAttribute('href');

console.dir(secondLink);

/////also  below two statement result in null

firstLink.getAttribute('id');  //null
firstLink.getAttribute('class');  //null

//just we can set image source to another source,, we can also change value of href attribute of anchor tag from one to another 
//i.e using setAttribute ,, we can change our attribute values from one to another

firstLink.setAttribute('href','http://www.google.com');    // now href value of burj khalifa image (href of anchor tag) changed to google

///// if we have multiple of input tags and to select a particulr one ,, we can use syntax of array
/// rather is not array ,, it is collection of HTML elements or DOM

const press_thirty = document.querySelectorAll('input');

// selecting particular one :: 

const press_thone = document.querySelectorAll('input')[0];

//we can also select :: e.g

const press_thtwo = document.querySelector('input[type="checkbox"]');
//press_thtwo will give all information about this input tag through HTML collection
//e.g
//press_thtwo.type will results in checkbox in console

//to change its type ,,
// we can have

///////press_thtwo.type =  "text";
//another way::  by using setAttribute

/////press_thtwo.setAttribute('type','text');

//h1 is also object
const press_ththree = document.querySelector('h2');
//press_ththree.style will give all the properties that must be assosiated with object

//this style object does not contain style from our stylesheets , rather ,, it contains style from inline

press_ththree.style.color  // will give inline color value

//also  ,, we can change its value as

press_ththree.style.color = 'red';

//similarly , fontSize can also be changed

press_ththree.style.fontSize = '5em';

// and border as::

press_ththree.style.border = '15px dashed green';

//to change the colour of all tag using DOM

const allLinks_two = document.querySelectorAll('a');

for(let link of allLinks_two){
    link.style.color = 'cyan';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy';

}

//to get the computed values by browser :: we have in console 


window.getComputedStyle(press_ththree);

const press_fifty = window.getComputedStyle(press_ththree).fontSize;

console.dir(press_fifty);


//to change the color of h4 using class purple in css
//purple class is written in css
//we select h4 tag and then attribute (class) is set to purple class which changes the color of

const fifty_one = document.querySelector('h4');


fifty_one.setAttribute('class','purple');

//another e.g ,, h3 attribute set to border
//h3 and h4 get changes using setAttribute

//to find the value of attribute,, we have
// fifty_one.getAttribute('class');
const fifty_two = document.querySelector('h3');

fifty_two.setAttribute('class','border');

//to join 2 classes together  , we have

let currentClasses = fifty_two.getAttribute('class');

fifty_two.setAttribute('class', `${currentClasses}  purple` );

// there is another way to add many class to a DOM element  :: i.e , classList

//syntax::   fifty_two.classList.add('name_of_class');

//also class can be removed from DOM element by::

fifty_two.classList.remove('border');

//to check weather this class present or not in certain element :: we use contains

const fifty_three = fifty_two.classList.contains('border');

console.log(fifty_three);

//to find all the classes ,, we have in console :: syntax:: fifty_two.classList

//we have property called toggle :: if class is present ,, it remove and not present ,, then make it present

fifty_two.classList.toggle('border');

//now border class is present

//we can also access the parent element of given element as::

const firstBold = document.querySelector('b');
console.log(firstBold.parentElement);

//further we can find parent of parent element of bold tag as

console.log(firstBold.parentElement.parentElement);

//it can goes up to many times

//to find the count of all child element of given element ,, we have
const paragraph = document.querySelector('div');
console.log(paragraph.childElementCount);

//also :: to list all children

console.log(paragraph.children); //looks like an array  ,, but not array ,, just HTML collection
//also  :: paragraph.children[0] is an object

//if an element have more than one child element ,, then it contains siblings
// to find next element of sibling and previous element of sibling::

const fifty_four = document.querySelector('.spider2');
console.log(fifty_four.previousElementSibling);
console.log(fifty_four.nextElementSibling);

// nextSibling ,, previousSibling are the DOM Node(#text) which represents text in 

console.log(fifty_four.nextSibling);
console.log(fifty_four.previousSibling);

//we can add image with use of children element ::

const newImg = document.createElement('img');
newImg.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUOBuEwVOl9SXXsxGWLQi3xx0CNA9g9DSS0w&usqp=CAU';

document.body.appendChild(newImg);

newImg.classList.add('border');

//similarly  to add h1  
const fifty_five = document.createElement('h1');
fifty_five.innerText = 'i m new';
document.body.appendChild(fifty_five);

//we can also add text in paragraph
const fifty_six = document.querySelector('p');
fifty_six.append('welcome,,this is new text states to be at home');

//to add text in beginning of paragraph :: here bold text is added ::
const fifty_seven = document.createElement('b');
fifty_seven.append('happiness');
fifty_six.prepend(fifty_seven);

//a DOMstring represent the position relative to target element
//these strings are beforebegin , afterbegin , beforeend , afterend
//to add element before and after another element ,, we have syntax ::
//it's not nested ,, it's sibling


const fifty_eight = document.createElement('h3');
fifty_eight.append('world is in danger due to covid-19');

const fifty_nine = document.querySelector('h2:nth-of-type(2)');
fifty_nine.insertAdjacentElement('afterend',fifty_eight);

const sixty = document.createElement('h4');
sixty.innerText = 'go corona go!!';
fifty_nine.after(sixty);

//to remove child
//li(child) is remove from ul(parent)
const sixty_one= document.querySelector('li');
const sixty_two = sixty_one.parentElement;
sixty_two.removeChild(sixty_one);

//first li is removed from ul
//another way 
const sixty_three = document.querySelector('ol');
sixty_three.parentElement.removeChild(sixty_three);

//to remove 1st image ::

const sixty_four = document.querySelector('img');
sixty_four.remove();
//same as :: sixty_four.parentElement.removeChild(sixty_four);

//to add multiple pokimons :: exercise

const container = document.querySelector('#container');
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

for(let i =0;i<50;i++){

    const pokemon = document.createElement('div');
    const label = document.createElement('span');
    pokemon.classList.add('pokemon');

    label.innerText = `#${i}`;
    const sixty_five = document.createElement('img');

    pokemon.appendChild(sixty_five);
    pokemon.appendChild(label);
    sixty_five.src = `${baseURL}${i}.png`;
    container.appendChild(pokemon);
}

const sixty_six = document.getElementById('id_one');

//*not working???????

sixty_six.onclick = function(){
    console.log('advanced button is clicked');
    console.log('clicking linked via javascript');
}

function scream(){
    console.log('delhi is capital of india');
}

sixty_six.onmouseenter = scream;




///////we can't have two different functions for same events
///////thus addEventListener is more preferable than calling functions 
/////since ,, functions overwritten one another ,,
///// addEventListener can contains all the events in it ,,  or it can combine functions,,,,,...

// addEventListener have another property that it defines no. of times things going to happen

const sixty_seven = document.getElementById('id_two');

sixty_seven.addEventListener('click',function(){
    alert('advanced button is clicked ,, console contains text for this');
    console.log('advanced button is clicked');
})

//another syntax

//same as click we have other option :: dblclick , mouseup , mousedown

//also scream is function above

//we can also write::

sixty_seven.addEventListener('click',scream);

sixty_seven.addEventListener('click',scream,{once:true})
//which states that the scream function occurs only once




document.querySelector('h1').onclick = () =>{
    alert('you clicked h1 ,, console contains text for this');
    
    console.log('h1 is clicked');
}

///////we can't have two different functions for same events

const seventy = document.getElementById('id_four');
seventy.addEventListener('click',function(){
    console.log("clicked");
    const newColor = makeRandomColor();

    document.body.style.backgroundColor = newColor;

    const seventy_two = document.getElementById('id_five');

seventy_two.innerText = newColor;

})

const makeRandomColor = () =>{

    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    return  `rgb(${r},${g},${b})`;

}

const seventy_one = document.getElementsByClassName('class_one');

for(let link of seventy_one){
    link.addEventListener('click',colorize)

}

function colorize(){  
    console.log(this);
    this.style.backgroundColor = makeRandomColor();
    this.style.color = makeRandomColor();
}

/*
we can directly write :
document.getElementsByClassName('class_one').addEventListener('click',function(){
    alert('clicked');
})
*/

//evt is event::

document.getElementById('id_six').addEventListener('click',function(evt){
    console.log(evt);
})

document.getElementById('id_seven').addEventListener('keydown',function(e){
    console.log(e);
})

document.getElementById('id_seven').addEventListener('keyup',function(){
    console.log('keyup');
})

document.getElementById('id_eight').addEventListener('keydown',function(e){
    console.log(e.key);
    console.log(e.code);
})


//this result text(code of key) in console if any key is pressed in webpage(browser)
window.addEventListener('keydown',function(e){
    console.log(e.code);
})

//also some commands can be given :: and then it displays in console
window.addEventListener('keydown',function(e){
    switch(e.code){
        case 'ArrowUp':
            console.log("UP!");
            break;
         
            case 'ArrowDown':
                console.log("DOWN!");
                break;

                case 'ArrowLeft':
                    console.log("LEFT!");
                    break;

                    case 'ArrowRight':
                        console.log("RIGHT!");
                        break;

                        default:   //i.e if key is pressed other than that
                            console.log("IGNORED!");

    }


})

const tweetForm = document.querySelector('#tweetForm');

const tweetsContainer = document.querySelector('#tweets');

tweetForm.addEventListener('submit',function(e){

    e.preventDefault();

    const usernameInput = document.querySelectorAll('input')[3];
    const passwordInput = document.querySelectorAll('input')[4];

    console.log( usernameInput.value , passwordInput.value);
    console.log(`inputted value of username is ${usernameInput.value}`);
    console.log(`inputted value of password is ${passwordInput.value}`);
  
   const seventy_four = tweetForm.elements.username;
   const seventy_five =tweetForm.elements.tweet;
  
   addTweet(seventy_four.value,seventy_five.value);

   seventy_four.value = '';
   seventy_five.value = '';

    alert('FORM IS SUBMITTED SUCCESSFULLY');
    console.log('FORM IS SUBMITTED SUCCESSFULLY');
    
})

// to make input text changes
/*ELEMENTS IS JUST A COLLECTION

document.querySelectorAll('input')[3].value = 'VOHRA_RAGHAV'

console.log('username is changed via javascript');
*/

const addTweet = (username,tweet) => {

    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
 
    bTag.append(username) ;
    newTweet.append(bTag);
    newTweet.append(`-${tweet}`);
    tweetsContainer.append(newTweet);

}

const seventy_eight = document.querySelector('#id_ten');
seventy_eight.addEventListener('change',function(e){
    console.log('changes observed in text inputted');
})

seventy_eight.addEventListener('input',function(e){
    console.log('this is INPUT EVENT');
    console.log(e);
})

const seventy_nine  = document.querySelector('#id_twelve');
const eighty = document.querySelector('#id_eleven');

seventy_nine.addEventListener('input',function(e){
    eighty.innerText = seventy_nine.value;
})


//TO PREVENT EVENT BUBBLING
const eighty_one = document.querySelector('#id_thirteen');
const eighty_two = document.querySelector('#id_fourteen');

eighty_two.addEventListener('click',function(e){
    eighty_one.style.backgroundColor = makeRandomColor();
    e.stopPropagation();     //this prevents event bubbling
})

eighty_one.addEventListener('click',function(){
    eighty_one.classList.toggle('hide');

})

/* not working??
const lis = document.querySelectorAll('li');
for(li of lis){
    li.addEventListener('click',function(){
        li.remove();
    })
}
*/

console.log('also ,, when you pressed this list members ,,  it will be deleted from this list');


tweetsContainer.addEventListener('click',function(e){
     console.log('this li is clicked ,, thus it gets deleted from Browser');
     console.log(e);
     e.target.remove();
     console.dir(e.target);

})


// A promise is an object representing the eventual completion or failure of an asynchronous operation


////////ASYNCHRONOUS JAVASCRIPT

const fakeRequestPromise = (url) =>{

    return new Promise((resolved,reject) => {
        const delay = Math.floor(Math.random() * 4500) + 500;
        setTimeout(() => {
            if(delay>4000){
                reject('connection Timeout :(');
            }
            else{
                resolved(`here is your fake data from ${url}`);
            }
        }, delay);
    })
}

new Promise((resolve,reject) => {
    resolve();
})


/*
fakeRequestPromnise('yelp.com/api/coffee/page1')
.then(() =>{
    console.log("it worked from page 1");
    fakeRequestPromnise('yelp.com/api/coffee/page2')
    .then(() => {
        console.log('it worked for page 2')
        .then(() => {
            console.log('it worked for page 3')
        })
        .catch(() => {
            console.log('oh no error for page 3')
        })
    })
    .catch(() => {
        console.log('oh no error for page2')
   
    })
})
.catch(() =>{
    console.log('oh no error for page 1')
})
*/

//above fakeRequest Promise can also be written as

fakeRequestPromnise('yelp.com/api/coffee/page1')
.then((data) => {
    console.log('it worked for page 1')
    console.log(data);
    fakeRequestPromnise('yelp.com/api/coffee/page2')
})
.then((data) => {
    console.log('it worked for page 2')
    console.log(data);
    fakeRequestPromnise('yelp.com/api/coffee/page3')
})
.then((data) => {
    console.log('it worked for page 1')
    console.log(data);
})
.catch((err) =>{
     console.log('oh no a request failed')
     console.log(err);
})